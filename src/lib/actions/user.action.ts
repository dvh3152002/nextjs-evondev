"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";
import { TCreateUserParam } from "@/types";

export default async function createUser(params: TCreateUserParam) {
  try {
    connectToDatabase();
    const user = await User.create(params);
    return user;
  } catch (error) {
    // console.log("Error create user: ", error);
    throw error;
  }
}
