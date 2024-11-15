import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

export default async function connectDb() {
  try {
    await mongoose.connect(DB_URL);
    console.log(`CONNECTED TO DATABASE`);
  } catch (error) {
    console.log("Error while connected to database", error);
  }
}
