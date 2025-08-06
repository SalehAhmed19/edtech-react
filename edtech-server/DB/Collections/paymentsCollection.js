const client = require("../Connect");

const paymentsCollection = client.db("edTech").collection("paymentsCollection");

module.exports = paymentsCollection;
