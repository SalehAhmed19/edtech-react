const client = require("../Connect");

const skillsCollection = client.db("edTech").collection("skillsCollection");

module.exports = skillsCollection;
