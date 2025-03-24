import { Request, Response } from "express";
import { container } from "tsyringe";
import SkillService from "../services/skill.service";

export default class SkillController {
  public static async getAllSkills(_: Request, res: Response): Promise<void> {
    try {
      const skillService = container.resolve(SkillService);
      const skills = await skillService.getAllSkills();

      if (!skills) {
        res.status(400).json({
          message: "Skills not found",
          statusCode: 400,
          data: [],
        });
        return;
      }

      res.status(200).json({
        message: "Get skills success",
        statusCode: 200,
        data: skills,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: `${error}`,
        statusCode: 500,
        data: [],
      });
    }
  }
}
