const client = require("../Connect");

const coursesCollection = client.db("edTech").collection("coursesCollection");

module.exports = coursesCollection;
