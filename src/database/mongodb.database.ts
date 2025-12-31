import { env } from "../env.js";
import mongoose from "mongoose";

export async function connectMongoose(): Promise<void> {
  console.log("Mongoose connecting to mongodb...");

  const options = await mongoose.connect(env.MONGODB, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    maxPoolSize: 10,
  });

  console.log("MongoDB:")
  console.log(` Host: ${options.connection.host}`)
  console.log(` Port: ${String(options.connection.port)}`)
  console.log(` Name: ${options.connection.name}`)
}
