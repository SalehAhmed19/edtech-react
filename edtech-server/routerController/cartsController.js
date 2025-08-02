const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();
module.exports = (cartsCollection) => {
  // add to carts
  router.post("/post-cart", verifyToken, async (req, res) => {
    const newCartItem = req.body;
    const courseId = newCartItem.courseId;
    const email = newCartItem.email;
    const filter = { courseId: courseId, email: email };
    try {
      const existing = await cartsCollection.findOne(filter);

      if (!existing) {
        const result = await cartsCollection.insertOne(newCartItem);
        res.send(result);
      } else {
        res.send({ message: "Items already in cart" });
      }
    } catch (err) {
      // console.log(err);
    }
  });

  // get carts by email
  router.get("/", verifyToken, async (req, res) => {
    const email = req.query.email;
    const query = { email: email };

    const result = await cartsCollection.find(query).toArray();

    res.send(result);
  });

  router.delete("/remove-carts/:id", verifyToken, async (req, res) => {
    const id = req.params.id;
    const query = { courseId: id };
    const result = await cartsCollection.deleteOne(query);

    res.send(result);
  });

  return router;
};
