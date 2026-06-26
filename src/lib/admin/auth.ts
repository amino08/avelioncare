import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "avelion_admin_session";

function getAdminPassword(): string | null {
  return process.env.ADMIN_WAITLIST_PASSWORD ?? null;
}

export function isAdminConfigured(): boolean {
  return Boolean(getAdminPassword());
}

export function createAdminSessionToken(): string | null {
  const password = getAdminPassword();
  if (!password) return null;

  return createHmac("sha256", password)
    .update("avelion-admin-session-v1")
    .digest("hex");
}

export function verifyAdminPassword(password: string): boolean {
  const expected = getAdminPassword();
  if (!expected) return false;

  try {
    return timingSafeEqual(Buffer.from(password), Buffer.from(expected));
  } catch {
    return false;
  }
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const expected = createAdminSessionToken();
  if (!expected) return false;

  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  if (!token) return false;

  try {
    return timingSafeEqual(Buffer.from(token), Buffer.from(expected));
  } catch {
    return false;
  }
}

export function getAdminCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/",
    maxAge: 60 * 60 * 12,
  };
}

export async function requireAdminAuth(): Promise<Response | null> {
  if (!isAdminConfigured()) {
    return Response.json(
      { error: "Admin dashboard is not configured." },
      { status: 503 }
    );
  }

  const authed = await isAdminAuthenticated();
  if (!authed) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null;
}
