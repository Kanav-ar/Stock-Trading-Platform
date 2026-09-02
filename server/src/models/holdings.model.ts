import mongoose from "mongoose";

const holdingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  qty: {
    type: Number,
    required: true,
  },

  avg: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  net: {
    type: String,
    required: true,
  },

  day: {
    type: String,
    required: true,
  },

  isLoss: {
    type: Boolean,
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

export const Holding = mongoose.model("Holding", holdingSchema);