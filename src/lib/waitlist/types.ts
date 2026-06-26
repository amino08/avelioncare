export const WAITLIST_INTERESTS = ["research", "care", "both"] as const;

export type WaitlistInterest = (typeof WAITLIST_INTERESTS)[number];

export interface WaitlistSubmission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  interest: WaitlistInterest;
  goals: string | null;
  submitted_at: string;
}

export interface WaitlistAnalytics {
  total: number;
  today: number;
  thisWeek: number;
  careInterest: number;
  wellnessInterest: number;
  bothInterest: number;
}

export interface WaitlistListQuery {
  search?: string;
  interest?: WaitlistInterest;
  limit?: number;
  offset?: number;
}
