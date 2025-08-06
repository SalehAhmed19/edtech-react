const client = require("../Connect");

const enrolledCoursesCollection = client
  .db("edTech")
  .collection("enrolledCoursesCollection");

module.exports = enrolledCoursesCollection;
