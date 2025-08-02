// // jwt middleware
// const jwt = require("jsonwebtoken");
// const verifyToken = (req, res, next) => {
//   // // console.log({ fromMiddleWare: req.headers });
//   const token = req.headers.authorization.split(" ")[1];
//   // // console.log(token);
//   if (!req.headers.authorization) {
//     return res.status(401).send({ message: "Forbiddent access!" });
//   }
//   if (!token) {
//     return res.status(401).send({ message: "Forbiddent access!" });
//   }

//   jwt.verify(token, process.env.SECRET_TOKEN, (error, decoded) => {
//     if (error) {
//       return res.status(401).send({ message: "Forbiddent access!" });
//     } else {
//       req.decoded = decoded;
//       next();
//     }
//   });
// };

// module.exports = verifyToken;

// Ensure you import the jsonwebtoken library at the top of this file
const jwt = require("jsonwebtoken");

// IMPORTANT: Ensure your JWT secret (process.env.SECRET_TOKEN) is loaded
// in your main application file (e.g., app.js/server.js) using dotenv:
// require('dotenv').config();

const verifyToken = (req, res, next) => {
  // 1. Get the Authorization header from the request
  const authHeader = req.headers.authorization;

  // 2. CRITICAL CHECK: Ensure the header exists and starts with 'Bearer '
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // If the header is missing or doesn't have the "Bearer " prefix,
    // it's an unauthorized access attempt.
    return res
      .status(401)
      .send({ message: "Unauthorized access: Token missing or malformed." });
  }

  // 3. Extract the actual token string (after "Bearer ")
  const token = authHeader.split(" ")[1];

  // 4. Verify the token using your secret key
  jwt.verify(token, process.env.SECRET_TOKEN, (error, decoded) => {
    if (error) {
      // If verification fails (e.g., token is invalid, expired, or tampered with),
      // log the error for debugging purposes on the server.
      console.error("JWT Verification Error:", error.message);
      // Send a 401 Unauthorized response to the client.
      return res
        .status(401)
        .send({ message: "Unauthorized access: Invalid or expired token." });
    } else {
      // If the token is valid, attach the decoded payload (which contains user info)
      // to the request object. This makes user data available to subsequent route handlers.
      req.decoded = decoded;
      // Call next() to pass control to the next middleware or the route handler.
      next();
    }
  });
};

module.exports = verifyToken;
