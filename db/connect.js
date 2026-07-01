import { connect } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_NAME = process.env.MONGODB_NAME;

const connectDB = () => {
  return connect(MONGODB_URI, { dbName: MONGODB_NAME, bufferCommands: true  })
  .then(() => console.log("DB Connected Successfully."))
  .catch(err => {
    console.log("Error in connecting DB.");
    console.log(err);
  });
};

export default connectDB;