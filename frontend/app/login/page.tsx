"use client";

import { Shield, Mail, Sparkles } from "lucide-react";

export default function LoginPage() {
  const handleLogin = () => {
    window.location.href =
      //"http://localhost:5000/api/auth/google";
       `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`;
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6">
        {/* Left Section */}

        <div className="flex-1 space-y-8">
          <div>
            <h1 className="text-6xl font-bold text-white">
              HirePilot
            </h1>

            <p className="mt-4 max-w-xl text-xl text-slate-400">
              AI-powered recruitment starts
              here.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">
              No Passwords.
              <br />
              No Forms.
            </h2>

            <p className="max-w-lg leading-8 text-slate-400">
              Sign in securely using your
              Google account and connect
              your hiring inbox in less
              than 30 seconds.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-300">
              <Shield className="text-blue-500" />

              <p>
                Enterprise-grade Google
                OAuth 2.0 Authentication
              </p>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <Mail className="text-blue-500" />

              <p>
                Gmail Read-Only Access
              </p>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <Sparkles className="text-blue-500" />

              <p>
                AI-Powered Candidate
                Analysis
              </p>
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Continue with Google
          </button>

          <p className="max-w-lg text-sm text-slate-500">
            HirePilot never stores your
            Google password. Authentication
            is securely handled by Google.
          </p>
        </div>

        {/* Right Section */}

        <div className="hidden flex-1 lg:block">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">
            <h2 className="text-3xl font-bold text-white">
              Why HirePilot?
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-white">
                  AI Candidate Scoring
                </h3>

                <p className="mt-2 text-slate-400">
                  Automatically evaluate
                  candidates and prioritize
                  top talent.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Gmail Integration
                </h3>

                <p className="mt-2 text-slate-400">
                  Connect your hiring inbox
                  and sync applications in
                  real time.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Resume Analysis
                </h3>

                <p className="mt-2 text-slate-400">
                  Extract skills, score
                  candidates, and identify
                  hiring signals instantly.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  AI Recommendations
                </h3>

                <p className="mt-2 text-slate-400">
                  Let AI recommend who to
                  shortlist and who to
                  reject.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-slate-950 p-6">
              <p className="text-lg italic text-slate-300">
                &quot;Recruit smarter, not
                harder.&quot;
              </p>

              <p className="mt-3 text-sm text-slate-500">
                Powered by AI • Google OAuth
                • MongoDB
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}