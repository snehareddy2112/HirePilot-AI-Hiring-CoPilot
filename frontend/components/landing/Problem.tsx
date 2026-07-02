"use client";

import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const oldWay = [
  "300+ resumes in Gmail",
  "Download every resume manually",
  "Open GitHub & Portfolio separately",
  "Compare skills with JD manually",
  "Maintain Excel sheets",
  "Reply to candidates one by one",
];

const hirePilotWay = [
  "Connect Gmail or Outlook",
  "AI extracts candidate details",
  "Automatic JD matching",
  "AI ranks top applicants",
  "One-click shortlist & reject",
  "Bulk email communication",
];

export default function Problem() {
  return (
    <section className="bg-slate-950 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            The Problem
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Hiring shouldn't feel like
            <span className="block text-blue-500">
              searching through an inbox.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Recruiters waste hours opening emails, downloading resumes,
            comparing skills, and maintaining spreadsheets. HirePilot
            automates the repetitive work while keeping every hiring decision
            under human control.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8"
          >
            <div className="mb-8 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-red-400" />
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Traditional Hiring
                </h3>
                <p className="text-slate-400">
                  Time consuming & repetitive
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {oldWay.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* HirePilot */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8"
          >
            <div className="mb-8 flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-green-400" />
              <div>
                <h3 className="text-2xl font-bold text-white">
                  HirePilot
                </h3>
                <p className="text-slate-400">
                  AI-assisted hiring workflow
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {hirePilotWay.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}