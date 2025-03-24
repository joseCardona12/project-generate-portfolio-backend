import { Router } from "express";
import ContextController from "../controllers/context.controller";

export const contextRouter: Router = Router();
contextRouter.get("/", ContextController.getAllContexts);
contextRouter.post("/", ContextController.postContext);
