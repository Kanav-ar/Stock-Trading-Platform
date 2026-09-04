import mongoose from "mongoose";

const fundsSchema = new mongoose.Schema(
  {
    availableCash: {
      type: Number,
      default: 0,
      min: 0,
    },

    usedMargin: {
      type: Number,
      default: 0,
      min: 0,
    },

    payin: {
      type: Number,
      default: 0,
      min: 0,
    },

    openingBalance: {
      type: Number,
      default: 0,
      min: 0,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

export const Fund = mongoose.model("Fund", fundsSchema);
