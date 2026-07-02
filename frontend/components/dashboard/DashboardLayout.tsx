"use client";

import Sidebar from "./Sidebar";

function Topbar() {
  return (
    <div className="border-b border-slate-800 px-6 py-4">
      {/* Topbar placeholder */}
    </div>
  );
}

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}