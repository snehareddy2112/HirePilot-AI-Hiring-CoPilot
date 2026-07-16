
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function OnboardingPage() {
  const router = useRouter();

  const [companyName, setCompanyName] =
    useState("");

  const [mailbox, setMailbox] =
    useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/auth/onboarding",
      {
        companyName,
        mailbox,
      },
      {
        withCredentials: true,
      }
    );

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="text-3xl font-bold">
          Welcome to HirePilot
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >
          <input
            value={companyName}
            onChange={(e) =>
              setCompanyName(
                e.target.value
              )
            }
            className="w-full rounded-lg bg-slate-800 p-3"
            placeholder="Company Name"
          />

          <input
            value={mailbox}
            onChange={(e) =>
              setMailbox(
                e.target.value
              )
            }
            className="w-full rounded-lg bg-slate-800 p-3"
            placeholder="hiring@company.com"
          />

          <button className="w-full rounded-lg bg-blue-600 py-3">
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}