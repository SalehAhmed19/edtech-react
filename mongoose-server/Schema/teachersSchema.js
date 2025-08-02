const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: {
      street: String,
      city: String,
      postal: String,
    },
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "teacher",
  },
  teacherId: {
    type: String,
    required: true,
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
