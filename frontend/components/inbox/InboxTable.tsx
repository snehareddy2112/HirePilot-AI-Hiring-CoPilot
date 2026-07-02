"use client";

import { Candidate } from "@/types/candidate";

interface InboxTableProps {
  candidates: Candidate[];
  onSelect: (candidate: Candidate) => void;
}

export default function InboxTable({
  candidates,
  onSelect,
}: InboxTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <table className="w-full">
        <thead className="border-b border-slate-800 bg-slate-950">
          <tr>
            <th className="px-6 py-4 text-left text-sm text-slate-400">
              Candidate
            </th>

            <th className="text-left text-sm text-slate-400">
              Role
            </th>

            <th className="text-left text-sm text-slate-400">
              Source
            </th>

            <th className="text-left text-sm text-slate-400">
              Match
            </th>

            <th className="text-left text-sm text-slate-400">
              Status
            </th>

            <th className="text-left text-sm text-slate-400">
              Applied
            </th>
          </tr>
        </thead>

        <tbody>
          {candidates.map((candidate) => (
            <tr
              key={candidate.id}
              onClick={() => onSelect(candidate)}
              className="cursor-pointer border-b border-slate-800 transition hover:bg-slate-800/50"
            >
              <td className="px-6 py-5">
                <div>
                  <h3 className="font-semibold text-white">
                    {candidate.name}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {candidate.email}
                  </p>
                </div>
              </td>

              <td className="text-slate-300">
                {candidate.role}
              </td>

              <td className="text-slate-300">
                {candidate.source}
              </td>

              <td>
                <span className="rounded-full bg-blue-600 px-3 py-1 text-sm text-white">
                  {candidate.match}%
                </span>
              </td>

              <td className="text-slate-300">
                {candidate.status}
              </td>

              <td className="text-slate-400">
                {candidate.appliedDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}