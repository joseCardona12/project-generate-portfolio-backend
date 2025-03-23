import { Sequelize } from "sequelize-typescript";
import { db_host, db_name, db_password, db_port, db_user } from "./loadEnv";
import SkillsModel from "../models/skill.model";
import ContextModel from "../models/context.model";
import ContextSkillModel from "../models/context_skill.model";

export const sequelize: Sequelize = new Sequelize({
  database: db_name,
  dialect: "mysql",
  host: db_host,
  port: parseInt(db_port),
  username: db_user,
  password: db_password,
  models: [SkillsModel, ContextModel, ContextSkillModel],
});
