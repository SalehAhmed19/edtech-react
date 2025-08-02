const express = require("express");
const Payment = require("../Schema/paymentsSchema");
const EnrolledCourse = require("../Schema/enrolledCoursesSchema");
const Order = require("../Schema/ordersSchema");
const Cart = require("../Schema/cartsSchema");
const stripe = require("stripe")(process.env.STRIPE);
const router = express.Router();

// get all payments
router.get("/", async (req, res) => {
  const result = await Payment.find({ email: req.query.email });
  console.log(res);
  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send({ message: "Payments not found!" });
  }
});

// create a payment intent
router.post("/stripe/create-payment-intent", async (req, res) => {
  const payment = req.body.price;
  const amount = payment * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "bdt",
    payment_method_types: ["card"],
  });

  if (res) {
    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(400).send({ message: "Failed to create payment intent!" });
  }
});

// post payment
router.post("/stripe/payment-success", async (req, res) => {
  const payment = new Payment(req.body);
  const oId = Math.random().toString(20);
  const orderId = "ET_O_" + oId.split(".")[1];
  const orders = new Order({
    orderId: orderId,
    email: payment.email,
    carts: payment.carts,
  });
  const enrolledCourses = new EnrolledCourse({
    email: payment.email,
    courses: payment.carts,
  });
  const result = await payment.save();
  if (result) {
    await Cart.deleteMany({ email: payment.email });
    await orders.save();
    await enrolledCourses.save();

    res.status(200).send({ message: "Payment successful!" });
  } else {
    res.status(400).send({ message: "Failed to save payment!" });
  }
});

module.exports = router;
