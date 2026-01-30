import { DataTable } from "@/components/DataTable";
import { PageHeader } from "@/components/PageHeader";

export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Invoices"
        description="Issue invoices and track collections."
        action={
          <button className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white">
            Create invoice
          </button>
        }
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Outstanding</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">UZS 42,000,000</p>
          <p className="mt-1 text-xs text-slate-500">6 invoices pending</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Paid this month</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">UZS 78,500,000</p>
          <p className="mt-1 text-xs text-slate-500">Average 12 days to pay</p>
        </div>
      </div>
      <DataTable
        headers={["Invoice", "Counterparty", "Amount", "Status"]}
        rows={[
          ["INV-1023", "Artel", "UZS 12,500,000", "Paid"],
          ["INV-1024", "Orient Group", "UZS 8,750,000", "Unpaid"],
          ["INV-1025", "Eco Logistics", "UZS 6,400,000", "Overdue"]
        ]}
      />
    </div>
  );
}
