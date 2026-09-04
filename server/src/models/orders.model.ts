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
    enum: ["BUY", "SELL"],
    required: true,
  },

  product: {
    type: String,
    enum: ["CNC", "MIS"],
  },

  status: {
    type: String,
    enum: ["COMPLETED", "FAILED"],
    default: "COMPLETED",
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Order = mongoose.model("Order", orderSchema);
