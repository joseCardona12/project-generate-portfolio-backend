import { injectable } from "tsyringe";
import ContextSkillModel from "../models/context_skill.model";

@injectable()
export default class ContextSkillRepository {
  public async getAllContextSkills(): Promise<ContextSkillModel[] | undefined> {
    try {
      return await ContextSkillModel.findAll();
    } catch (error: unknown) {
      throw new Error(`Error to get context skills. Error:${error}`);
    }
  }

  public async postContextSkill(
    contextSkill: Partial<ContextSkillModel>
  ): Promise<ContextSkillModel | undefined> {
    try {
      return await ContextSkillModel.create(contextSkill);
    } catch (error: unknown) {
      throw new Error(`Error to create context skill. Error:${error}`);
    }
  }
}
