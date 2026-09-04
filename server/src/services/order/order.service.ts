import mongoose, { Types } from "mongoose";
import { Fund } from "../../models/funds.model";
import ApiError from "../../utils/ApiError";
import { Holding } from "../../models/holdings.model";
import { Position } from "../../models/positions.model";
import { Order } from "../../models/orders.model";

interface OrderDataType {
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
}: OrderDataType) => {
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
        const newQuantity = existingHolding.qty + qty;

        const newAverage =
          (existingHolding.qty * existingHolding.avg + qty * price) /
          newQuantity;

        existingHolding.qty = newQuantity;
        existingHolding.avg = newAverage;
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
        const newQuantity = existingPosition.qty + qty;

        const newAverage =
          (existingPosition.qty * existingPosition.avg + qty * price) /
          newQuantity;

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
    await session.abortTransaction();
    throw error;
  } finally {
    await session.endSession();
  }
};

export const executeSellOrder = async ({
  userId,
  symbol,
  exchange,
  isin,
  name,
  qty,
  price,
  product,
}: OrderDataType) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const funds = await Fund.findOne({
      owner: userId,
    }).session(session);

    if (!funds) {
      throw new ApiError(404, "Funds account not found");
    }

    const saleValue = qty * price;

    if (product === "CNC") {
      const holding = await Holding.findOne({
        owner: userId,
        symbol,
        exchange,
      }).session(session);

      if (!holding) {
        throw new ApiError(404, "You do not own this stock");
      }

      if (holding.qty < qty) {
        throw new ApiError(400, "You do not own enough quantity to sell");
      }

      funds.availableCash += saleValue;

      await funds.save({ session });

      if (holding.qty === qty) {
        await Holding.deleteOne(
          {
            _id: holding._id,
          },
          { session },
        );
      } else {
        holding.qty -= qty;
        holding.price = price;

        await holding.save({ session });
      }
    } else {
      const position = await Position.findOne({
        owner: userId,
        symbol,
        exchange,
        product: "MIS",
      }).session(session);

      if (!position) {
        throw new ApiError(
          404,
          "You do not have an open position for this stock",
        );
      }

      if (position.qty < qty) {
        throw new ApiError(400, "You do not have enough quantity to sell");
      }

      // Margin originally tied to these shares
      const releasedMargin = position.avg * qty;

      // Realized profit/loss
      const realizedPnL = (price - position.avg) * qty;

      // Release margin
      funds.usedMargin -= releasedMargin;

      // Apply realized profit/loss to cash
      funds.availableCash += realizedPnL;

      await funds.save({ session });

      if (position.qty === qty) {
        await Position.deleteOne(
          {
            _id: position._id,
          },
          { session },
        );
      } else {
        position.qty -= qty;
        position.price = price;

        await position.save({ session });
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
          side: "SELL",
          product,
          status: "COMPLETED",
        },
      ],
      { session },
    );

    await session.commitTransaction();

    return order;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    await session.endSession();
  }
};
