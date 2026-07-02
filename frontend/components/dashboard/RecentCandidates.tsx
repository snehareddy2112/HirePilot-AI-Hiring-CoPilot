"use client";

const candidates = [
  {
    name: "Sneha Reddy",
    role: "Backend Developer",
    score: 94,
    status: "Recommended",
  },
  {
    name: "Rahul Sharma",
    role: "React Developer",
    score: 91,
    status: "Shortlisted",
  },
  {
    name: "Priya Patel",
    role: "Full Stack Developer",
    score: 87,
    status: "Review",
  },
  {
    name: "Arjun Kumar",
    role: "Node.js Developer",
    score: 84,
    status: "Review",
  },
];

export default function RecentCandidates() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 p-6">
        <h2 className="text-xl font-semibold text-white">
          Top Candidates
        </h2>
      </div>

      <div className="divide-y divide-slate-800">
        {candidates.map((candidate) => (
          <div
            key={candidate.name}
            className="flex items-center justify-between p-6 hover:bg-slate-800/40"
          >
            <div>
              <h3 className="font-semibold text-white">
                {candidate.name}
              </h3>

              <p className="text-sm text-slate-400">
                {candidate.role}
              </p>
            </div>

            <div className="text-right">
              <div className="rounded-full bg-blue-600 px-3 py-1 text-sm text-white">
                {candidate.score}%
              </div>

              <p className="mt-2 text-xs text-slate-400">
                {candidate.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}