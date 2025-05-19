// app/api/timestamp/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  const now = new Date();
  const timestamp = now.toISOString(); // e.g. "2025-05-18T12:34:56.789Z"

  return NextResponse.json({ timestamp });
}
