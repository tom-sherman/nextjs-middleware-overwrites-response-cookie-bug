import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.cookies.set({
    name: "middleware-cookie",
    value: Math.random().toString(),
    httpOnly: true,
  });
  return response;
}
