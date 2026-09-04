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
    .json(new ApiResponse(200, funds, "Funds fetched successfully"));
});

const addFunds = WrapAsync(async (req, res) => {
  const { amount } = req.body;

  if (!amount || amount <= 0) {
    throw new ApiError(400, "Amount must be greater than 0");
  }

  const funds = await Fund.findOneAndUpdate(
    {
      owner: req.user?._id,
    },
    {
      $inc: {
        availableCash: amount,
        payin: amount,
      },
    },
    {
      returnDocument: "after",
      upsert: true,
    },
  );

  return res
    .status(200)
    .json(new ApiResponse(200, funds, "Funds added successfully"));
});

const withdrawFunds = WrapAsync(async (req, res) => {
  const { amount } = req.body;

  if (!amount || amount <= 0) {
    throw new ApiError(400, "Amount must be greater than 0");
  }

  const funds = await Fund.findOne({
    owner: req.user?._id,
  });

  if (!funds) {
    throw new ApiError(404, "Funds account not found");
  }

  if (funds.availableCash < amount) {
    throw new ApiError(400, "Insufficient funds");
  }

  funds.availableCash -= amount;

  await funds.save();

  return res
    .status(200)
    .json(new ApiResponse(200, funds, "Funds withdrawn successfully"));
});

export { getFunds, addFunds, withdrawFunds };
