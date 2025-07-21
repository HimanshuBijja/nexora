import { sendSkibidiEmail } from "@/helpers/sendSkibidiMail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request : NextRequest){
    const {firstname, email} = await request.json()
    sendSkibidiEmail(email, firstname)
    return NextResponse.json({message : "true"})
}

// src\app\api\user\skibidiSignup\route.ts