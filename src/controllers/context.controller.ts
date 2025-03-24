import { Request, Response } from "express";
import { container } from "tsyringe";
import ContextService from "../services/context.service";
import Util from "../utils/util.util";

export default class ContextController {
  public static async getAllContexts(_: Request, res: Response): Promise<void> {
    try {
      const contextService = container.resolve(ContextService);
      const contexts = await contextService.getAllContexts();

      if (!contexts) {
        res.status(400).json({
          message: "contexts not found",
          statusCode: 400,
          data: [],
        });
        return;
      }

      res.status(200).json({
        message: "Get contexts success",
        statusCode: 200,
        data: contexts,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: `${error}`,
        statusCode: 500,
        data: [],
      });
    }
  }

  public static async postContext(req: Request, res: Response): Promise<void> {
    const { name, position, description, experience, completed_projects } =
      req.body;

    const paramsVerify: boolean = Util.verifyParams(
      name,
      position,
      description,
      experience,
      completed_projects
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
      const contextService = container.resolve(ContextService);
      const context = await contextService.postContext({
        name,
        position,
        description,
        experience,
        completed_projects,
      });

      if (!context) {
        res.status(400).json({
          message: "Error to create context",
          statusCode: 400,
          data: [],
        });
        return;
      }

      res.status(201).json({
        message: "Success to create context",
        statusCode: 201,
        data: context,
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
