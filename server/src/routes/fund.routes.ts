import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware";

const fundRouter = Router();

fundRouter.route("/").get(authenticate)
fundRouter.route("/add").post(authenticate)
fundRouter.route("/withdraw").post(authenticate)