const express = require("express");
const router = express.Router();

module.exports = (skillsCollection) => {
  // skills
  router.post("/post-skills", async (req, res) => {
    const skills = req.body;
    // console.log(skills);

    const result = await skillsCollection.insertOne(skills);

    res.send(result);
  });

  router.get("/", async (req, res) => {
    const email = req.query.email;
    const query = { email: email };

    const result = await skillsCollection.find(query).toArray();

    res.send(result);
  });

  return router;
};
