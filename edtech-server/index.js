const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

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

    // get courses
    app.get("/api/courses", async (req, res) => {
      const result = await coursesCollection.find().toArray();

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
