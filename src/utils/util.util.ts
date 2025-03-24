import { Express } from "express";
import { port } from "../config/loadEnv";
import { sequelize } from "../config/db";

export default class Util {
  public static async initServer(app: Express): Promise<void> {
    await sequelize.authenticate();
    console.log("Trying connect with database");
    await sequelize.sync();
    console.log("Synchronizing database");
    app.listen(port, () => {
      console.log(`Server running on the port ${port}`);
    });
  }

  public static verifyParams(...params: string[] | number[]): boolean {
    return params.every((param) => param);
  }
}
