import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  qty: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  mode: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

export const Order = mongoose.model("Order", orderSchema);
