"use server";

import mongoose from "mongoose";

let isConnect = false;
export const connectToDatabase = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error("Mongoose url is not set");
  }
  if (isConnect) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "ucademy",
    });
    isConnect = true;
    console.log("Using new DB connection");
  } catch (error) {
    console.log("Error while connecting to DB");
  }
};
