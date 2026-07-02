"use client";

import { Search } from "lucide-react";

export default function InboxFilters() {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
        <Search className="text-slate-400" size={18} />

        <input
          placeholder="Search candidates..."
          className="bg-transparent text-white outline-none placeholder:text-slate-500"
        />
      </div>

      <div className="flex gap-3">
        <select className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white">
          <option>All Jobs</option>
          <option>Backend Developer</option>
          <option>Frontend Developer</option>
        </select>

        <select className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white">
          <option>All Status</option>
          <option>New</option>
          <option>Review</option>
          <option>Shortlisted</option>
          <option>Rejected</option>
        </select>

        <select className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white">
          <option>10 / page</option>
          <option>25 / page</option>
          <option>50 / page</option>
        </select>
      </div>
    </div>
  );
}