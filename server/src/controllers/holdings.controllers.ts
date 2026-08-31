import { Holding } from "../models/holdings.model";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import WrapAsync from "../utils/WrapAsync";

const getAllHoldings = WrapAsync(async (_, res) => {
  const Holdings = await Holding.find({});

  return res
    .status(200)
    .json(new ApiResponse(200, Holdings, "All Holdings fetched successfully!"));
});

const addHolding = WrapAsync(async (req, res) => {
  const { holding } = req.body;

  const newHolding = await Holding.create({
    name: holding.name,
    price: holding.price,
    qty: holding.qty,
    avg: holding.avg,
    day: holding.day,
    isLoss: holding.isLoss,
    net: holding.net,
  });

  await newHolding.save();

  return res
    .status(200)
    .json(new ApiResponse(200, newHolding, "New holding has been created"));
});

const deleteHolding = WrapAsync(async (req, res) => {
  const { id } = req.params;

  const existingHolding = await Holding.findById(id);

  if (!existingHolding) {
    throw new ApiError(
      404,
      "The holding you are trying to delete does't exist",
    );
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        {},
        `Holding with id ${id} has been deleted successfully`,
      ),
    );
});

export { getAllHoldings, addHolding, deleteHolding };
