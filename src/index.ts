import "reflect-metadata";
import { connectMongoose } from "@/database/mongodb.database.js";
import "@/config/dotenv.config.js";
import { env } from "@/env.js";
import { App } from "@/app.js";

async function setup() {
  const app = new App(env.PORT);
  await connectMongoose();
  await app.start();
}

setup();
