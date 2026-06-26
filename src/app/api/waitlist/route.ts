import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { waitlistSchema } from "@/lib/validations/waitlist";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = waitlistSchema.parse(body);

    // In production, integrate with your CRM/email provider (e.g., Resend, HubSpot)
    console.log("[Waitlist Submission]", {
      ...data,
      submittedAt: new Date().toISOString(),
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

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
