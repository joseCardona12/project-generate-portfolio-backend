import { configDotenv } from "dotenv";
configDotenv();

export const {
  PORT: port = "3001",
  DB_HOST: db_host = "",
  DB_PORT: db_port = "",
  DB_USER: db_user = "",
  DB_PASSWORD: db_password = "",
  DB_NAME: db_name = "",
} = process.env;
