const client = require("../Connect");

const ordersCollection = client.db("edTech").collection("ordersCollection");

module.exports = ordersCollection;
