import mongoose from "mongoose";
const uri = `mongodb+srv://eejm:${process.env.MONGO_DB_PASS}@gymtalk.vhk5t.mongodb.net/GymTalk?retryWrites=true&w=majority&appName=GymTalk`;

export const connectToDB = async () => {
  console.log("Started connectToDB");

  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
