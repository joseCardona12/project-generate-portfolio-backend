import { inject, injectable } from "tsyringe";
import ContextSkillRepository from "../repositories/context_skill.repository";
import ContextSkillModel from "../models/context_skill.model";
import ContextModel from "../models/context.model";
import ContextRepository from "../repositories/context.repository";

@injectable()
export default class ContextSkillService {
  constructor(
    @inject(ContextSkillRepository)
    private contextSkillRepository: ContextSkillRepository,
    @inject(ContextRepository) private contextRepository: ContextRepository
  ) {}

  public async getAllContextSkills(): Promise<ContextSkillModel[] | undefined> {
    try {
      const data = await this.contextSkillRepository.getAllContextSkills();
      return data;
    } catch (error: unknown) {
      throw error;
    }
  }

  public async postContextSkill(
    context: Partial<ContextModel>,
    skillIds: number[]
  ): Promise<[] | undefined> {
    try {
      const contextCreate = await this.contextRepository.postContext(context);
      if (!contextCreate) return;

      const data = await Promise.allSettled(
        skillIds.map(async (skillId: number) => {
          return this.contextSkillRepository.postContextSkill({
            context_id: contextCreate?.id,
            skill_id: skillId,
          });
        })
      );
      const failed = data.filter((result) => result.status === "rejected");
      if (failed.length > 0) return;
      return [];
    } catch (error: unknown) {
      throw error;
    }
  }
}
