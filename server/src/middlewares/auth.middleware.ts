import type { NextFunction, Request, Response } from "express";
import { User } from "../models/user.models";
import ApiError from "../utils/ApiError";
import WrapAsync from "../utils/WrapAsync";
import jwt from "jsonwebtoken";
import { accessTokenPayloadSchema } from "../validators/user/accessToken.validator";

export const authenticate = WrapAsync(
  async (req: Request, _, next: NextFunction) => {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const secret = process.env.ACCESS_TOKEN_SECRET;

    if (!secret) {
      throw new ApiError(400, "Access token secret is not configured");
    }

    const decodedToken = jwt.verify(token, secret);

    const validDecodedToken = accessTokenPayloadSchema.safeParse(decodedToken);

    if (!validDecodedToken.success) {
      throw new ApiError(401, "Invalid access token");
    }

    const currentUser = await User.findById(
      validDecodedToken.data._id,
    ).select(
      "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
    );

    if (!currentUser) {
      throw new ApiError(401, "Invalid access token");
    }

    req.user = currentUser;
    next();
  },
);
