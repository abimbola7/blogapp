import { NextResponse } from "next/server";
import User from "@/app/(models)/user";

export async function POST(req, res) {
  try {
    const body = await req.json();
    const userData  = body.user
    const userEmail = await User.findOne({ email : userData.email })
    console.log(userEmail)
    return NextResponse.json({ userEmail }, { status : 200 })  
  } catch (error) {
    return NextResponse.json({ message : error }, { status : 500 })  
  }
}