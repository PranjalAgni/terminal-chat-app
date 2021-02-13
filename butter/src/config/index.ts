import dotenv from "dotenv";

dotenv.config();

export default {
  isProd: process.env.NODE_ENV === "production",
  env: process.env.NODE_ENV,
  port: process.env.PORT
};
