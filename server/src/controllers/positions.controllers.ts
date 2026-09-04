import { Position } from "../models/positions.model";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import WrapAsync from "../utils/WrapAsync";

const getAllPositions = WrapAsync(async (req, res) => {
  const positions = await Position.find({
    owner: req.user?._id,
  }).sort({
    createdAt: -1,
  });

  return res
    .status(200)
    .json(
      new ApiResponse(200, positions, "All positions fetched successfully"),
    );
});

const getPositionById = WrapAsync(async (req, res) => {
  const { id } = req.params;

  const position = await Position.findOne({
    _id: id,
    owner: req.user?._id,
  });

  if (!position) {
    throw new ApiError(404, "Position not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, position, "Position fetched successfully"));
});

export { getAllPositions, getPositionById };
