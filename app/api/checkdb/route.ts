import { connectToDB } from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function GET() {
  const con = await connectToDB();
  return new NextResponse("Connected to MongoDB");
}
