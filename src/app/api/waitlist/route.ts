import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { saveWaitlistSubmission } from "@/lib/waitlist/repository";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { waitlistSchema } from "@/lib/validations/waitlist";

export async function POST(request: Request) {
  try {
    if (!getSupabaseAdmin()) {
      console.error("[Waitlist] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
      return NextResponse.json(
        { error: "Waitlist storage is not configured. Please try again later." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const data = waitlistSchema.parse(body);

    await saveWaitlistSubmission({
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
      interest: data.interest,
      goals: data.goals?.trim() || null,
    });

    return NextResponse.json(
      { success: true, message: "Successfully joined the waitlist" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Invalid form data. Please check your entries." },
        { status: 400 }
      );
    }

    console.error("[Waitlist] Unexpected error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
