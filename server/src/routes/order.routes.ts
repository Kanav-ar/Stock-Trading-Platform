import { Router } from "express";
import { buyOrder, getAllOrders, getOrderById, sellOrder } from "../controllers/orders.controllers";
import { authenticate } from "../middlewares/auth.middleware";

const orderRouter = Router();

orderRouter.route("/").get(authenticate, getAllOrders);

orderRouter.route("/buy").post(authenticate, buyOrder);

orderRouter.route("/sell").post(authenticate, sellOrder);

orderRouter.route("/:orderId").get(authenticate, getOrderById);

export default orderRouter;