const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

module.exports = (teachersCollection, studentsCollection, usersCollection) => {
  // become teacher
  router.post("/post-teacher", async (req, res) => {
    const teacher = req.body;
    const email = teacher.email;
    const query = { email: email };

    const existingTeacher = await teachersCollection.findOne(query);
    if (existingTeacher) return; // user exists, do nothing

    const updateRole = {
      $set: {
        role: "teacher",
      },
    };

    const result = await teachersCollection.insertOne(teacher);
    if (result.acknowledged === true) {
      await studentsCollection.deleteOne(query);
      await usersCollection.updateOne(query, updateRole);
    }

    res.send(result);
  });

  router.get("/:email", async (req, res) => {
    const email = req.params.email;
    const query = { email: email };
    // console.log(query);
    const teacher = await teachersCollection.findOne(query);
    // console.log(teacher);

    res.send(teacher);
  });

  router.patch("/update-teacher-details", async (req, res) => {
    const email = req.query.email;
    const updateDetails = req.body;
    const query = { email: email };
    const updatedDoc = {
      $set: updateDetails,
    };

    // const options = {
    //   upsert: true, // Set to true to enable the "update or insert" behavior
    // };

    const result = await teachersCollection.updateOne(query, updatedDoc);
    console.log(result);
    res.send(result);
  });

  return router;
};
