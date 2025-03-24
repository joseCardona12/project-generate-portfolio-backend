import { inject, injectable } from "tsyringe";
import SkillRepository from "../repositories/skill.repository";
import SkillsModel from "../models/skill.model";

@injectable()
export default class SkillService {
  constructor(
    @inject(SkillRepository) private skillRepository: SkillRepository
  ) {}

  public async getAllSkills(): Promise<SkillsModel[] | undefined> {
    try {
      const data = await this.skillRepository.getAllSkills();
      return data;
    } catch (error: unknown) {
      throw error;
    }
  }
}
