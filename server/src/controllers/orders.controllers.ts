import { Order } from "../models/orders.model";
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
  const { id } = req.params;

  const order = await Order.findOne({
    _id: id,
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
  const {
    symbol,
    exchange,
    isin,
    name,
    qty,
    price,
    product,
  } = req.body;

  // const order = await executeBuyOrder({
  //   userId: req.user?._id,
  //   symbol,
  //   exchange,
  //   isin,
  //   name,
  //   qty,
  //   price,
  //   product,
  // });

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        {},
        "Buy order placed successfully",
      ),
    );
});


const sellOrder = WrapAsync(async (req, res) => {
  const { orderId } = req.params;

  const orderToSell = await Order.findById(orderId);

  if (!orderToSell) {
    throw new ApiError(404, "The order you are trying to sell doen't exist");
  }

  if (!orderToSell.owner?.equals(req.user?._id)) {
    throw new ApiError(
      403,
      "You have not purchased this stock, only purchased stocks can be sold",
    );
  }

  const deletedOrder = await Order.findByIdAndDelete(orderToSell._id);

  return res
    .status(200)
    .json(new ApiResponse(200, deletedOrder, "Order sold successfully"));
});

export { getAllOrders, getOrderById, buyOrder, sellOrder };
