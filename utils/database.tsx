import mongoose from "mongoose";

const connectToDB = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error(
      "Add the MONGODB_URI environment variable inside .env.local to use mongoose"
    );
  }
  return mongoose
    .connect(process.env.MONGODB_URI, {})
    .catch((e) => console.error("Mongoose Client Error: " + e.message));
};

export default connectToDB;
