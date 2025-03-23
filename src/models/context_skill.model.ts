import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import ContextModel from "./context.model";
import SkillsModel from "./skill.model";

@Table({
  tableName: "context_skills",
  timestamps: false,
})
export default class ContextSkillModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id!: number;

  @ForeignKey(() => ContextModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  context_id!: number;

  @ForeignKey(() => SkillsModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  skill_id!: number;
}
