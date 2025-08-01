const express = require("express");
const Skill = require("../Schema/skillsSchema");
const router = express.Router();

router.get("/", async (req, res) => {
  const email = req.query.email;
  const result = await Skill.find({ email: email });

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send({ message: "Skills not found!" });
  }
});

router.post("/add-skill", async (req, res) => {
  const skillItem = new Skill(req.body);
  const result = await skillItem.save();

  if (result) {
    res.status(200).send({ message: "Skill added successfully!" });
  } else {
    res.status(400).send({ message: "Failed to add skill!" });
  }
});

module.exports = router;
