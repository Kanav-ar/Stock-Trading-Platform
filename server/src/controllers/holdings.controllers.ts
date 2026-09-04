import { Holding } from "../models/holdings.model";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import WrapAsync from "../utils/WrapAsync";

const getAllHoldings = WrapAsync(async (req, res) => {
  const holdings = await Holding.find({ owner: req.user?._id }).sort({
    createdAt: -1,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, holdings, "All Holdings fetched successfully!"));
});

const addHolding = WrapAsync(async (req, res) => {
  const { holding } = req.body;

  const newHolding = await Holding.create({
  symbol: holding.symbol,
  exchange: holding.exchange,
  isin: holding.isin,
  name: holding.name,
  price: holding.price,
  qty: holding.qty,
  avg: holding.avg,
  owner: req.user?._id,
});

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
      "The holding you are trying to delete doesn't exist",
    );
  }

  if (!req.user?._id.equals(existingHolding.owner)) {
    throw new ApiError(403, "You are not the owner of this holding");
  }

  const deletedHolding = await Holding.findByIdAndDelete(existingHolding._id);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { deletedHolding },
        `Holding with id ${id} has been deleted successfully`,
      ),
    );
});

export { getAllHoldings, addHolding, deleteHolding };
