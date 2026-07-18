"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

interface Email {
  aiSummary?: string;
  score?: number;
  skills?: string[];
  subject: string;
}

export default function AnalyticsPage() {
  const [emails, setEmails] =
    useState<Email[]>([]);

  useEffect(() => {
    axios
      .get(
        //http://localhost:5000/api/emails"
         `${process.env.NEXT_PUBLIC_API_URL}/api/emails`
      )
      .then((res) =>
        setEmails(
          res.data.data
        )
      )
      .catch(console.error);
  }, []);

  const totalEmails =
    emails.length;

  const totalReports =
    emails.filter(
      (email) =>
        email.aiSummary
    ).length;

  const averageScore =
    emails.length
      ? Math.round(
          emails.reduce(
            (
              acc,
              email
            ) =>
              acc +
              (email.score ||
                0),
            0
          ) /
            emails.length
        )
      : 0;

  const timeSaved =
    Math.round(
      totalEmails * 4
    );

  const skills =
    emails.flatMap(
      (email) =>
        email.skills ||
        []
    );

  const topSkills =
    Array.from(
      new Set(skills)
    ).slice(0, 5);

  const roles =
    emails.map(
      (email) =>
        email.subject
    );

  const topRoles =
    Array.from(
      new Set(roles)
    ).slice(0, 5);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Analytics
          </h1>

          <p className="mt-2 text-slate-400">
            AI-powered hiring
            insights for your
            recruitment pipeline.
          </p>
        </div>

        {emails.length === 0 ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-16 text-center">
            <h2 className="text-3xl font-bold text-white">
              No Analytics Yet
            </h2>

            <p className="mt-4 text-slate-400">
              Connect your mailbox
              and sync candidate
              emails to generate
              insights.
            </p>
          </div>
        ) : (
          <>
            {/* Stats */}

            <div className="grid gap-6 md:grid-cols-4">
              <Card
                title="Emails Synced"
                value={
                  totalEmails
                }
              />

              <Card
                title="AI Reports"
                value={
                  totalReports
                }
              />

              <Card
                title="Avg Score"
                value={`${averageScore}%`}
              />

              <Card
                title="Minutes Saved"
                value={
                  timeSaved
                }
              />
            </div>

            {/* Top Skills */}

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h2 className="mb-6 text-2xl font-bold text-white">
                Top Skills
              </h2>

              <div className="flex flex-wrap gap-3">
                {topSkills.map(
                  (
                    skill
                  ) => (
                    <span
                      key={
                        skill
                      }
                      className="rounded-full bg-blue-600 px-4 py-2 text-white"
                    >
                      {
                        skill
                      }
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Top Roles */}

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h2 className="mb-6 text-2xl font-bold text-white">
                Most Applied
                Roles
              </h2>

              <div className="space-y-3">
                {topRoles.map(
                  (
                    role
                  ) => (
                    <div
                      key={
                        role
                      }
                      className="rounded-xl bg-slate-950 p-4 text-slate-300"
                    >
                      {role}
                    </div>
                  )
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value:
    | string
    | number;
}) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-slate-400">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-white">
        {value}
      </h2>
    </div>
  );
}