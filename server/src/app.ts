import express from "express";
import cookieParser from "cookie-parser";
import { Holding } from "./models/holdings.model.ts";
import { Position } from "./models/positions.model.ts";
const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());



export default app;
