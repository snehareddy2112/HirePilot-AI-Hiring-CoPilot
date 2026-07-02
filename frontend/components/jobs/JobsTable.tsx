"use client";

import { mockJobs } from "@/constants/mockJobs";

export default function JobsTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <table className="w-full">
        <thead className="border-b border-slate-800 bg-slate-950">
          <tr>
            <th className="px-6 py-4 text-left text-slate-400">Job</th>
            <th className="text-left text-slate-400">Department</th>
            <th className="text-left text-slate-400">Experience</th>
            <th className="text-left text-slate-400">Applications</th>
            <th className="text-left text-slate-400">Status</th>
          </tr>
        </thead>

        <tbody>
          {mockJobs.map((job) => (
            <tr
              key={job.id}
              className="cursor-pointer border-b border-slate-800 hover:bg-slate-800/40"
            >
              <td className="px-6 py-5">
                <div>
                  <h3 className="font-semibold text-white">
                    {job.title}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {job.location}
                  </p>
                </div>
              </td>

              <td className="text-slate-300">
                {job.department}
              </td>

              <td className="text-slate-300">
                {job.experience}
              </td>

              <td>
                <span className="rounded-full bg-blue-600 px-3 py-1 text-white">
                  {job.applications}
                </span>
              </td>

              <td>
                <span
                  className={`rounded-full px-3 py-1 text-sm ${
                    job.status === "Open"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {job.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}