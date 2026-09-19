import mongoose from "mongoose";

const connectionOptions = {
  dbName: process.env.MONGO_DB_NAME,
};

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI,
      connectionOptions,
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
