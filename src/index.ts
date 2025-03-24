import "./config/container";
import express, { Express } from "express";
import { router } from "./routes";
import Util from "./utils/util.util";
import cors from "cors";

const app: Express = express();
app.use(express.json()); // Middleware for available tranfer data json
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api", router); // Middleware route

Util.initServer(app);
