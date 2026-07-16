"use client";

import { X, Mail, FileText } from "lucide-react";
import { Candidate } from "@/types/candidate";

interface CandidateDrawerProps {
  candidate: Candidate | null;
  open: boolean;
  onClose: () => void;
}

export default function CandidateDrawer({
  candidate,
  open,
  onClose,
}: CandidateDrawerProps) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${
          open
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-full max-w-xl transform border-l border-slate-800 bg-slate-950 transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {candidate && (
          <>
            <div className="flex items-center justify-between border-b border-slate-800 p-6">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {candidate.subject}
                </h2>

                <p className="text-slate-400">
                  {candidate.from}
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-lg p-2 hover:bg-slate-800"
              >
                <X className="text-white" />
              </button>
            </div>

            <div className="space-y-6 overflow-y-auto p-6">
              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
                <h3 className="mb-3 font-semibold text-white">
                  Email Summary
                </h3>

                <p className="leading-7 text-slate-300">
                  {candidate.body}
                </p>
              </div>

              <div className="rounded-xl bg-slate-900 p-5">
                <h3 className="mb-4 font-semibold text-white">
                  Sender
                </h3>

                <div className="flex items-center gap-3">
                  <Mail className="text-blue-500" />

                  <p className="text-slate-300">
                    {candidate.from}
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-slate-900 p-5">
                <h3 className="mb-4 font-semibold text-white">
                  Email Content
                </h3>

                <p className="whitespace-pre-wrap leading-7 text-slate-300">
                  {candidate.body}
                </p>
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700">
                <FileText size={18} />
                View Resume (Coming Soon)
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}