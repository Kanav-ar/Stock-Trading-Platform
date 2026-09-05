import { Router } from "express";
import {
  getStocks,
  getStockQuotes,
} from "../controllers/watchlist.controllers";

const watchlistRouter = Router();

watchlistRouter.get("/", getStocks);
watchlistRouter.get("/quotes", getStockQuotes);

export default watchlistRouter;