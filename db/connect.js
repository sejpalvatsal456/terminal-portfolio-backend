
import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_NAME = process.env.MONGODB_NAME;

if (!MONGODB_URI || !MONGODB_NAME) {
  throw new Error("MongoDB environment variables are missing.");
}

const connectDB = async () => {
  try {
    await connect(MONGODB_URI, {
      dbName: MONGODB_NAME,
      family: 4,
      serverSelectionTimeoutMS: 30000,
      maxPoolSize: 10,
    });

    console.log("DB Connected Successfully.");
  } catch (err) {
    console.error("Error in connecting DB:", err);
    throw err;
  }
};

export default connectDB;
