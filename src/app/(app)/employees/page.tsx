import { DataTable } from "@/components/DataTable";
import { PageHeader } from "@/components/PageHeader";

export default function EmployeesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Employees"
        description="Manage employee records, roles, and departments."
        action={
          <button className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white">
            Add employee
          </button>
        }
      />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Departments</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">7 active</p>
          <p className="mt-1 text-xs text-slate-500">Finance, Sales, Operations</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Positions</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">18 roles</p>
          <p className="mt-1 text-xs text-slate-500">Manager, Accountant, Analyst</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">New hires</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">3 pending</p>
          <p className="mt-1 text-xs text-slate-500">Awaiting contract signature</p>
        </div>
      </div>
      <DataTable
        headers={["Name", "Department", "Position", "Status"]}
        rows={[
          ["Dilshod Akramov", "Finance", "Accountant", "Active"],
          ["Aziza Muminova", "Operations", "HR Manager", "Active"],
          ["Jasur Bek", "Sales", "Sales Lead", "Onboarding"]
        ]}
      />
    </div>
  );
}
