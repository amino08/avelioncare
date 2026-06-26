import type { Metadata } from "next";
import { AdminWaitlistClient } from "@/components/admin/admin-waitlist-client";
import { isAdminAuthenticated, isAdminConfigured } from "@/lib/admin/auth";

export const metadata: Metadata = {
  title: "Waitlist Admin",
  robots: { index: false, follow: false },
};

export default async function AdminWaitlistPage() {
  const configured = isAdminConfigured();
  const authenticated = configured ? await isAdminAuthenticated() : false;

  return (
    <AdminWaitlistClient
      configured={configured}
      authenticated={authenticated}
    />
  );
}
