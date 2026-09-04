import { Position } from "../models/positions.model";
import ApiResponse from "../utils/ApiResponse";
import WrapAsync from "../utils/WrapAsync";

  const getAllPositions = WrapAsync(async (_, res) => {
    const Positions = await Position.find({});

    return res
      .status(200)
      .json(
        new ApiResponse(200, Positions, "All positions fetched successfully!"),
      );
  })




