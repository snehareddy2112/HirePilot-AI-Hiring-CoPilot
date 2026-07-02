"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Briefcase,
  Search,
  Users,
  Mail,
  CheckCircle2,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="bg-slate-900 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            Dashboard
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Everything. One Dashboard.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Stop switching between Gmail, resumes, GitHub and spreadsheets.
            HirePilot gives recruiters one intelligent workspace.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 px-8 py-5">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Backend Developer Hiring
              </h3>
              <p className="text-sm text-slate-400">
                248 Applications Received
              </p>
            </div>

            <div className="flex gap-3">
              <div className="rounded-xl bg-slate-900 p-3">
                <Search className="h-5 w-5 text-slate-400" />
              </div>

              <div className="rounded-xl bg-slate-900 p-3">
                <Bell className="h-5 w-5 text-slate-400" />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3">
            {/* Left Sidebar */}
            <div className="border-r border-slate-800 bg-slate-900 p-6">
              <div className="space-y-4">

                <div className="rounded-xl bg-blue-600 p-4 text-white">
                  <Briefcase className="mb-3 h-6 w-6" />
                  <p className="text-sm">Open Positions</p>
                  <h3 className="mt-2 text-3xl font-bold">8</h3>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <Users className="mb-3 h-6 w-6 text-blue-500" />
                  <p className="text-sm text-slate-400">
                    Candidates
                  </p>
                  <h3 className="mt-2 text-3xl font-bold text-white">
                    248
                  </h3>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <Mail className="mb-3 h-6 w-6 text-blue-500" />
                  <p className="text-sm text-slate-400">
                    New Emails
                  </p>
                  <h3 className="mt-2 text-3xl font-bold text-white">
                    43
                  </h3>
                </div>

              </div>
            </div>

            {/* Candidate List */}
            <div className="border-r border-slate-800 p-6">

              {[
                ["Sneha Reddy", "94%"],
                ["Rahul Sharma", "91%"],
                ["Arjun Kumar", "88%"],
                ["Priya Patel", "84%"],
              ].map(([name, score]) => (
                <div
                  key={name}
                  className="mb-4 rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-blue-500/30"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white">
                        {name}
                      </h4>

                      <p className="text-sm text-slate-400">
                        MERN Developer
                      </p>
                    </div>

                    <div className="rounded-full bg-blue-600 px-3 py-1 text-white">
                      {score}
                    </div>
                  </div>
                </div>
              ))}

            </div>

            {/* AI Summary */}
            <div className="p-6">

              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">

                <div className="mb-4 flex items-center gap-3">
                  <CheckCircle2 className="text-green-400" />
                  <h3 className="text-lg font-semibold text-white">
                    AI Recruiter Brief
                  </h3>
                </div>

                <p className="leading-8 text-slate-300">
                  Sneha is the strongest match for this role.
                  Strong MERN experience, active GitHub,
                  deployed projects, excellent portfolio
                  and only missing AWS.
                </p>

              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}