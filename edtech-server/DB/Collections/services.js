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
  "reviewsCollection",
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
  reviewsCollection,
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
  reviewsCollection,
};
