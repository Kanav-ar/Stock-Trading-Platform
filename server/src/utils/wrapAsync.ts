import type { NextFunction, Request, RequestHandler, Response } from "express";

const wrapAsync = (requestHandler: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { wrapAsync };
