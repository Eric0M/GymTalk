import mongoose from "mongoose";

global.mongoose = {
  conn: null,
  promise: null,
};

export async function connectToDB() {
  if (global.mongoose && global.mongoose.conn) {
    console.log("Already connected");
    return global.mongoose.conn;
  } else {
    const conString = process.env.MONGODB_URI;

    const promise = mongoose.connect(conString, {
      autoIndex: true,
    });

    global.mongoose = {
      conn: await promise,
      promise,
    };
    console.log("Connected to MongoDB");
    return await promise;
  }
}
