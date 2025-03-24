import { Router } from "express";
import ContextSkillController from "../controllers/context_skill.controller";

export const contextSkillRouter: Router = Router();
contextSkillRouter.get("/", ContextSkillController.getAllContextSkills);
contextSkillRouter.post("/", ContextSkillController.postContextSkill);
