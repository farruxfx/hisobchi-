import { DataTable } from "@/components/DataTable";
import { PageHeader } from "@/components/PageHeader";

export default function PayrollPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Payroll"
        description="Run payroll, configure allowances, and generate payslips."
        action={
          <button className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white">
            Create payroll run
          </button>
        }
      />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Current cycle</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">May 2026</p>
          <p className="mt-1 text-xs text-slate-500">Draft in progress</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Allowances</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">4 active</p>
          <p className="mt-1 text-xs text-slate-500">Transport, meal, bonus</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Deductions</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">2 active</p>
          <p className="mt-1 text-xs text-slate-500">Tax, advances</p>
        </div>
      </div>
      <DataTable
        headers={["Employee", "Salary type", "Gross", "Net"]}
        rows={[
          ["Dilshod Akramov", "Monthly", "UZS 7,200,000", "UZS 6,480,000"],
          ["Aziza Muminova", "Monthly", "UZS 6,100,000", "UZS 5,580,000"],
          ["Jasur Bek", "Hourly", "UZS 4,500,000", "UZS 4,050,000"]
        ]}
      />
    </div>
  );
}
