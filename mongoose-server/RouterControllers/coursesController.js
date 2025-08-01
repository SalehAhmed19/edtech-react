const express = require("express");
const Course = require("../Schema/coursesSchema");
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await Course.find({});

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send({ message: "Courses not found!" });
  }
});

router.post("/", async (req, res) => {
  const result = await Course.insertMany(req.body);

  if (result) {
    res.status(200).send({ message: "Courses added!" });
  } else {
    res.status(404).send({ message: "Courses not added!" });
  }
});

module.exports = router;
