import { injectable } from "tsyringe";
import SkillsModel from "../models/skill.model";

@injectable()
export default class SkillRepository {
  public async getAllSkills(): Promise<SkillsModel[] | undefined> {
    try {
      return await SkillsModel.findAll();
    } catch (error: unknown) {
      throw new Error(`Error to get skills. Error:${error}`);
    }
  }
}
