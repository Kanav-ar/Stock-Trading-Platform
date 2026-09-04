import mongoose from "mongoose";

const positionSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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

    name: {
      type: String,
      required: true,
    },

    product: {
      type: String,
      enum: ["CNC", "MIS"],
      required: true,
    },

    qty: {
      type: Number,
      required: true,
      qty: 0,
    },

    avg: {
      type: Number,
      required: true,
      min: 0,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true },
);

positionSchema.index(
  {
    owner: 1,
    symbol: 1,
    exchange: 1,
    product: 1,
  },
  {
    unique: true,
  },
);

export const Position = mongoose.model("Position", positionSchema);
