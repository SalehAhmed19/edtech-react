const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const client = require("./DB/Connect");

const {
  coursesCollection,
  usersCollection,
  studentsCollection,
  teachersCollection,
  cartsCollection,
  skillsCollection,
  paymentsCollection,
  ordersCollection,
  enrolledCoursesCollection,
  reviewsCollection,
} = require("./DB/Collections/services");

const port = process.env.PORT || 4000 || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

async function run() {
  try {
    // TODO: For locally - uncomment this
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Authorization
    app.use("/api/authorization/", require("./Authorization/JWT"));

    // users
    app.use(
      "/api/users",
      require("./routerController/usersController")(usersCollection)
    );

    // students
    app.use(
      "/api/students",
      require("./routerController/studentsController")(
        studentsCollection,
        usersCollection
      )
    );

    // teachers
    app.use(
      "/api/teachers",
      require("./routerController/teachersController")(
        teachersCollection,
        studentsCollection,
        usersCollection
      )
    );

    // courses
    app.use(
      "/api/courses",
      require("./routerController/coursesController")(coursesCollection)
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

    // enrolled courses
    app.use(
      "/api/enrolled-courses",
      require("./routerController/enrolledCoursesController")(
        enrolledCoursesCollection
      )
    );

    // reviews
    app.use(
      "/api/reviews",
      require("./routerController/reviewsController")(reviewsCollection)
    );

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
