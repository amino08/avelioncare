import { getSupabaseAdmin } from "@/lib/supabase/server";
import type {
  WaitlistAnalytics,
  WaitlistInterest,
  WaitlistListQuery,
  WaitlistSubmission,
} from "./types";

function mapRow(row: Record<string, unknown>): WaitlistSubmission {
  return {
    id: String(row.id),
    first_name: String(row.first_name),
    last_name: String(row.last_name),
    email: String(row.email),
    phone: String(row.phone),
    interest: row.interest as WaitlistInterest,
    goals: row.goals ? String(row.goals) : null,
    submitted_at: String(row.submitted_at),
  };
}

function startOfDay(date: Date): string {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d.toISOString();
}

function startOfWeek(date: Date): string {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? 6 : day - 1;
  d.setDate(d.getDate() - diff);
  d.setHours(0, 0, 0, 0);
  return d.toISOString();
}

export async function listWaitlistSubmissions(
  query: WaitlistListQuery = {}
): Promise<WaitlistSubmission[]> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return [];

  const limit = query.limit ?? 200;
  const offset = query.offset ?? 0;

  let builder = supabase.from("waitlist_submissions").select("*");

  if (query.interest) {
    builder = builder.eq("interest", query.interest);
  }

  if (query.search) {
    const term = query.search.replace(/[%_]/g, "");
    builder = builder.or(
      `first_name.ilike.%${term}%,last_name.ilike.%${term}%,email.ilike.%${term}%,phone.ilike.%${term}%`
    );
  }

  const { data, error } = await builder
    .order("submitted_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error("[Waitlist] list failed:", error.message);
    return [];
  }

  return (data ?? []).map(mapRow);
}

export async function getWaitlistAnalytics(): Promise<WaitlistAnalytics | null> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return null;

  const now = new Date();
  const dayStart = startOfDay(now);
  const weekStart = startOfWeek(now);

  const [totalRes, todayRes, weekRes, careRes, wellnessRes, bothRes] =
    await Promise.all([
      supabase
        .from("waitlist_submissions")
        .select("*", { count: "exact", head: true }),
      supabase
        .from("waitlist_submissions")
        .select("*", { count: "exact", head: true })
        .gte("submitted_at", dayStart),
      supabase
        .from("waitlist_submissions")
        .select("*", { count: "exact", head: true })
        .gte("submitted_at", weekStart),
      supabase
        .from("waitlist_submissions")
        .select("*", { count: "exact", head: true })
        .eq("interest", "care"),
      supabase
        .from("waitlist_submissions")
        .select("*", { count: "exact", head: true })
        .eq("interest", "research"),
      supabase
        .from("waitlist_submissions")
        .select("*", { count: "exact", head: true })
        .eq("interest", "both"),
    ]);

  return {
    total: totalRes.count ?? 0,
    today: todayRes.count ?? 0,
    thisWeek: weekRes.count ?? 0,
    careInterest: careRes.count ?? 0,
    wellnessInterest: wellnessRes.count ?? 0,
    bothInterest: bothRes.count ?? 0,
  };
}

export async function getAllWaitlistSubmissionsForExport(): Promise<
  WaitlistSubmission[]
> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("waitlist_submissions")
    .select("*")
    .order("submitted_at", { ascending: false });

  if (error) {
    console.error("[Waitlist] export failed:", error.message);
    return [];
  }

  return (data ?? []).map(mapRow);
}

export async function saveWaitlistSubmission(input: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: WaitlistInterest;
  goals?: string | null;
}): Promise<void> {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    throw new Error("Waitlist storage is not configured");
  }

  const { error } = await supabase.from("waitlist_submissions").upsert(
    {
      first_name: input.firstName,
      last_name: input.lastName,
      email: input.email.toLowerCase(),
      phone: input.phone,
      interest: input.interest,
      goals: input.goals ?? null,
      submitted_at: new Date().toISOString(),
    },
    { onConflict: "email" }
  );

  if (error) {
    throw new Error(error.message);
  }
}
