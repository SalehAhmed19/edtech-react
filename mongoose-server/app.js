const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const stripe = require("stripe")(process.env.STRIPE);

// controllers
const coursesController = require("./RouterControllers/coursesController");
const cartsController = require("./RouterControllers/cartsControlller");
const skillsController = require("./RouterControllers/skillsController");
const studentsController = require("./RouterControllers/studentsController");

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

app.get("/", (req, res) => {
  res.send("Welcome to EduDB API");
});

app.listen(PORT, () => {
  console.log(`eduDb is listening on port ${PORT}`);
});
