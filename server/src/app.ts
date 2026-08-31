import express, {
  type ErrorRequestHandler,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import ApiError from "./utils/ApiError.ts";
import ApiResponse from "./utils/ApiResponse.ts";
import WrapAsync from "./utils/WrapAsync.ts";
import { Position } from "./models/positions.model.ts";
import { Order } from "./models/orders.model.ts";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

import healthCheckRouter from "./routes/healthcheck.routes.ts";
import userRouter from "./routes/user.routes.ts";
import holdingRouter from "./routes/holding.routes.ts";

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/holdings", holdingRouter);

app.get(
  "/api/positions",
  WrapAsync(async (_, res) => {
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
  WrapAsync(async (req, res) => {
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
  WrapAsync(async (req, res) => {
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
  WrapAsync(async (req, res) => {
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

app.get(
  "/api/watchlist",
  WrapAsync(async (req, res) => {
    const response = await fetch("https://bharatstockapi.com/v1/stocks", {
      headers: {
        "X-API-Key": process.env.WATCHLIST_API_KEY,
      },
    });
    const allStocks = await response.json();
    console.log(allStocks);
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          allStocks.data,
          "All stocks data fetched successfully",
        ),
      );
  }),
);

app.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    console.error(err);

    res.status(500).json({
      message: "Something went wrong",
    });
  },
);

export default app;
