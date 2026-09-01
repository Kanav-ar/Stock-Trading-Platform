import type { NextFunction, Request, Response } from "express";
import ApiError from "../utils/ApiError";
import z from "zod";

export const validateUser = (schema: z.ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const isValid = schema.safeParse(req.body);

    if (!isValid.success) {
      return res.status(400).json(new ApiError(400, "Data validation failed"));
    }

    req.body = isValid.data;
    next();
  };
};
