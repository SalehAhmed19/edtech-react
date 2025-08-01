const mongoose = require("mongoose");
const ordersSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  carts: [
    {
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
  ],
});

const Order = mongoose.model("Order", ordersSchema);

module.exports = Order;
