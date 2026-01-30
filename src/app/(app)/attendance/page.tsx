import { DataTable } from "@/components/DataTable";
import { PageHeader } from "@/components/PageHeader";

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Attendance & Timesheets"
        description="Track daily check-ins, overtime, and approvals."
        action={
          <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
            Export CSV
          </button>
        }
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Today</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">112 checked in</p>
          <p className="mt-1 text-xs text-slate-500">8 late arrivals</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Pending approvals</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">14 timesheets</p>
          <p className="mt-1 text-xs text-slate-500">3 weekend entries</p>
        </div>
      </div>
      <DataTable
        headers={["Employee", "Date", "Hours", "Status"]}
        rows={[
          ["Malika Ibrohim", "May 12", "8h", "Approved"],
          ["Rustam Sattar", "May 12", "7h 30m", "Pending"],
          ["Azamat Rahim", "May 12", "10h", "Overtime"]
        ]}
      />
    </div>
  );
}
