import DashboardLayout from "@/components/dashboard/DashboardLayout";
import JobsTable from "@/components/jobs/JobsTable";

export default function JobsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Jobs
            </h1>

            <p className="mt-2 text-slate-400">
              Manage all active hiring positions.
            </p>
          </div>

          <button className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
            + Create Job
          </button>
        </div>

        <JobsTable />
      </div>
    </DashboardLayout>
  );
}