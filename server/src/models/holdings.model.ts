import mongoose from "mongoose";

const holdingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

     symbol: {
      type: String,
      required: true,
    },

    exchange: {
      type: String,
      required: true,
    },

    isin: {
      type: String,
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

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

export const Holding = mongoose.model("Holding", holdingSchema);
