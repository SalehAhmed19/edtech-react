const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

module.exports = (skillsCollection) => {
  // skills
  router.post("/post-skills", async (req, res) => {
    const skills = req.body;
    const email = req.body.email;
    const query = { email: email };
    const isExist = skillsCollection.findOne(query);
    // console.log(skills);
    console.log(skills);
    const newSkill = {
      name: skills.skills[0].name,
      experience: skills.skills[0].experience,
      project: skills.skills[0].project,
      gitHub: skills.skills[0].gitHub,
    };
    console.log(newSkill);
    const updatedSkills = {
      $push: {
        skills: newSkill,
      },
    };

    const options = {
      upsert: true, // Set to true to enable the "update or insert" behavior
    };

    const result = await skillsCollection.updateOne(
      query,
      updatedSkills,
      options
    );

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
