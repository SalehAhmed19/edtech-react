const express = require("express");
const router = express.Router();

module.exports = (ordersCollection) => {
  router.get("/", async (req, res) => {
    const email = req.query.email;
    const query = { email: email };

    const result = await ordersCollection.find(query).toArray();

    res.send(result);
  });

  return router;
};
