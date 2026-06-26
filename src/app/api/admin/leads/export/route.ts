import { requireAdminAuth } from "@/lib/admin/auth";
import { getAllWaitlistSubmissionsForExport } from "@/lib/waitlist/repository";

function csvEscape(value: string | null | undefined): string {
  const text = value ?? "";
  if (/[",\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function interestLabel(interest: string): string {
  if (interest === "research") return "Avelion Wellness";
  if (interest === "care") return "Avelion Care";
  return "Both";
}

export async function GET() {
  const authError = await requireAdminAuth();
  if (authError) return authError;

  const submissions = await getAllWaitlistSubmissionsForExport();

  const headers = [
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "Interest",
    "Goals",
    "Submitted At",
  ];

  const rows = submissions.map((row) =>
    [
      row.first_name,
      row.last_name,
      row.email,
      row.phone,
      interestLabel(row.interest),
      row.goals,
      row.submitted_at,
    ]
      .map(csvEscape)
      .join(",")
  );

  const csv = [headers.join(","), ...rows].join("\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="avelion-waitlist-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
