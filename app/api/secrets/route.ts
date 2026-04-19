import { NextResponse } from "next/server";
import { SECRETS } from "@/lib/db";

export async function GET() {
  return NextResponse.json(SECRETS);
}
