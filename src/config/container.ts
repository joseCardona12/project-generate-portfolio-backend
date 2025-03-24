import "reflect-metadata";
import { container } from "tsyringe";
import SkillRepository from "../repositories/skill.repository";
import SkillService from "../services/skill.service";
import ContextRepository from "../repositories/context.repository";
import ContextService from "../services/context.service";
import ContextSkillRepository from "../repositories/context_skill.repository";
import ContextSkillService from "../services/context_skill.service";

container.registerSingleton<SkillRepository>(SkillRepository);
container.registerSingleton<SkillService>(SkillService);
container.registerSingleton<ContextRepository>(ContextRepository);
container.registerSingleton<ContextService>(ContextService);
container.registerSingleton<ContextSkillRepository>(ContextSkillRepository);
container.registerSingleton<ContextSkillService>(ContextSkillService);
