"use client";

import {
  BriefcaseBusiness,
  Inbox,
 Users,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Open Jobs",
    value: "8",
    icon: BriefcaseBusiness,
    color: "bg-blue-600",
  },
  {
    title: "Applications",
    value: "248",
    icon: Inbox,
    color: "bg-violet-600",
  },
  {
    title: "Shortlisted",
    value: "42",
    icon: Users,
    color: "bg-green-600",
  },
  {
    title: "Hiring Rate",
    value: "18%",
    icon: TrendingUp,
    color: "bg-orange-600",
  },
];

export default function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-4xl font-bold text-white">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.color}`}
              >
                <Icon className="text-white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}