import { StatCard } from "@/components/StatCard";
import { PayrollChart } from "@/components/PayrollChart";
import { DataTable } from "@/components/DataTable";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">
          Snapshot of payroll, attendance, and finance operations for this month.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Active employees" value="124" helper="6 pending onboarding" />
        <StatCard label="Payroll due" value="UZS 1.2B" helper="Run scheduled for 28th" />
        <StatCard label="Attendance compliance" value="96%" helper="2 departments below target" />
        <StatCard label="Open requests" value="18" helper="7 need manager approval" />
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <PayrollChart />
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-slate-400">Today</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-900">Quick actions</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>Approve 3 timesheets</li>
            <li>Review 2 expense claims</li>
            <li>Finalize April payroll draft</li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-slate-900">Recent activity</h2>
        <p className="text-sm text-slate-500">Latest approvals and payroll events.</p>
        <div className="mt-4">
          <DataTable
            headers={["Activity", "Owner", "Status", "Time"]}
            rows={[
              ["Payroll draft created", "A. Karimov", "Draft", "2h ago"],
              ["Expense reimbursement", "M. Rasulova", "Approved", "4h ago"],
              ["Leave request", "S. Iskandar", "Pending", "Yesterday"]
            ]}
          />
        </div>
      </div>
    </div>
  );
}
