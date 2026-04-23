import { g } from "framer-motion/client";
import { NextRequest, NextResponse } from "next/server";

const BACKEND_API_URL = process.env.BACKEND_API_URL || "http://localhost:3001";

export async function GET(req: NextRequest, context: any) {
  try {
    const sessionId = context.params.sessionId;
    const response = await fetch(
      `${BACKEND_API_URL}/api/auth/chat/session/${sessionId}/history`,
    );

    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in chat history API:", error);
    return NextResponse.json(
      { message: "Failed to fetch chat session history", error },
      { status: 500 },
    );
  }
}

export async function POST(
  req: NextRequest,
  context: any,
) {
  try {
    const sessionId = context.params.sessionId;
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const response = await fetch(
      `${BACKEND_API_URL}/chat/sessions/${sessionId}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Failed to process chat message" },
      { status: 500 },
    );
  }
}