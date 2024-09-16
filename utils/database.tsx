import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  console.log("Started connectToDB");
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  } else {
    console.log("MongoDB is not connected");
  }
  console.log(process.env.MONGO_DB_PASS);
  try {
    await mongoose.connect(
      `mongodb+srv://eejm:${process.env.MONGO_DB_PASS}@cluster0.vhk5t.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0`
    );
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
