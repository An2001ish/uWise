import { g } from "framer-motion/client";
import {NextRequest, NextResponse} from "next/server";

const BACKEND_API_URL =
  process.env.BACKEND_API_URL || "https://u-wise.vercel.app";
// || "http://localhost:3001";

export async function POST(req: NextRequest){
    try {
        const authHeader = req.headers.get("Authorization");
        if (!authHeader) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        
        const response = await fetch(`${BACKEND_API_URL}/chat/session`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: authHeader,
            },
        }
        )

        if (!response.ok) {
            const error = await response.json();
            console.log("Failed to create chat session", error)
            return NextResponse.json({ message: "Failed to create chat session", error }, { status: 500 });
        }

        const data = await response.json();
        console.log("Chat session created:",data);
        return NextResponse.json(data);
                
    } catch (error) {
        return NextResponse.json({ message: "Failed to create chat session", error }, { status: 500 });
    }
}