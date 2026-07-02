"use client";

import { X, GitBranch, Globe, FileText, Mail } from "lucide-react";
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
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
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
                  {candidate.name}
                </h2>

                <p className="text-slate-400">
                  {candidate.role}
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
                  AI Recruiter Brief
                </h3>

                <p className="leading-7 text-slate-300">
                  Strong MERN developer with deployed projects, active GitHub,
                  excellent portfolio and solid backend knowledge.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-slate-900 p-5">
                  <p className="text-sm text-slate-400">
                    Match Score
                  </p>

                  <h2 className="mt-2 text-4xl font-bold text-green-400">
                    {candidate.match}%
                  </h2>
                </div>

                <div className="rounded-xl bg-slate-900 p-5">
                  <p className="text-sm text-slate-400">
                    Status
                  </p>

                  <h2 className="mt-2 text-xl font-semibold text-white">
                    {candidate.status}
                  </h2>
                </div>

              </div>

              <div className="rounded-xl bg-slate-900 p-5">
                <h3 className="mb-4 font-semibold text-white">
                  Matching Skills
                </h3>

                <div className="flex flex-wrap gap-2">
                  {["React", "Node", "MongoDB", "Express", "JWT"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="rounded-xl bg-slate-900 p-5">
                <h3 className="mb-4 font-semibold text-white">
                  Missing Skills
                </h3>

                <div className="flex flex-wrap gap-2">
                  {["AWS", "Docker"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">

                <button className="rounded-xl bg-slate-900 p-4 hover:bg-slate-800">
                  <GitBranch className="mx-auto mb-2 text-blue-500" />
                  <p className="text-xs text-white">GitHub</p>
                </button>

                <button className="rounded-xl bg-slate-900 p-4 hover:bg-slate-800">
                  <Globe className="mx-auto mb-2 text-blue-500" />
                  <p className="text-xs text-white">Portfolio</p>
                </button>

                <button className="rounded-xl bg-slate-900 p-4 hover:bg-slate-800">
                  <FileText className="mx-auto mb-2 text-blue-500" />
                  <p className="text-xs text-white">Resume</p>
                </button>

              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700">
                <Mail size={18} />
                Send Assessment
              </button>

            </div>
          </>
        )}
      </aside>
    </>
  );
}