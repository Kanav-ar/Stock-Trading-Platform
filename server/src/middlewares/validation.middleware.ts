import type { NextFunction, Request, Response } from "express";
import type { ZodSchema } from "zod/v3";
import ApiError from "../utils/ApiError";

export const validateUser = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const isValid = schema.safeParse(req.body);

    if (!isValid.success) {
      return res.status(400).json(new ApiError(400, "Data validation failed"));
    }

    req.body = isValid.data;
    next();
  };
};
