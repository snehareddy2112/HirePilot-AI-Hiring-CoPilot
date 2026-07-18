"use client";

import {
  X,
  Mail,
  FileText,
  Globe,
} from "lucide-react";

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
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-full max-w-xl transform border-l border-slate-800 bg-slate-950 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {candidate && (
          <>
            <div className="flex items-center justify-between border-b border-slate-800 p-6">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {candidate.subject}
                </h2>

                <p className="text-slate-400">{candidate.from}</p>
              </div>

              <button
                onClick={onClose}
                className="rounded-lg p-2 hover:bg-slate-800"
              >
                <X className="text-white" />
              </button>
            </div>

            <div className="space-y-6 overflow-y-auto p-6">
              {/* AI Summary */}
              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
                <h3 className="mb-3 font-semibold text-white">
                  AI Summary
                </h3>

                <p className="leading-7 text-slate-300">
                  {candidate.aiSummary}
                </p>
              </div>

              {/* Score */}
              <div className="rounded-xl bg-slate-900 p-5">
                <p className="text-sm text-slate-400">AI Score</p>

                <h2 className="mt-2 text-4xl font-bold text-green-400">
                  {candidate.score}%
                </h2>
              </div>

              {/* Sender */}
              <div className="rounded-xl bg-slate-900 p-5">
                <h3 className="mb-4 font-semibold text-white">
                  Sender
                </h3>

                <div className="flex items-center gap-3">
                  <Mail className="text-blue-500" />

                  <p className="text-slate-300">{candidate.from}</p>
                </div>
              </div>

              {/* Email Content */}
              <div className="rounded-xl bg-slate-900 p-5">
                <h3 className="mb-4 font-semibold text-white">
                  Email Content
                </h3>

                <p className="whitespace-pre-wrap leading-7 text-slate-300">
                  {candidate.body}
                </p>
              </div>

              {/* Skills */}
              <div className="rounded-xl bg-slate-900 p-5">
                <h3 className="mb-4 font-semibold text-white">
                  Skills
                </h3>

                <div className="flex flex-wrap gap-2">
                  {candidate.skills?.map((skill: string) => (
                    <span
                      key={skill}
                      className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Missing Skills */}
              <div className="rounded-xl bg-slate-900 p-5">
                <h3 className="mb-4 font-semibold text-white">
                  Missing Skills
                </h3>

                <div className="flex flex-wrap gap-2">
                  {candidate.missingSkills?.map((skill: string) => (
                    <span
                      key={skill}
                      className="rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommendation */}
              <div className="rounded-xl bg-slate-900 p-5">
                <h3 className="font-semibold text-white">
                  Recommendation
                </h3>

                <p className="mt-2 text-green-400">
                  {candidate.recommendation}
                </p>
              </div>

              {/* Links */}
              <div className="grid grid-cols-2 gap-3">
                <button className="rounded-xl bg-slate-900 p-4 hover:bg-slate-800">
                  <Globe className="mx-auto mb-2 text-blue-500" />

                  <p className="text-xs text-white">
                    GitHub
                  </p>
                </button>

                <button className="rounded-xl bg-slate-900 p-4 hover:bg-slate-800">
                  <Globe className="mx-auto mb-2 text-blue-500" />

                  <p className="text-xs text-white">
                    Portfolio
                  </p>
                </button>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3">
                <button className="rounded-xl bg-green-600 p-4 font-semibold text-white hover:bg-green-700">
                  Shortlist
                </button>

                <button className="rounded-xl bg-red-600 p-4 font-semibold text-white hover:bg-red-700">
                  Reject
                </button>
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