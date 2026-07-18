"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <Sparkles size={16} />
              AI Hiring Copilot for Email-first Teams
            </div>

            <h1 className="text-5xl font-bold leading-tight text-white lg:text-7xl">
              Your Hiring Inbox.
              <br />
              <span className="text-blue-500">Powered by AI.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              HirePilot transforms your hiring inbox into an intelligent
              recruitment workspace. Analyze resumes, rank candidates,
              compare skills with job descriptions, and hire faster without
              switching between multiple tools.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-xl bg-blue-600 px-7 hover:bg-blue-700"
              >
                <Mail className="mr-2 h-5 w-5" />
                Connect Mailbox
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-slate-700 bg-slate-900 text-white hover:bg-slate-800"
              >
                View Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="mt-12 flex gap-10">
              <div>
                <h2 className="text-3xl font-bold text-white">300+</h2>
                <p className="text-slate-500">Applications Processed</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">90%</h2>
                <p className="text-slate-500">Screening Time Saved</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">100%</h2>
                <p className="text-slate-500">Human Controlled</p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Backend Developer
                  </h3>
                  <p className="text-sm text-slate-400">
                    248 Applications
                  </p>
                </div>

                <div className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                  AI Active
                </div>
              </div>

              {/* Candidate */}
              <div className="space-y-4">
                <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white">
                        Sneha Reddy
                      </h4>

                      <p className="text-sm text-slate-400">
                        MERN Stack Developer
                      </p>
                    </div>

                    <span className="rounded-full bg-blue-600 px-3 py-1 text-sm text-white">
                      94%
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
                      React
                    </span>

                    <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
                      Node
                    </span>

                    <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
                      MongoDB
                    </span>

                    <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-400">
                      Missing AWS
                    </span>
                  </div>

                  <div className="mt-5 rounded-xl bg-slate-950 p-4">
                    <p className="text-sm text-slate-300">
                      <span className="font-semibold text-blue-400">
                        AI Recruiter Brief:
                      </span>{" "}
                      Strong MERN developer with deployed projects and active
                      GitHub. Recommended for Technical Interview.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
