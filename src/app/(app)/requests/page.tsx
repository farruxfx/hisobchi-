import { DataTable } from "@/components/DataTable";
import { PageHeader } from "@/components/PageHeader";

export default function RequestsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Requests & Approvals"
        description="Employees submit leave, advances, and reimbursements."
        action={
          <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
            New request
          </button>
        }
      />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Pending</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">11 requests</p>
          <p className="mt-1 text-xs text-slate-500">7 leave · 2 advances</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Approved</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">28 requests</p>
          <p className="mt-1 text-xs text-slate-500">Awaiting processing</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Rejected</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">2 requests</p>
          <p className="mt-1 text-xs text-slate-500">Last 30 days</p>
        </div>
      </div>
      <DataTable
        headers={["Employee", "Type", "Amount/Date", "Status"]}
        rows={[
          ["Aziza Muminova", "Leave", "May 20 - May 24", "Pending"],
          ["Jasur Bek", "Advance", "UZS 1,500,000", "Approved"],
          ["Dilshod Akramov", "Reimbursement", "UZS 420,000", "Rejected"]
        ]}
      />
    </div>
  );
}
