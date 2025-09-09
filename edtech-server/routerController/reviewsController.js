const express = require("express");
const router = express.Router();

module.exports = (reviewsCollection) => {
  router.get("/", async (req, res) => {
    const reviews = await reviewsCollection.find().toArray();

    console.log({ reviews });

    res.send(reviews);
  });

  return router;
};
