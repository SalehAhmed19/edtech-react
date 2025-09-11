const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

module.exports = (enrolledCoursesCollection) => {
  // enrolled courses
  router.get("/", async (req, res) => {
    const email = req.query.email;
    const query = { email: email };

    const result = await enrolledCoursesCollection.find(query).toArray();

    res.send(result);
  });

  return router;
};
