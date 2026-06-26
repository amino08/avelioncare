import { NextResponse } from "next/server";
import { requireAdminAuth } from "@/lib/admin/auth";
import { getWaitlistAnalytics } from "@/lib/waitlist/repository";

export async function GET() {
  const authError = await requireAdminAuth();
  if (authError) return authError;

  const analytics = await getWaitlistAnalytics();
  if (!analytics) {
    return NextResponse.json(
      { error: "Waitlist storage is not configured." },
      { status: 503 }
    );
  }

  return NextResponse.json(analytics);
}
