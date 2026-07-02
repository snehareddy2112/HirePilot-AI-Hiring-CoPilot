"use client";

import { Mail, ShieldCheck, BrainCircuit, SearchCheck, LockKeyhole, UserCheck } from "lucide-react";

const items = [
  {
    icon: Mail,
    text: "Gmail & Outlook",
  },
  {
    icon: BrainCircuit,
    text: "AI Resume Analysis",
  },
  {
    icon: SearchCheck,
    text: "JD Matching",
  },
  {
    icon: UserCheck,
    text: "Human Controlled",
  },
  {
    icon: LockKeyhole,
    text: "Secure OAuth",
  },
  {
    icon: ShieldCheck,
    text: "No Password Storage",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-slate-800 bg-slate-900/40">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 py-6">
        {items.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-center gap-3 text-slate-300 transition hover:text-white"
          >
            <Icon className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}