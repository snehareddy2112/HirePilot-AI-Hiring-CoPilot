"use client";

import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-900 px-8">
      <div className="flex items-center gap-3 rounded-xl bg-slate-800 px-4 py-3">
        <Search size={18} className="text-slate-400" />

        <input
          placeholder="Search candidates..."
          className="bg-transparent text-white outline-none placeholder:text-slate-500"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell className="text-slate-400" />

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
          S
        </div>
      </div>
    </header>
  );
}