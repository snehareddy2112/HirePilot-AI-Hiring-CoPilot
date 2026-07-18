"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-5xl space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Settings
          </h1>

          <p className="mt-2 text-slate-400">
            Manage your HirePilot account
            and mailbox preferences.
          </p>
        </div>

        {/* Profile */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold text-white">
            Profile
          </h2>

          <div className="mt-6 space-y-4">
            <Setting
              label="Name"
              value="Sneha Reddy"
            />

            <Setting
              label="Email"
              value="sneha@gmail.com"
            />
          </div>
        </div>

        {/* Mailbox */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold text-white">
            Mailbox
          </h2>

          <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-950 p-5">
            <div>
              <h3 className="font-semibold text-white">
                Gmail Connection
              </h3>

              <p className="mt-1 text-slate-400">
                Your mailbox is currently
                connected.
              </p>
            </div>

            <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-400">
              Connected
            </span>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="rounded-xl border border-slate-700 px-5 py-3 text-white hover:bg-slate-800">
              Reconnect Mailbox
            </button>

            <button className="rounded-xl border border-red-500/30 px-5 py-3 text-red-400 hover:bg-red-500/10">
              Disconnect
            </button>
          </div>
        </div>

        {/* Security */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold text-white">
            Security
          </h2>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between rounded-2xl bg-slate-950 p-5">
              <span className="text-white">
                Google OAuth
              </span>

              <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
                Enabled
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-slate-950 p-5">
              <span className="text-white">
                Secure JWT Sessions
              </span>

              <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
                Active
              </span>
            </div>
          </div>
        </div>

        {/* Danger Zone */}

        <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
          <h2 className="text-2xl font-bold text-red-400">
            Danger Zone
          </h2>

          <p className="mt-2 text-slate-400">
            These actions cannot be
            undone.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl border border-red-500/30 px-5 py-3 text-red-400 hover:bg-red-500/10">
              Clear Mailbox Data
            </button>

            <button className="rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-700">
              Logout
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function Setting({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="mb-2 text-sm text-slate-400">
        {label}
      </p>

      <div className="rounded-2xl bg-slate-950 p-4 text-white">
        {value}
      </div>
    </div>
  );
}