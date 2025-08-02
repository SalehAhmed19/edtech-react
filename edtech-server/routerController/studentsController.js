const express = require("express");
const router = express.Router();

module.exports = (studentsCollection) => {
  // post users to db: student
  router.post("/post-student", async (req, res) => {
    const student = req.body;

    const query = { email: student.email };
    const existingUser = await studentsCollection.findOne(query);
    if (existingUser) return; // user exists, do nothing

    const result = await studentsCollection.insertOne(student);
    if (result) {
      await usersCollection.insertOne(student);
    }

    res.send(result);
  });

  // get users from db: students
  router.get("/", async (req, res) => {
    const students = await studentsCollection.find().toArray();

    res.send(students);
  });

  // get users from db: students
  router.get("/:email", async (req, res) => {
    const email = req.params.email;
    const query = { email: email };
    const student = await studentsCollection.findOne(query);

    res.send(student);
  });

  return router;
};
