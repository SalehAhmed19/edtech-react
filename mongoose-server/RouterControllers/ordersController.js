const express = require("express");
const Order = require("../Schema/ordersSchema");
const router = express.Router();

// get all orders for a specific user
router.get("/", async (req, res) => {
  const email = req.query.email;
  const result = await Order.find({ email: email });

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send({ message: "Orders not found!" });
  }
});

router.post("/add-order", async (req, res) => {
  const orderItem = new Order(req.body);
  const result = await orderItem.save();

  if (result) {
    res.status(200).send({ message: "Order added successfully!" });
  } else {
    res.status(400).send({ message: "Failed to add order!" });
  }
});
module.exports = router;
