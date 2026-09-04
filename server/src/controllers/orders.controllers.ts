import { Order } from "../models/orders.model";
import { executeBuyOrder } from "../services/order/order.service";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import WrapAsync from "../utils/WrapAsync";

const getAllOrders = WrapAsync(async (req, res) => {
  const orders = await Order.find({
    owner: req.user?._id,
  }).sort({
    createdAt: -1,
  });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        orders,
        "All orders fetched successfully",
      ),
    );
});


const getOrderById = WrapAsync(async (req, res) => {
  const { orderId } = req.params;

  const order = await Order.findOne({
    _id: orderId,
    owner: req.user?._id,
  });

  if (!order) {
    throw new ApiError(404, "Order not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        order,
        "Order fetched successfully",
      ),
    );
});


const buyOrder = WrapAsync(async (req, res) => {
  
  if (!req.user) {
    throw new ApiError(401, "Unauthorized request");
  }
  
  const {
    symbol,
    exchange,
    isin,
    name,
    qty,
    price,
    product,
  } = req.body;

  const order = await executeBuyOrder({
    userId: req.user._id,
    symbol,
    exchange,
    isin,
    name,
    qty,
    price,
    product,
  });

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        order,
        "Buy order placed successfully",
      ),
    );
});


const sellOrder = WrapAsync(async (req, res) => {
  const {
    symbol,
    exchange,
    isin,
    name,
    qty,
    price,
    product,
  } = req.body;

  const order = await executeSellOrder({
    userId: req.user?._id,
    symbol,
    exchange,
    isin,
    name,
    qty,
    price,
    product,
  });

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        order,
        "Sell order placed successfully",
      ),
    );
});

export { getAllOrders, getOrderById, buyOrder, sellOrder };
