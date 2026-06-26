"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AdminLoginFormProps {
  onSuccess: () => void;
}

export function AdminLoginForm({ onSuccess }: AdminLoginFormProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error ?? "Login failed");
      }

      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full rounded-xl border border-platinum bg-white p-8 shadow-[0_8px_48px_rgba(10,22,40,0.08)]"
      >
        <p className="font-heading text-3xl text-navy">Waitlist Admin</p>
        <p className="mt-2 text-sm text-navy/60">
          Enter the admin password to view CRM analytics and leads.
        </p>

        <div className="mt-8 space-y-2">
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Admin password"
            className="h-12 border-platinum bg-platinum-soft/50"
            autoComplete="current-password"
          />
        </div>

        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}

        <Button
          type="submit"
          disabled={loading || !password}
          className="mt-6 h-12 w-full rounded-lg bg-navy text-white hover:bg-navy/90"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>
    </div>
  );
}
