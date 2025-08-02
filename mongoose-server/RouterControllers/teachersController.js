const express = require("express");
const Teacher = require("../Schema/teachersSchema");
const Student = require("../Schema/studentsSchema");
const User = require("../Schema/usersSchema");
const router = express.Router();

// get all teacher
router.get("/", async (req, res) => {
  const result = await Teacher.find({});

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send({ message: "Teachers not found!" });
  }
});

// get a single teacher by email
router.get("/:email", async (req, res) => {
  const email = req.params.email;
  const result = await Teacher.find({ email: email });

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send({ message: "Teacher not found!" });
  }
});

// add a new teacher
router.post("/post-teacher", async (req, res) => {
  const newTeacher = new Teacher(req.body);
  const exsistingStudent = await Teacher.findOne({ email: newTeacher.email });
  if (exsistingStudent) return; // do nothing if teacher already exists

  const result = await newTeacher.save();
  await Student.deleteOne({ email: newTeacher.email });
  await User.updateOne(
    { email: newTeacher.email },
    { $set: { role: "teacher" } }
  );

  if (result) {
    res.status(200).send({ message: "Teacher added successfully!" });
  } else {
    res.status(400).send({ message: "Failed to add teacher!" });
  }
});

module.exports = router;
