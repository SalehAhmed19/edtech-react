const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: "https://i.ibb.co/VpVfFWTP/User-Windows.webp",
  },
  role: {
    type: String,
    required: true,
    enum: ["student", "teacher", "admin"],
  },
});

const User = mongoose.model("User", usersSchema);
module.exports = User;
