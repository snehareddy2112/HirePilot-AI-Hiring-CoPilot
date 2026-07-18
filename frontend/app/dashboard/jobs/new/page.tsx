"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function CreateJob() {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] =
    useState({
      title: "",
      department: "",
      location: "",
      experience: "",
      description: "",
    });

  const submit = async () => {
    try {
      setLoading(true);

      await axios.post(
        //"http://localhost:5000/api/jobs",
         `${process.env.NEXT_PUBLIC_API_URL}/api/jobs`,
        form
      );

      router.push(
        "/dashboard/jobs"
      );
    } catch (error) {
      console.error(
        "Failed to create job:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const inputStyles =
    "w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500";

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">
            Create Job
          </h1>

          <p className="mt-2 text-slate-400">
            Create a new hiring position and
            start receiving applications.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-2xl">
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="mb-2 block font-medium text-white">
                Job Title
              </label>

              <input
                placeholder="Backend Developer"
                className={
                  inputStyles
                }
                value={
                  form.title
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    title:
                      e.target
                        .value,
                  })
                }
              />
            </div>

            {/* Department */}
            <div>
              <label className="mb-2 block font-medium text-white">
                Department
              </label>

              <input
                placeholder="Engineering"
                className={
                  inputStyles
                }
                value={
                  form.department
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    department:
                      e.target
                        .value,
                  })
                }
              />
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block font-medium text-white">
                Location
              </label>

              <input
                placeholder="Hyderabad"
                className={
                  inputStyles
                }
                value={
                  form.location
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    location:
                      e.target
                        .value,
                  })
                }
              />
            </div>

            {/* Experience */}
            <div>
              <label className="mb-2 block font-medium text-white">
                Experience
              </label>

              <input
                placeholder="1-3 Years"
                className={
                  inputStyles
                }
                value={
                  form.experience
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    experience:
                      e.target
                        .value,
                  })
                }
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block font-medium text-white">
                Job Description
              </label>

              <textarea
                rows={8}
                placeholder="Write a detailed job description..."
                className={`${inputStyles} resize-none`}
                value={
                  form.description
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    description:
                      e.target
                        .value,
                  })
                }
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 pt-4">
              <button
                onClick={() =>
                  router.push(
                    "/dashboard/jobs"
                  )
                }
                className="rounded-xl border border-slate-700 px-6 py-3 text-white transition hover:bg-slate-800"
              >
                Cancel
              </button>

              <button
                onClick={submit}
                disabled={
                  loading
                }
                className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
              >
                {loading
                  ? "Creating..."
                  : "Create Job"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}