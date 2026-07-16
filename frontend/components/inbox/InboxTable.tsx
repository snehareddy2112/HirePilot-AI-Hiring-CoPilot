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
              Subject
            </th>

            <th className="text-left text-sm text-slate-400">
              From
            </th>

            <th className="text-left text-sm text-slate-400">
              Preview
            </th>
          </tr>
        </thead>

        <tbody>
          {candidates.map((candidate) => (
            <tr
              key={candidate._id}
              onClick={() => onSelect(candidate)}
              className="cursor-pointer border-b border-slate-800 transition hover:bg-slate-800/50"
            >
              <td className="px-6 py-5">
                <h3 className="font-semibold text-white">
                  {candidate.subject}
                </h3>
              </td>

              <td className="text-slate-300">
                {candidate.from}
              </td>

              <td className="max-w-md truncate text-slate-400">
                {candidate.body}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}