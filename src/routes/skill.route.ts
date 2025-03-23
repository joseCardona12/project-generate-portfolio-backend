import { Router } from "express";
import SkillController from "../controllers/skill.controller";

export const skillRouter: Router = Router();
skillRouter.get("/", SkillController.getAllSkills);
