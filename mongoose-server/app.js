const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// controllers
const coursesController = require("./RouterControllers/coursesController");
const cartsController = require("./RouterControllers/cartsControlller");
const skillsController = require("./RouterControllers/skillsController");
const studentsController = require("./RouterControllers/studentsController");
const teachersController = require("./RouterControllers/teachersController");
const usersController = require("./RouterControllers/usersControllers");
const ordersController = require("./RouterControllers/ordersController");
const enrolledCoursesController = require("./RouterControllers/enrolledCoursesController");
const paymentsControllers = require("./RouterControllers/paymentsControllers");
// AUTH
const JWT = require("./Authorization/JWT");

const PORT = process.env.PORT || 4000;

// app initialization
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
mongoose
  .connect("mongodb://localhost/eduDb")
  .then(() => {
    console.log("EduDB connected with mongoose");
  })
  .catch((err) => {
    console.log(err);
  });

//   routes
app.use("/api/courses", coursesController);
app.use("/api/carts", cartsController);
app.use("/api/skills", skillsController);
app.use("/api/students", studentsController);
app.use("/api/teachers", teachersController);
app.use("/api/users", usersController);
app.use("/api/orders", ordersController);
app.use("/api/enrolled-courses", enrolledCoursesController);
app.use("/api/payments", paymentsControllers);
app.use("/api/authorization", JWT);

app.get("/", (req, res) => {
  res.send("Welcome to EduDB API");
});

app.listen(PORT, () => {
  console.log(`eduDb is listening on port ${PORT}`);
});
