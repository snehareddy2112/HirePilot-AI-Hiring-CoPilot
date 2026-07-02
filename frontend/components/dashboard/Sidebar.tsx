"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Inbox,
  BriefcaseBusiness,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

const links = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Inbox",
    href: "/dashboard/inbox",
    icon: Inbox,
  },
  {
    title: "Jobs",
    href: "/dashboard/jobs",
    icon: BriefcaseBusiness,
  },
  {
    title: "Candidates",
    href: "/dashboard/candidates",
    icon: Users,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 p-6">
        <h1 className="text-2xl font-bold text-white">
          HirePilot
        </h1>

        <p className="text-sm text-slate-400">
          AI Hiring Copilot
        </p>
      </div>

      <nav className="space-y-2 p-4">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-4 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <Icon size={20} />

              {link.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}