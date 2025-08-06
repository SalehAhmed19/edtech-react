const client = require("../Connect");

const studentsCollection = client.db("edTech").collection("studentsCollection");

module.exports = studentsCollection;
