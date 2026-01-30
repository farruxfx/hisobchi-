import { DataTable } from "@/components/DataTable";
import { PageHeader } from "@/components/PageHeader";
import { ExpenseChart } from "@/components/ExpenseChart";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Reports"
        description="Payroll, attendance, expenses, and cashflow insights."
        action={
          <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
            Export CSV
          </button>
        }
      />
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <ExpenseChart />
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-slate-400">Cashflow</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">+UZS 32.5M</p>
          <p className="mt-1 text-xs text-slate-500">Income vs expenses (last 30 days)</p>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span>Income</span>
              <span className="font-medium text-emerald-600">UZS 126M</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Expenses</span>
              <span className="font-medium text-rose-500">UZS 93.5M</span>
            </div>
          </div>
        </div>
      </div>
      <DataTable
        headers={["Report", "Scope", "Status", "Updated"]}
        rows={[
          ["Payroll summary", "May 2026", "Ready", "Today"],
          ["Attendance summary", "Last 30 days", "Ready", "Today"],
          ["Expense report", "Q2 2026", "Draft", "Yesterday"]
        ]}
      />
    </div>
  );
}
