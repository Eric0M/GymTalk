import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  console.log("Started connectToDB");
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    console.log("trying to connect to database");
    await mongoose.connect(
      `mongodb+srv://eejm:${process.env.MONGO_DB_PASS}@gymtalk.vhk5t.mongodb.net/GymTalk?retryWrites=true&w=majority&appName=GymTalk`
    );
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
