const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Authorization: jwt
router.post("/jwt", async (req, res) => {
  const user = req.body;
  // const payload = { email: user.email };
  const token = jwt.sign(user, process.env.SECRET_TOKEN, {
    expiresIn: "1h",
  });
  // // console.log(token);
  res.send({ token });
});

module.exports = router;
