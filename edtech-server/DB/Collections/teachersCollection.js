const client = require("../Connect");

const teachersCollection = client.db("edTech").collection("teachersCollection");

module.exports = teachersCollection;
