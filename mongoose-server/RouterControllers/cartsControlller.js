const express = require("express");
const Cart = require("../Schema/cartsSchema");
const verifyToken = require("../Middlewer/VerifyToken");
const router = express.Router();

// get all carts for a specific user
router.get("/", async (req, res) => {
  const email = req.query.email;
  const result = await Cart.find({ email: email });

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send({ message: "Carts not found!" });
  }
});

// post a new cart item
router.post("/add-to-cart", async (req, res) => {
  const cartItem = new Cart(req.body);
  const existingItem = await Cart.findOne({
    email: cartItem.email,
    courseId: cartItem.courseId,
  });

  if (existingItem) {
    return res.status(400).send({ message: "Item already exists in cart!" });
  } else {
    const result = await cartItem.save();
    if (result) {
      res.status(200).send({ message: "Item added to cart!" });
    } else {
      res.status(404).send({ message: "Failed to add item to cart!" });
    }
  }
});

// delete an item from the cart
router.delete("/remove-from-cart/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Cart.findByIdAndDelete(id);

  if (result) {
    res.status(200).send({ message: "Item removed from cart!" });
  } else {
    res.status(404).send({ message: "Failed to remove item from cart!" });
  }
});

module.exports = router;
