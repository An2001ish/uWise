import mongoose from "mongoose";
import { logger } from "./logger";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://an2001ish_db_user:MRUzc6FQT2lbGxZe@uwise-cluster.5agwizg.mongodb.net/?appName=uwise-cluster";

export const connectDB = async () =>{
try {
    await mongoose.connect(MONGODB_URI)
    logger.info("Connected to MongoDB Atlas.")
} catch (error) {
    logger.error("MongoDB connection error:", error)
    process.exit(1);
}
}