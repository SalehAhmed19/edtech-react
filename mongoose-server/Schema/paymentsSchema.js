const mongoose = require("mongoose");
const paymentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  carts: [
    {
      type: {
        email: {
          type: String,
          required: true,
        },
        courseName: {
          type: String,
          required: true,
        },
        image: { type: String, required: true },
        courseId: {
          type: String,
          required: true,
        },
        courseFee: {
          type: Number,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
        instructors: [
          {
            type: {
              image: { type: String, required: true },
              name: { type: String, required: true },
              designation: { type: String, required: true },
            },
            required: true,
          },
        ],
        status: {
          type: String,
          required: true,
        },
      },
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "Succeed",
    required: true,
  },
  trxId: {
    type: String,
    required: true,
  },
});
const Payment = mongoose.model("Payment", paymentsSchema);
module.exports = Payment;
