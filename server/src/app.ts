import express from "express";
import cookieParser from "cookie-parser";
import { Holding } from "./models/holdings.model.ts";
import { Position } from "./models/positions.model.ts";
import { Order } from "./models/orders.model.ts";
import ApiError from "./utils/ApiError.ts";
import ApiResponse from "./utils/ApiResponse.ts";
import wrapAsync  from "./utils/WrapAsync.ts";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get(
  "/api/holdings",
  wrapAsync(async (_, res) => {
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
  wrapAsync(async (_, res) => {
    const Postions = await Position.find({});

    return res
      .status(200)
      .json(
        new ApiResponse(200, Postions, "All Holdings fetched successfully!"),
      );
  }),
);

app.get(
  "/api/orders",
  wrapAsync(async (req, res) => {
    const allOrders = await Order.find({});

    if (allOrders.length == 0) {
      throw new ApiError(404, "No orders found");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, allOrders, "All orders fetched successfully"));
  }),
);

app.post(
  "/api/orders/buy",
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
      .json(new ApiResponse(200, newOrder, "Order placed successfully"));
  }),
);
app.post(
  "/api/orders/sell",
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
      .json(new ApiResponse(200, newOrder, "Order placed successfully"));
  }),
);

export default app;
