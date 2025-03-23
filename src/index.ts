import express, { Express } from "express";
import { router } from "./routes";
import Util from "./utils/util.util";

const app: Express = express();
app.use(express.json()); // Middleware for available tranfer data json

app.use("/api", router); // Middleware route

Util.initServer(app);
