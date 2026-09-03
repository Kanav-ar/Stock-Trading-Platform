import type { NextFunction, Request, Response } from "express";

const WrapAsync = (
  requestHandler: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch(next);
  };
};

export default WrapAsync ;
