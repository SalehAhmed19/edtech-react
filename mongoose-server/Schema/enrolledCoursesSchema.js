const mongoose = require("mongoose");
const enrolledCoursesSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  courses: [
    {
      type: {
        _id: { type: String, required: true },
        email: { type: String, required: true },
        courseName: { type: String, required: true },
        image: { type: String, required: true },
        courseId: { type: String, required: true },
        courseFee: { type: Number, required: true },
        category: { type: String, required: true },
        instructors: [
          {
            type: {
              image: { type: String, required: true },
              name: { type: String, required: true },
              designation: { type: String, required: true },
            },
            required: true,
          },
        ],
        status: { type: String, required: true },
      },
    },
  ],
});

const EnrolledCourse = mongoose.model("EnrolledCourse", enrolledCoursesSchema);

module.exports = EnrolledCourse;
