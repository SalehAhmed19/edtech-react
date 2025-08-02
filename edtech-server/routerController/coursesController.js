const express = require("express");
const router = express.Router();

module.exports = (coursesCollection) => {
  // get courses
  router.get("/", async (req, res) => {
    const result = await coursesCollection.find().toArray();

    res.send(result);
  });

  return router;
};
