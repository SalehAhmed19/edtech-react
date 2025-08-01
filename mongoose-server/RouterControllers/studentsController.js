const express = require("express");
const Student = require("../Schema/studentsSchema");
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await Student.find({});

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send({ message: "Students not found!" });
  }
});

router.post("/post-student", async (req, res) => {
  const newStudent = new Student(req.body);
  const result = await newStudent.save();

  if (result) {
    res.status(200).send({ message: "Student added successfully!" });
  } else {
    res.status(400).send({ message: "Failed to add student!" });
  }
});

router.post("/add-student", async (req, res) => {});

module.exports = router;
