const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const port = process.env.PORT || 4000 || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const { default: axios } = require("axios");
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sam-cluster-01.sjti4dh.mongodb.net/?retryWrites=true&w=majority&appName=SAM-Cluster-01`;
const uri = "mongodb://localhost:27017/";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // TODO: For locally - uncomment this
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // collections
    const coursesCollection = client
      .db("edTech")
      .collection("coursesCollection");

    const usersCollection = client.db("edTech").collection("usersCollection");
    const studentsCollection = client
      .db("edTech")
      .collection("studentsCollection");
    const teachersCollection = client
      .db("edTech")
      .collection("teachersCollection");

    const cartsCollection = client.db("edTech").collection("cartsCollection");
    const skillsCollection = client.db("edTech").collection("skillsCollection");
    const paymentsCollection = client
      .db("edTech")
      .collection("paymentsCollection");

    const ordersCollection = client.db("edTech").collection("ordersCollection");
    const enrolledCoursesCollection = client
      .db("edTech")
      .collection("enrolledCoursesCollection");

    // Authorization: jwt
    app.post("/api/authorization/jwt", async (req, res) => {
      const user = req.body;
      // const payload = { email: user.email };
      const token = jwt.sign(user, process.env.SECRET_TOKEN, {
        expiresIn: "1h",
      });
      // // console.log(token);
      res.send({ token });
    });

    // jwt middleware
    const verifyToken = (req, res, next) => {
      // // console.log({ fromMiddleWare: req.headers });
      const token = req.headers.authorization.split(" ")[1];
      // // console.log(token);
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

    // users
    app.use(
      "/api/users",
      require("./routerController/usersController")(usersCollection)
    );

    // carts
    app.use(
      "/api/carts",
      require("./routerController/cartsController")(cartsCollection)
    );

    // skills
    app.use(
      "/api/skills",
      require("./routerController/skillsController")(skillsCollection)
    );

    // payments
    app.use(
      "/api/payments",
      require("./routerController/paymentsController")(
        paymentsCollection,
        cartsCollection,
        ordersCollection,
        enrolledCoursesCollection
      )
    );

    // orders
    app.use(
      "/api/orders",
      require("./routerController/ordersContoller")(ordersCollection)
    );

    // courses
    app.use(
      "/api/courses",
      require("./routerController/coursesController")(coursesCollection)
    );

    // students
    app.use(
      "/api/students",
      require("./routerController/studentsController")(studentsCollection)
    );

    // teachers
    app.use(
      "/api/teachers",
      require("./routerController/teachersController")(teachersCollection)
    );

    // enrolled courses
    app.get("/api/enrolled-courses", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };

      const result = await enrolledCoursesCollection.find(query).toArray();

      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // TODO: For locally - uncomment this
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("EdTech running");
});

app.listen(port, () => {
  console.log(`EdTech running at post ${port}`);
});

/**
 * ----------------------
 * NAMING CONVENTION
 * ----------------------
 * app.get("/users")
 * app.get("/users/:id")
 * app.post("/users")
 * app.put("/users/:id")
 * app.patch("/users/:id")
 * app.delete("/users/:id")
 */
