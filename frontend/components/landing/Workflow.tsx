"use client";

import { motion } from "framer-motion";
import {
  Mail,
  BrainCircuit,
  FileSearch,
  Trophy,
  Send,
} from "lucide-react";

const steps = [
  {
    icon: Mail,
    title: "Connect Inbox",
    description: "Securely connect hiring@company.com or careers@company.com using OAuth.",
  },
  {
    icon: BrainCircuit,
    title: "AI Reads Applications",
    description: "HirePilot extracts resumes, skills, projects and contact details automatically.",
  },
  {
    icon: FileSearch,
    title: "Match with JD",
    description: "Compare every applicant against your job description and identify missing skills.",
  },
  {
    icon: Trophy,
    title: "Rank Candidates",
    description: "View the strongest applicants first with AI-generated recruiter briefs.",
  },
  {
    icon: Send,
    title: "Shortlist & Send",
    description: "Send interviews, assessments or rejection emails in just a few clicks.",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="bg-slate-900 py-28 border-y border-slate-800"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            Workflow
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            From Inbox to Hire.
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-8">
            HirePilot automates repetitive hiring tasks while keeping every
            decision in your hands.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500/40 hover:-translate-y-2"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/15">
                <step.icon className="h-7 w-7 text-blue-500" />
              </div>

              <h3 className="text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {step.description}
              </p>

              <div className="mt-8 text-4xl font-bold text-slate-800">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}