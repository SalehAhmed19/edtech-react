const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE);

module.exports = (
  paymentsCollection,
  cartsCollection,
  ordersCollection,
  enrolledCoursesCollection
) => {
  // embeded session
  router.post("/stripe/create-checkout-session", async (req, res) => {
    const cart = req.body;
    // console.log(cart[0]);
    const course = cart[0];
    const amount = course.courseFee / 124;
    const price = parseInt(amount) * 100;
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: course.courseName,
              images: [course.image],
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      ui_mode: "embedded",
      return_url:
        "https://localhost:5173/checkout/return?session_id={CHECKOUT_SESSION_ID}",
    });

    res.send({ clientSecret: session.client_secret });
  });

  // get session id
  router.get("/stripe/session-status", async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(
      req.query.session_id
    );

    console.log({ session });

    res.send({
      status: session.status,
      payment_status: session.payment_status,
      customer_email: session.customer_details.email,
      trxId: session.payment_intent,
    });
  });
  // Payments
  router.post("/stripe/create-payment-intent", async (req, res) => {
    const payment = req.body.price;
    // console.log(payment);
    const amount = payment * 100;

    // console.log(amount);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "bdt",
      payment_method_types: ["card"],
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });

  router.post("/stripe/payment-success", async (req, res) => {
    const payment = req.body;
    const email = req.body.email;
    const query = { email: email };
    const carts = req.body.carts;

    const newItems = carts.map((cart) => cart);
    // console.log(newItems);
    const isExist = await ordersCollection.findOne(query);
    // console.log({ isExist });

    const updatedCart = {
      $push: {
        carts: {
          $each: newItems,
        },
      },
    };

    const options = {
      upsert: true, // Set to true to enable the "update or insert" behavior
    };

    const result = await paymentsCollection.insertOne(payment);
    if (res) {
      await cartsCollection.deleteMany(query);
      if (!isExist && !isExist?.carts.length) {
        await ordersCollection.updateOne(query, updatedCart, options);
        await enrolledCoursesCollection.updateOne(query, updatedCart, options);
      }
    }

    res.send(result);
  });

  router.get("/", async (req, res) => {
    const email = req.query.email;
    const query = { email: email };

    const result = await paymentsCollection.find(query).toArray();

    res.send(result);
  });

  return router;
};
