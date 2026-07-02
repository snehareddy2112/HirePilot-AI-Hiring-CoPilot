"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  GitBranch,
  Globe,
  FileText,
} from "lucide-react";

export default function RecruiterBrief() {
  return (
    <section className="bg-slate-950 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            AI Recruiter Brief
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Let AI summarize every applicant.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            No more opening resumes, GitHub, LinkedIn and portfolios one by
            one. HirePilot prepares a recruiter-friendly summary before you
            even click a candidate.
          </p>

          <div className="mt-10 space-y-5">
            {[
              "Resume Summary",
              "Matching Skills",
              "Missing Skills",
              "GitHub & Portfolio Links",
              "Projects & Experience",
              "Recommendation",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-slate-300"
              >
                <CheckCircle2 className="text-green-400" size={20} />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <Sparkles className="text-blue-500" />
            <h3 className="text-xl font-semibold text-white">
              Recruiter Brief
            </h3>
          </div>

          <div className="space-y-5">
            <div className="rounded-xl bg-slate-950 p-5">
              <p className="text-slate-300">
                <span className="font-semibold text-blue-400">
                  Summary:
                </span>{" "}
                Strong MERN Stack developer with deployed full-stack
                applications and active open-source contributions.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 p-5">
              <h4 className="mb-3 font-semibold text-white">
                Matching Skills
              </h4>

              <div className="flex flex-wrap gap-2">
                {["React", "Node", "MongoDB", "Express", "JWT"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-slate-950 p-5">
              <h4 className="mb-3 font-semibold text-white">
                Missing Skills
              </h4>

              <div className="flex flex-wrap gap-2">
                {["AWS", "Redis"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-slate-950 p-4 text-center">
                <GitBranch className="mx-auto mb-2 text-blue-500" />
                <p className="text-xs text-slate-400">Github</p>
              </div>

              <div className="rounded-xl bg-slate-950 p-4 text-center">
                <Globe className="mx-auto mb-2 text-blue-500" />
                <p className="text-xs text-slate-400">Portfolio</p>
              </div>

              <div className="rounded-xl bg-slate-950 p-4 text-center">
                <FileText className="mx-auto mb-2 text-blue-500" />
                <p className="text-xs text-slate-400">Resume</p>
              </div>
            </div>

            <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-5">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-400" />
                <p className="font-medium text-white">
                  Recommended for Technical Interview
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-5">
              <div className="flex items-center gap-3">
                <XCircle className="text-red-400" />
                <p className="text-slate-300">
                  Missing AWS experience. Consider assessing cloud knowledge.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}