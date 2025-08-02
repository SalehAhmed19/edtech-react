const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE);

module.exports = (
  paymentsCollection,
  cartsCollection,
  ordersCollection,
  enrolledCoursesCollection
) => {
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
    const oId = Math.random().toString(20);
    const orderId = "ET_O_" + oId.split(".")[1];
    const orders = { orderId: orderId, email: email, carts: carts };
    const enrolledCourses = {
      email: email,
      courses: carts,
    };

    const result = await paymentsCollection.insertOne(payment);
    if (res) {
      await cartsCollection.deleteMany(query);
      await ordersCollection.insertOne(orders);
      await enrolledCoursesCollection.insertOne(enrolledCourses);
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
