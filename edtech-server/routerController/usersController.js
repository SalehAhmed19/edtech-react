const express = require("express");
const router = express.Router();

module.exports = (usersCollection) => {
  // all users
  router.get("/", async (req, res) => {
    const users = await usersCollection.find().toArray();

    res.send(users);
  });

  // user
  router.get("/single-user", async (req, res) => {
    const email = req.query.email;
    const query = { email: email };
    const user = await usersCollection.findOne(query);
    console.log(email);
    console.log(user);

    res.send(user);
  });

  return router;
};
