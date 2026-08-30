import { Router } from "express";
import { healthCheck } from "../controllers/healthcheck.controllers";
import app from "../app";

const router = Router();

// app.get("/healthcheck", healthCheck);

// router.get("/healthcheck", healthCheck);

router.route("/").get(healthCheck);

export default router;
