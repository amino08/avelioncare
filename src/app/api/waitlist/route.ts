import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { waitlistSchema } from "@/lib/validations/waitlist";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = waitlistSchema.parse(body);

    const supabase = getSupabaseAdmin();
    if (!supabase) {
      console.error("[Waitlist] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
      return NextResponse.json(
        { error: "Waitlist storage is not configured. Please try again later." },
        { status: 503 }
      );
    }

    const submittedAt = new Date().toISOString();

    const { error } = await supabase.from("waitlist_submissions").upsert(
      {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email.toLowerCase(),
        phone: data.phone,
        interest: data.interest,
        goals: data.goals?.trim() || null,
        submitted_at: submittedAt,
      },
      { onConflict: "email" }
    );

    if (error) {
      console.error("[Waitlist] Supabase insert failed:", error.message);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

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
