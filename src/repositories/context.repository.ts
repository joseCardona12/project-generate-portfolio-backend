import { injectable } from "tsyringe";
import ContextModel from "../models/context.model";

@injectable()
export default class ContextRepository {
  public async getAllContext(): Promise<ContextModel[] | undefined> {
    try {
      return await ContextModel.findAll();
    } catch (error: unknown) {
      throw new Error(`Error to get contexts. Error:${error}`);
    }
  }

  public async postContext(
    context: Partial<ContextModel>
  ): Promise<ContextModel | undefined> {
    try {
      return await ContextModel.create(context);
    } catch (error: unknown) {
      throw new Error(`Error to create context. Error:${error}`);
    }
  }
}
