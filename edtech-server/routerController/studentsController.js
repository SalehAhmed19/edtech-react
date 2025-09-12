const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

module.exports = (studentsCollection, usersCollection) => {
  // post users to db: student
  router.post("/post-student", async (req, res) => {
    const student = req.body;
    const user = {
      name: student.name,
      email: student.email,
      photo: student.photo,
      role: student.role,
    };

    const query = { email: student.email };
    const existingUser = await studentsCollection.findOne(query);
    if (existingUser) return; // user exists, do nothing

    const result = await studentsCollection.insertOne(student);
    if (result) {
      await usersCollection.insertOne(user);
    }

    res.send(result);
  });

  // get users from db: students
  router.get("/", async (req, res) => {
    const students = await studentsCollection.find().toArray();

    res.send(students);
  });

  // get single users from db: students
  router.get("/", async (req, res) => {
    const email = req.query.email;
    const query = { email: email };
    const student = await studentsCollection.findOne(query);

    res.send(student);
  });

  router.patch("/update-student-details", async (req, res) => {
    const email = req.query.email;
    const updateDetails = req.body;
    const query = { email: email };
    const updatedDoc = {
      $set: updateDetails,
    };

    // const options = {
    //   upsert: true, // Set to true to enable the "update or insert" behavior
    // };

    const result = await studentsCollection.updateOne(query, updatedDoc);
    // console.log(result);
    res.send(result);
  });

  return router;
};
