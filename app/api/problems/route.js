import { NextResponse } from "next/server";
import connectDb from "@/app/lib/mongodb";
import Problem from "../../models/problem";
export async function POST(req) {
  const data = await req.json();
  console.log(data);
  try {
    await connectDb();
    const temp = await Problem.findOne(data.id);
    console.log(temp);
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ msg: "yoo" });
}
