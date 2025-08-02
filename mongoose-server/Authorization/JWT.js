const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/jwt", async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.SECRET_TOKEN, {
    expiresIn: "1h",
  });

  res.send({ token });
});

module.exports = router;
