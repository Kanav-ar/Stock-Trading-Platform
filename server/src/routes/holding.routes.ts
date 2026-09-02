import { Router } from "express";
import {
  addHolding,
  deleteHolding,
  getAllHoldings,
} from "../controllers/holdings.controllers";

const holdingRouter = Router();

holdingRouter.route("/").get(getAllHoldings).post(addHolding)
holdingRouter.route("/:id").delete(deleteHolding);

export default holdingRouter;
