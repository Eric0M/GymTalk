import { NextResponse } from "next/server";
import { connectToDB } from "../utils/database";
import { redirect } from "next/dist/server/api-utils";

export async function GET() {
  const con = await connectToDB();

  return new NextResponse("Connected");
}
