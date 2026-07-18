"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import JobsTable from "@/components/jobs/JobsTable";
import type { Job } from "@/types/jobs";

export default function JobsPage() {
  const router = useRouter();

  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(
          //"http://localhost:5000/api/jobs"
           `${process.env.NEXT_PUBLIC_API_URL}/api/jobs`,
        );

        setJobs((res.data.data ?? []) as Job[]);
      } catch (error) {
        console.error(
          "Failed to fetch jobs:",
          error
        );
      }
    };

    fetchJobs();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Jobs
            </h1>

            <p className="mt-2 text-slate-400">
              Manage all active hiring
              positions.
            </p>
          </div>

          <button
            onClick={() =>
              router.push(
                "/dashboard/jobs/new"
              )
            }
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            + Create Job
          </button>
        </div>

        {jobs.length === 0 ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-16 text-center">
            <h2 className="text-3xl font-bold text-white">
              No Jobs Yet
            </h2>

            <p className="mt-4 text-slate-400">
              Create your first job posting
              and start receiving candidate
              applications.
            </p>

            <button
              onClick={() =>
                router.push(
                  "/dashboard/jobs/new"
                )
              }
              className="mt-8 rounded-xl bg-blue-600 px-6 py-4 font-medium text-white hover:bg-blue-700"
            >
              Create Your First Job
            </button>
          </div>
        ) : (
          <JobsTable jobs={jobs} />
        )}
      </div>
    </DashboardLayout>
  );
}