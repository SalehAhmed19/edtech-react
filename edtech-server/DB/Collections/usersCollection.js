const client = require("../Connect");

const usersCollection = client.db("edTech").collection("usersCollection");

module.exports = usersCollection;
