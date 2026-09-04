import mongoose from "mongoose";

const fundsSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },

  availableCash: {
    type: Number,
    default: 0,
  },

  usedMargin: {
    type: Number,
    default: 0,
  },

  payin: {
    type: Number,
    default: 0,
  },

  openingBalance: {
    type: Number,
    default: 0,
  },
});

export const Fund = mongoose.model("Fund", fundsSchema);
