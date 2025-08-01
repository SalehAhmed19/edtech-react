const express = require("express");
const EnrolledCourse = require("../Schema/enrolledCoursesSchema");
const router = express.Router();

router.get("/", async (req, res) => {
  const email = req.query.email;
  const result = await EnrolledCourse.find({ email: email });

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send({ message: "No enrolled courses found" });
  }
});

router.post("/post-enrolled-course", async (req, res) => {
  const enrolledCourse = new EnrolledCourse(req.body);
  const result = await enrolledCourse.save();

  if (result) {
    res.status(200).send({ message: "Enrolled course added successfully!" });
  } else {
    res.status(400).send({ message: "Failed to add enrolled course!" });
  }
});

module.exports = router;
