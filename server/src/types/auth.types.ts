import type { Request } from "express";
import type { IUser } from "../models/user.models";


export interface AuthenticatedRequest extends Request {
  user: IUser;
}