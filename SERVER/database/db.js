import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("MongoDB URI:", process.env.MONGO_URI); // Debugging line

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MongoDB URI is not defined in .env");
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
        
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
