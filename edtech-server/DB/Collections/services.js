const client = require("../Connect");

const collectionNames = [
  "cartsCollection",
  "coursesCollection",
  "enrolledCoursesCollection",
  "ordersCollection",
  "paymentsCollection",
  "skillsCollection",
  "studentsCollection",
  "teachersCollection",
  "usersCollection",
];

const collections = collectionNames.map((name) =>
  client.db("edTech").collection(name)
);

const [
  cartsCollection,
  coursesCollection,
  enrolledCoursesCollection,
  ordersCollection,
  paymentsCollection,
  skillsCollection,
  studentsCollection,
  teachersCollection,
  usersCollection,
] = collections;

module.exports = {
  cartsCollection,
  coursesCollection,
  enrolledCoursesCollection,
  ordersCollection,
  paymentsCollection,
  skillsCollection,
  studentsCollection,
  teachersCollection,
  usersCollection,
};
