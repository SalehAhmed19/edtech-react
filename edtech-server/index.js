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
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sam-cluster-01.sjti4dh.mongodb.net/?retryWrites=true&w=majority&appName=SAM-Cluster-01`;

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

    const studentsCollection = client
      .db("edTech")
      .collection("studentsCollection");

    const cartsCollection = client.db("edTech").collection("cartsCollection");
    const skillsCollection = client.db("edTech").collection("skillsCollection");

    // Authorization: jwt
    app.post("/api/authorization/jwt", async (req, res) => {
      const user = req.body;
      // const payload = { email: user.email };
      const token = jwt.sign(user, process.env.SECRET_TOKEN, {
        expiresIn: "1h",
      });
      // console.log(token);
      res.send({ token });
    });

    // jwt middleware
    const verifyToken = (req, res, next) => {
      // console.log({ fromMiddleWare: req.headers });
      const token = req.headers.authorization.split(" ")[1];
      // console.log(token);
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

    // get courses
    app.get("/api/courses", async (req, res) => {
      const result = await coursesCollection.find().toArray();

      res.send(result);
    });

    // TODO:USERS
    // post users to db: student
    app.post("/api/users/students", async (req, res) => {
      const student = req.body;

      const query = { email: student.email };
      const existingUser = await studentsCollection.findOne(query);
      if (existingUser) return; // user exists, do nothing

      const result = await studentsCollection.insertOne(student);

      res.send(result);
    });

    // get users from db: students
    app.get("/api/users/students", async (req, res) => {
      const students = await studentsCollection.find().toArray();

      res.send(students);
    });

    // get users from db: students
    app.get("/api/users/students/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const student = await studentsCollection.findOne(query);

      res.send(student);
    });

    // add to carts
    app.post("/api/post/carts", verifyToken, async (req, res) => {
      const newCartItem = req.body;
      const courseId = newCartItem.courseId;
      const email = newCartItem.email;
      const filter = { courseId: courseId, email: email };
      try {
        const existing = await cartsCollection.findOne(filter);

        if (!existing) {
          const result = await cartsCollection.insertOne(newCartItem);
          res.send(result);
        } else {
          res.send({ message: "Items already in cart" });
        }
      } catch (err) {
        console.log(err);
      }
    });

    // get carts by email
    app.get("/api/get/carts", verifyToken, async (req, res) => {
      const email = req.query.email;
      const query = { email: email };

      const result = await cartsCollection.find(query).toArray();

      res.send(result);
    });

    app.delete("/api/delete/carts/:id", verifyToken, async (req, res) => {
      const id = req.params.id;
      const query = { courseId: id };
      const result = await cartsCollection.deleteOne(query);

      res.send(result);
    });

    // skills
    app.post("/api/post/skills", async (req, res) => {
      const skills = req.body;
      console.log(skills);

      const result = await skillsCollection.insertOne(skills);

      res.send(result);
    });

    app.get("/api/get/skills", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };

      const result = await skillsCollection.find(query).toArray();

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
