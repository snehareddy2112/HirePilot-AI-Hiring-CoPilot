"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  LockKeyhole,
  KeyRound,
  Eye,
  Database,
  BadgeCheck,
} from "lucide-react";

const securityItems = [
  {
    icon: LockKeyhole,
    title: "OAuth Authentication",
    description:
      "Securely connect Gmail and Outlook using Google and Microsoft OAuth. No passwords are stored.",
  },
  {
    icon: KeyRound,
    title: "No Password Storage",
    description:
      "HirePilot never asks for or stores your mailbox credentials.",
  },
  {
    icon: Eye,
    title: "Human Controlled",
    description:
      "AI never rejects or shortlists candidates automatically. Recruiters stay in control.",
  },
  {
    icon: Database,
    title: "Encrypted Data",
    description:
      "Candidate information and access tokens are securely encrypted before storage.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent AI",
    description:
      "Every recommendation explains why a candidate was ranked or shortlisted.",
  },
  {
    icon: ShieldCheck,
    title: "Built for Trust",
    description:
      "Designed for companies hiring through careers@company.com, jobs@company.com and hiring@company.com.",
  },
];

export default function Security() {
  return (
    <section
      id="security"
      className="bg-slate-900 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300">
            Security
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Security comes first.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            HirePilot is built around secure authentication, transparent AI and
            recruiter-controlled hiring decisions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {securityItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-slate-800 bg-slate-950 p-8 transition hover:border-green-500/40 hover:-translate-y-2"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10">
                <item.icon className="h-7 w-7 text-green-400" />
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}