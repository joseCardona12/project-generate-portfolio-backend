import { inject, injectable } from "tsyringe";
import ContextRepository from "../repositories/context.repository";
import ContextModel from "../models/context.model";

@injectable()
export default class ContextService {
  constructor(
    @inject(ContextRepository) private contextRepository: ContextRepository
  ) {}

  public async getAllContexts(): Promise<ContextModel[] | undefined> {
    try {
      const data = await this.contextRepository.getAllContext();
      return data;
    } catch (error: unknown) {
      throw error;
    }
  }

  public async postContext(
    context: Partial<ContextModel>
  ): Promise<ContextModel | undefined> {
    try {
      const data = await this.contextRepository.postContext(context);
      return data;
    } catch (error: unknown) {
      throw error;
    }
  }
}
