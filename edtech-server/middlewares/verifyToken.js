const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .send({ message: "Unauthorized access: Token missing or malformed." });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.SECRET_TOKEN, (error, decoded) => {
    if (error) {
      console.error("JWT Verification Error:", error.message);

      return res
        .status(401)
        .send({ message: "Unauthorized access: Invalid or expired token." });
    } else {
      req.decoded = decoded;

      next();
    }
  });
};

module.exports = verifyToken;
