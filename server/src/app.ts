import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import ApiError from "./utils/ApiError.ts";

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
import positionRouter from "./routes/position.routes.ts";
import orderRouter from "./routes/order.routes.ts";

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/holdings", holdingRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/positions", positionRouter);
app.use("/api/v1/watchlist", holdingRouter);



app.use(
  (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    if (err instanceof ApiError) {
      return res.status(err.statusCode).json({
        statusCode: err.statusCode,
        data: err.data,
        success: err.success,
        message: err.message,
        errors: err.errors,
      });
    }

    return res.status(500).json({
      statusCode: 500,
      data: null,
      success: false,
      message: "Something went wrong!",
      errors: [],
    });
  },
);

export default app;
