import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.cookies.set("other-cookie", Math.random().toString());
  return response;
}
