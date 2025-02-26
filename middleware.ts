import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: "/protected-route", // Adjust based on where you use middleware
    runtime: "nodejs", // ✅ Ensures it runs in Node.js instead of Edge
};

export function middleware(req: NextRequest) {
    return NextResponse.next();
}
