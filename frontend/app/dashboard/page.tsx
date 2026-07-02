import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCards from "@/components/dashboard/StatsCards";
import RecentCandidates from "@/components/dashboard/RecentCandidates";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-400">
            Welcome back! Here's today's hiring overview.
          </p>
        </div>

        <StatsCards />

        <RecentCandidates />
      </div>
    </DashboardLayout>
  );
}