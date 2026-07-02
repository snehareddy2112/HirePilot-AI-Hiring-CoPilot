"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Mail,
  FileSearch,
  GitBranch,
  Send,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Unified Hiring Inbox",
    description:
      "Manage hiring@company.com, careers@company.com and multiple mailboxes from one dashboard.",
  },
  {
    icon: FileSearch,
    title: "Resume Parsing",
    description:
      "Automatically extract candidate information from PDF and DOCX resumes.",
  },
  {
    icon: BrainCircuit,
    title: "JD Matching",
    description:
      "Compare every candidate against your job description with AI-powered insights.",
  },
  {
    icon: GitBranch,
    title: "Developer Profile",
    description:
      "View GitHub, Portfolio, LinkedIn and coding profiles without opening multiple tabs.",
  },
  {
    icon: Send,
    title: "Bulk Hiring Actions",
    description:
      "Shortlist, reject or send interview and assessment emails in a few clicks.",
  },
  {
    icon: BarChart3,
    title: "Hiring Analytics",
    description:
      "Track applications, shortlisted candidates and hiring progress in real time.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Everything recruiters need.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            No spreadsheets. No switching tabs. No manually reviewing every
            application.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/15 transition group-hover:bg-blue-600">
                <feature.icon className="h-7 w-7 text-blue-500 group-hover:text-white" />
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}