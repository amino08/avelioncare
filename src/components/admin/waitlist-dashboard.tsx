"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Download, Loader2, LogOut, Search } from "lucide-react";
import type {
  WaitlistAnalytics,
  WaitlistSubmission,
} from "@/lib/waitlist/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function interestLabel(interest: WaitlistSubmission["interest"]): string {
  if (interest === "research") return "Avelion Wellness";
  if (interest === "care") return "Avelion Care";
  return "Both";
}

function formatDate(value: string): string {
  return new Date(value).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-platinum bg-white p-5">
      <p className="text-sm text-navy/55">{label}</p>
      <p className="mt-2 font-heading text-3xl text-navy">{value}</p>
    </div>
  );
}

export function WaitlistDashboard() {
  const [analytics, setAnalytics] = useState<WaitlistAnalytics | null>(null);
  const [submissions, setSubmissions] = useState<WaitlistSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [interest, setInterest] = useState<string>("all");

  const queryString = useMemo(() => {
    const params = new URLSearchParams();
    if (search.trim()) params.set("search", search.trim());
    if (interest !== "all") params.set("interest", interest);
    return params.toString();
  }, [search, interest]);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const [analyticsRes, leadsRes] = await Promise.all([
        fetch("/api/admin/analytics"),
        fetch(`/api/admin/leads?${queryString}`),
      ]);

      if (analyticsRes.status === 401 || leadsRes.status === 401) {
        window.location.reload();
        return;
      }

      if (!analyticsRes.ok || !leadsRes.ok) {
        throw new Error("Failed to load dashboard data");
      }

      const analyticsData = (await analyticsRes.json()) as WaitlistAnalytics;
      const leadsData = (await leadsRes.json()) as {
        submissions: WaitlistSubmission[];
      };

      setAnalytics(analyticsData);
      setSubmissions(leadsData.submissions);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  }, [queryString]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadData();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [loadData]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.reload();
  };

  if (loading && !analytics) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="size-8 animate-spin text-clinical" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-red-500">{error}</p>
        <Button onClick={() => void loadData()} className="mt-4">
          Retry
        </Button>
      </div>
    );
  }

  if (!analytics) return null;

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-navy/45">
            Avelion Admin
          </p>
          <h1 className="font-heading text-4xl text-navy">Waitlist Dashboard</h1>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="border-platinum"
            onClick={() => {
              window.location.href = "/api/admin/leads/export";
            }}
          >
            <Download className="mr-2 size-4" />
            Export CSV
          </Button>
          <Button
            variant="outline"
            className="border-platinum"
            onClick={() => void handleLogout()}
          >
            <LogOut className="mr-2 size-4" />
            Sign Out
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard label="Total Signups" value={analytics.total} />
        <StatCard label="Signups Today" value={analytics.today} />
        <StatCard label="Signups This Week" value={analytics.thisWeek} />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <StatCard label="Avelion Care Interest" value={analytics.careInterest} />
        <StatCard
          label="Avelion Wellness Interest"
          value={analytics.wellnessInterest}
        />
        <StatCard label="Both Interest" value={analytics.bothInterest} />
      </div>

      <div className="mt-10 rounded-xl border border-platinum bg-white p-6">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-heading text-2xl text-navy">Submissions</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-navy/35" />
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search name, email, or phone"
                className="h-11 border-platinum bg-platinum-soft/50 pl-10"
              />
            </div>
            <Select
              value={interest}
              onValueChange={(value) => value && setInterest(value)}
            >
              <SelectTrigger className="h-11 border-platinum bg-platinum-soft/50">
                <SelectValue placeholder="Filter by interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Interests</SelectItem>
                <SelectItem value="care">Avelion Care</SelectItem>
                <SelectItem value="research">Avelion Wellness</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-platinum text-navy/55">
                <th className="px-3 py-3 font-medium">Name</th>
                <th className="px-3 py-3 font-medium">Email</th>
                <th className="px-3 py-3 font-medium">Phone</th>
                <th className="px-3 py-3 font-medium">Interest</th>
                <th className="px-3 py-3 font-medium">Goals</th>
                <th className="px-3 py-3 font-medium">Submitted Date</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((row) => (
                <tr key={row.id} className="border-b border-platinum/70">
                  <td className="px-3 py-3 text-navy">
                    {row.first_name} {row.last_name}
                  </td>
                  <td className="px-3 py-3 text-navy/75">{row.email}</td>
                  <td className="px-3 py-3 text-navy/75">{row.phone}</td>
                  <td className="px-3 py-3 text-navy/75">
                    {interestLabel(row.interest)}
                  </td>
                  <td className="max-w-xs truncate px-3 py-3 text-navy/65">
                    {row.goals || "—"}
                  </td>
                  <td className="px-3 py-3 text-navy/65">
                    {formatDate(row.submitted_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {submissions.length === 0 && (
          <p className="py-10 text-center text-navy/50">
            No submissions match your filters.
          </p>
        )}
      </div>
    </div>
  );
}
