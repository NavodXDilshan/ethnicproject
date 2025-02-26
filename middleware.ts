import { NextRequest, NextResponse } from "next/server";

export const config = {

};

export function middleware(req: NextRequest) {
    return NextResponse.next();
}
