import mongoose, { connection } from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
  try {
    await mongoose.connect(`${Bun.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`MongoDB connected !! DB HOST: ${connection.host}`);
    
} catch (error) {
    console.log("MONGODB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;