import type { Request, Response } from "express";
import ApiResponse from "../utils/ApiResponse";
import WrapAsync from "../utils/WrapAsync";

const healthCheck = WrapAsync((_ , res: Response) => {
  return res
    .status(200)
    .json(new ApiResponse(200, { message: "Server is running" }));
});

export { healthCheck };
