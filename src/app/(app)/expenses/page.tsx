import { DataTable } from "@/components/DataTable";
import { PageHeader } from "@/components/PageHeader";

export default function ExpensesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Expenses"
        description="Capture expenses with attachments and approvals."
        action={
          <button className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white">
            New expense
          </button>
        }
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Month-to-date</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">UZS 96,400,000</p>
          <p className="mt-1 text-xs text-slate-500">+12% vs last month</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Open reimbursements</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">5 items</p>
          <p className="mt-1 text-xs text-slate-500">UZS 8,500,000 awaiting approval</p>
        </div>
      </div>
      <DataTable
        headers={["Vendor", "Category", "Amount", "Status"]}
        rows={[
          ["Ucell", "Telecom", "UZS 1,200,000", "Approved"],
          ["Makro", "Office supplies", "UZS 450,000", "Pending"],
          ["Tex Service", "Logistics", "UZS 3,100,000", "Paid"]
        ]}
      />
    </div>
  );
}
