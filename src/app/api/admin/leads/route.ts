import { NextResponse } from "next/server";
import { requireAdminAuth } from "@/lib/admin/auth";
import { listWaitlistSubmissions } from "@/lib/waitlist/repository";
import {
  WAITLIST_INTERESTS,
  type WaitlistInterest,
} from "@/lib/waitlist/types";

function parseInterest(value: string | null): WaitlistInterest | undefined {
  if (!value) return undefined;
  return WAITLIST_INTERESTS.includes(value as WaitlistInterest)
    ? (value as WaitlistInterest)
    : undefined;
}

export async function GET(request: Request) {
  const authError = await requireAdminAuth();
  if (authError) return authError;

  const { searchParams } = new URL(request.url);

  const submissions = await listWaitlistSubmissions({
    search: searchParams.get("search") ?? undefined,
    interest: parseInterest(searchParams.get("interest")),
    limit: Math.min(Number(searchParams.get("limit") ?? 200), 500),
    offset: Number(searchParams.get("offset") ?? 0),
  });

  return NextResponse.json({ submissions });
}
