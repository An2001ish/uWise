import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const API_URL = process.env.BACKEND_API_URL || "https://u-wise.vercel.app";
  //  || "http://localhost:3001";

  const authHeader = request.headers.get("authorization");

  try {
    const res = await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader || "",
      },
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error!", error },
      { status: 500 },
    );
  }
}
