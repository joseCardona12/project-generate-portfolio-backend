import { Request, Response } from "express";
import { container } from "tsyringe";
import ContextSkillService from "../services/context_skill.service";
import Util from "../utils/util.util";

export default class ContextSkillController {
  public static async getAllContextSkills(
    _: Request,
    res: Response
  ): Promise<void> {
    try {
      const contextSkillService = container.resolve(ContextSkillService);
      const contextSkills = await contextSkillService.getAllContextSkills();

      if (!contextSkills) {
        res.status(400).json({
          message: "context skills not found",
          statusCode: 400,
          data: [],
        });
        return;
      }

      res.status(200).json({
        message: "Get context skills success",
        statusCode: 200,
        data: contextSkills,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: `${error}`,
        statusCode: 500,
        data: [],
      });
    }
  }

  public static async postContextSkill(
    req: Request,
    res: Response
  ): Promise<void> {
    const {
      name,
      position,
      description,
      experience,
      completed_projects,
      skillIds,
    } = req.body;

    const paramsVerify: boolean = Util.verifyParams(
      name,
      position,
      description,
      experience,
      completed_projects,
      skillIds
    );
    if (!paramsVerify) {
      res.status(400).json({
        message: "Is required all params",
        statusCode: 400,
        data: [],
      });
      return;
    }

    try {
      const contextSkillService = container.resolve(ContextSkillService);
      const contextSkill = await contextSkillService.postContextSkill(
        {
          name,
          position,
          description,
          experience,
          completed_projects,
        },
        skillIds
      );

      if (!contextSkill) {
        res.status(400).json({
          message: "Error to create contextSkill",
          statusCode: 400,
          data: [],
        });
        return;
      }

      res.status(201).json({
        message: "Success to create contextSkill",
        statusCode: 201,
        data: contextSkill,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: `${error}`,
        statusCode: 500,
        data: [],
      });
    }
  }

  public static async putContextSkill():Promise<void>{
    
  }
}
