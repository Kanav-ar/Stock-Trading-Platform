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
      uppercase: true,
      trim: true,
    },

    exchange: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    isin: {
      type: String,
    },

    qty: {
      type: Number,
      required: true,
      min: 0,
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

holdingSchema.index(
  {
    owner: 1,
    symbol: 1,
    exchange: 1,
  },
  {
    unique: true,
  },
);

export const Holding = mongoose.model("Holding", holdingSchema);
