const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
  },
  courseTitle: {
    type: String,
    required: true,
  },
  courseSubtitle: {
    type: String,
    required: true,
  },
  whatYouLearn: {
    type: [String],
    required: true,
  },
  courseOutline: {
    type: [
      {
        title: { type: String, required: true },
        content: { type: String, required: true },
      },
    ],
    required: true,
  },
  courseDesignedFor: {
    type: String,
    required: true,
  },
  instructors: {
    type: [
      {
        image: { type: String, required: true },
        name: { type: String, required: true },
        designation: { type: String, required: true },
      },
    ],
    required: true,
  },
  courseBannerImage: {
    type: String,
    required: true,
  },
  lessionsNumber: {
    type: Number,
    required: true,
  },
  lessionLevel: {
    type: String,
    required: true,
    enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
  },
  coursesPopularityStatus: {
    type: String,
    required: true,
    enum: ["Popular", "Trending", "New", "Free"],
  },
  category: {
    type: String,
    required: true,
  },
  courseFee: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Course = mongoose.model("Course", coursesSchema);
module.exports = Course;
