"use client";

import { useState } from "react";
import { AdminLoginForm } from "@/components/admin/admin-login-form";
import { WaitlistDashboard } from "@/components/admin/waitlist-dashboard";

interface AdminWaitlistClientProps {
  authenticated: boolean;
  configured: boolean;
}

export function AdminWaitlistClient({
  authenticated,
  configured,
}: AdminWaitlistClientProps) {
  const [authed, setAuthed] = useState(authenticated);

  if (!configured) {
    return (
      <div className="mx-auto max-w-xl px-6 py-20 text-center">
        <h1 className="font-heading text-3xl text-navy">Admin Not Configured</h1>
        <p className="mt-4 text-navy/65">
          Set <code className="text-sm">ADMIN_WAITLIST_PASSWORD</code> in your
          environment variables to enable the waitlist dashboard.
        </p>
      </div>
    );
  }

  if (!authed) {
    return <AdminLoginForm onSuccess={() => setAuthed(true)} />;
  }

  return <WaitlistDashboard />;
}
