"use client";

import { signOut } from "next-auth/react";

export function Topbar({ userEmail }: { userEmail?: string | null }) {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 md:px-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
          H
        </div>
        <div>
          <p className="text-sm font-medium text-slate-900">Welcome back</p>
          <p className="text-xs text-slate-500">{userEmail ?? "Signed in"}</p>
        </div>
      </div>
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50"
      >
        Sign out
      </button>
    </header>
  );
}
