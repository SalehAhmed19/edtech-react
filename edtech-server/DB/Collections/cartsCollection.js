const client = require("../Connect");

const cartsCollection = client.db("edTech").collection("cartsCollection");

module.exports = cartsCollection;
