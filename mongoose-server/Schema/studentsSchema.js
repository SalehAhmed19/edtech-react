const mongoose = require("mongoose");
const studentsSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photo: {
    type: String || null,
  },
  role: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", studentsSchema);
module.exports = Student;
