import { Order } from "../models/orders.model";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import WrapAsync from "../utils/WrapAsync";

const getAllOrders = WrapAsync(async (req, res) => {
  const allOrders = await Order.find({ owner: req.user?._id });

  return res
    .status(200)
    .json(new ApiResponse(200, allOrders, "All orders fetched successfully"));
});

const buyOrder = WrapAsync(async (req, res) => {
  const newOrder = new Order({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    owner: req.user?._id,
  });

  await newOrder.save();

  return res
    .status(200)
    .json(new ApiResponse(200, newOrder, "Order placed successfully"));
});

const getSingleOrder = WrapAsync(async (req, res) => {
  const { orderId } = req.params;

  const order = await Order.findOne({ _id: orderId, owner: req.user?._id });

  if (!order) {
    throw new ApiError(404, "Order you are trying to view doesn't exist");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        order,
        `Order with id ${orderId} fetched successfully`,
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

export { getAllOrders, getSingleOrder, buyOrder, sellOrder };
