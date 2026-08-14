import express from "express";
import cookieParser from "cookie-parser";
import { Holding } from "./models/holdings.model.ts";
import { Position } from "./models/positions.model.ts";
import ApiResponse from "./utils/ApiResponse.ts";
import { Order } from "./models/orders.model.ts";
import ApiError from "./utils/ApiError.ts";
import { wrapAsync } from "./utils/wrapAsync.ts";
const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get(
  "/api/holdings",
  wrapAsync(async (req, res) => {
    const Holdings = await Holding.find({});

    return res
      .status(200)
      .json(
        new ApiResponse(200, Holdings, "All Holdings fetched successfully!"),
      );
  }),
);

app.get(
  "/api/positions",
  wrapAsync(async (req, res) => {
    const Postions = await Position.find({});

    return res 
      .status(200)
      .json(
        new ApiResponse(200, Postions, "All Holdings fetched successfully!"),
      );
  }),
);

app.post(
  "/api/order",
  wrapAsync(async (req, res) => {
    const newOrder = new Order({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Order placed successfully"));
  }),
);

export default app;
