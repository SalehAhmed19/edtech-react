// jwt middleware
const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Forbiddent access!" });
  }
  if (!token) {
    return res.status(401).send({ message: "Forbiddent access!" });
  }

  jwt.verify(token, process.env.SECRET_TOKEN, (error, decoded) => {
    if (error) {
      return res.status(401).send({ message: "Forbiddent access!" });
    } else {
      req.decoded = decoded;
      next();
    }
  });
};

module.exports = verifyToken;
