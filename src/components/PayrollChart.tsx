"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const data = [
  { month: "Jan", total: 120 },
  { month: "Feb", total: 98 },
  { month: "Mar", total: 130 },
  { month: "Apr", total: 110 },
  { month: "May", total: 142 }
];

export function PayrollChart() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <p className="text-xs uppercase tracking-wide text-slate-400">Payroll trend</p>
        <p className="text-lg font-semibold text-slate-900">Monthly payroll total</p>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} />
            <YAxis stroke="#94A3B8" fontSize={12} />
            <Tooltip />
            <Line type="monotone" dataKey="total" stroke="#4F46E5" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
