/* istanbul ignore file */

import { config as loadEnvironment } from "dotenv";

loadEnvironment();

export const environment = () => ({
  CORS_ORIGIN: "*",
  NODE_ENV: process.env.NODE_ENV as string,
  PORT: process.env.PORT ? Number(process.env.PORT) : 0,
});
