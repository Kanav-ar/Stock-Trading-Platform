import { Fund } from "../models/funds.model";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import WrapAsync from "../utils/WrapAsync";

const getFunds = WrapAsync(async (req, res) => {
  const funds = await Fund.findOne({
    owner: req.user?._id,
  });

  if (!funds) {
    throw new ApiError(404, "Funds account not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        funds,
        "Funds fetched successfully",
      ),
    );
});

