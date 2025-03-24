import { Router } from "express";
import { skillRouter } from "./skill.route";
import { contextRouter } from "./contex.route";
import { contextSkillRouter } from "./context_skill.route";

export const router: Router = Router();
router.use("/skills", skillRouter);
router.use("/contexts", contextRouter);
router.use("/context_skills", contextSkillRouter);
