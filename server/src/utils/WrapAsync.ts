import type { NextFunction, Request, RequestHandler, Response } from "express";

const WrapAsync = (requestHandler: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export default WrapAsync ;
