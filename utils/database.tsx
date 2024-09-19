import mongoose from "mongoose";

export const connectToDB = async () => {
  console.log("Started connectToDB");

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
