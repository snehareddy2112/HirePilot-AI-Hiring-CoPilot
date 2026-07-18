"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition hover:opacity-90"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg">
            H
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              HirePilot
            </h1>

            <p className="text-xs text-slate-400">
              AI Hiring Copilot
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <Link
            href="#workflow"
            className="transition hover:text-white"
          >
            Workflow
          </Link>

          <Link
            href="#features"
            className="transition hover:text-white"
          >
            Features
          </Link>

          <Link
            href="#security"
            className="transition hover:text-white"
          >
            Security
          </Link>

          <Link
            href="#faq"
            className="transition hover:text-white"
          >
            FAQ
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="hidden text-slate-300 hover:bg-slate-900 hover:text-white md:flex"
            onClick={() =>
              router.push("/login")
            }
          >
            Login
          </Button>

          <Button
            className="rounded-xl bg-blue-600 px-5 hover:bg-blue-700"
            onClick={() =>
              router.push("/login")
            }
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
}