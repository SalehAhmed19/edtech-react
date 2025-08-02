const express = require("express");
const User = require("../Schema/usersSchema");
const router = express.Router();

// get all users
router.get("/", async (req, res) => {
  const users = await User.find({});

  if (users) {
    res.status(200).send(users);
  } else {
    res.status(404).send({ message: "Users not found!" });
  }
});

// get a single user by email
router.get("/", async (req, res) => {
  const email = req.query.email;
  const user = await User.find({ email: email });

  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send({ message: "User not found!" });
  }
});

module.exports = router;
