import Link from "next/link";
import { roleLabels, type Role } from "@/lib/rbac";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/employees", label: "Employees" },
  { href: "/attendance", label: "Attendance" },
  { href: "/payroll", label: "Payroll" },
  { href: "/expenses", label: "Expenses" },
  { href: "/invoices", label: "Invoices" },
  { href: "/requests", label: "Requests" },
  { href: "/reports", label: "Reports" }
];

export function Sidebar({ role }: { role: Role }) {
  return (
    <aside className="hidden h-screen w-60 flex-col border-r border-slate-200 bg-white px-5 py-6 md:flex">
      <div className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Hisobchi</span>
        <span className="text-lg font-semibold text-slate-900">{roleLabels[role]}</span>
      </div>
      <nav className="mt-8 flex flex-1 flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="rounded-lg bg-slate-50 p-3 text-xs text-slate-500">
        UZS default · Minimal operations suite
      </div>
    </aside>
  );
}
