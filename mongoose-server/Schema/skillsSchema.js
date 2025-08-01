const mongoose = require("mongoose");
const skillsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: { type: String, required: true },
  experience: { type: String, required: true },
  project: { type: String, required: true },
  gitHub: { type: String, required: true },
});

const Skill = mongoose.model("Skill", skillsSchema);

module.exports = Skill;
