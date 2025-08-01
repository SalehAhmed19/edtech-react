const express = require("express");
const Student = require("../Schema/studentsSchema");
const router = express.Router();

// get all students
router.get("/", async (req, res) => {
  const result = await Student.find({});

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send({ message: "Students not found!" });
  }
});

// get a single student by email
router.get("/:email", async (req, res) => {
  const email = req.params.email;
  const result = await Student.find({ email: email });

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send({ message: "Students not found!" });
  }
});

// add a new student
router.post("/post-student", async (req, res) => {
  const newStudent = new Student(req.body);
  const exsistingStudent = await Student.findOne({ email: newStudent.email });
  if (exsistingStudent) return; // do nothing if student already exists

  const result = await newStudent.save();

  if (result) {
    res.status(200).send({ message: "Student added successfully!" });
  } else {
    res.status(400).send({ message: "Failed to add student!" });
  }
});

module.exports = router;
