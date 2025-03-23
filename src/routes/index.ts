import { Router } from "express";
import { skillRouter } from "./skill.route";

export const router: Router = Router();
router.use("/skills", skillRouter);
