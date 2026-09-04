import mongoose, { Types } from "mongoose";
import { Fund } from "../../models/funds.model";
import ApiError from "../../utils/ApiError";
import { Holding } from "../../models/holdings.model";
import { Position } from "../../models/positions.model";
import { Order } from "../../models/orders.model";

interface BuyOrderData {
  userId: Types.ObjectId;
  symbol: string;
  exchange: string;
  isin?: string;
  name: string;
  qty: number;
  price: number;
  product: "CNC" | "MIS";
}

export const executeBuyOrder = async ({
  userId,
  symbol,
  exchange,
  isin,
  name,
  qty,
  price,
  product,
}: BuyOrderData) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const funds = await Fund.findOne({
      owner: userId,
    }).session(session);

    if (!funds) {
      throw new ApiError(404, "Funds account not found");
    }

    const totalCost = qty * price;

    if (product === "CNC") {
      // CNC - available cash

      if (funds.availableCash < totalCost) {
        throw new ApiError(400, "Insufficient funds");
      }

      funds.availableCash -= totalCost;
    } else {
      const availableMargin = funds.availableCash - funds.usedMargin;

      if (availableMargin < totalCost) {
        throw new ApiError(400, "Insufficient margin");
      }

      funds.usedMargin += totalCost;
    }

    await funds.save({ session });

    if (product === "CNC") {
      const existingHolding = await Holding.findOne({
        owner: userId,
        symbol,
        exchange,
      }).session(session);

      if (!existingHolding) {
        await Holding.create(
          [
            {
              owner: userId,
              symbol,
              exchange,
              isin,
              name,
              qty,
              avg: price,
              price,
            },
          ],
          { session },
        );
      } else {
        const oldQuantity = existingHolding.qty;
        const oldAverage = existingHolding.avg;

        const newQuantity = oldQuantity + qty;

        const newAverage =
          (oldQuantity * oldAverage + qty * price) / newQuantity;

        existingHolding.qty = newQuantity;
        existingHolding.avg = newAverage;

        // Current market/execution price
        existingHolding.price = price;

        await existingHolding.save({ session });
      }
    } else {
      const existingPosition = await Position.findOne({
        owner: userId,
        symbol,
        exchange,
        product: "MIS",
      }).session(session);

      if (!existingPosition) {
        await Position.create(
          [
            {
              owner: userId,
              symbol,
              exchange,
              isin,
              name,
              product: "MIS",
              qty,
              avg: price,
              price,
            },
          ],
          { session },
        );
      } else {
        const oldQuantity = existingPosition.qty;
        const oldAverage = existingPosition.avg;

        const newQuantity = oldQuantity + qty;

        const newAverage =
          (oldQuantity * oldAverage + qty * price) / newQuantity;

        existingPosition.qty = newQuantity;
        existingPosition.avg = newAverage;
        existingPosition.price = price;

        await existingPosition.save({ session });
      }
    }

    const [order] = await Order.create(
      [
        {
          owner: userId,
          symbol,
          exchange,
          isin,
          name,
          qty,
          price,
          side: "BUY",
          product,
          status: "COMPLETED",
        },
      ],
      { session },
    );

    await session.commitTransaction();

    return order;
  } catch (error) {
    // Rollback EVERYTHING if any operation fails
    await session.abortTransaction();

    throw error;
  } finally {
    await session.endSession();
  }
};
