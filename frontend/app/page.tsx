import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import TrustStrip from "@/components/landing/TrustStrip";
import Problem from "@/components/landing/Problem";
import Workflow from "@/components/landing/Workflow";
import Features from "@/components/landing/Features";
import DashboardPreview from "@/components/landing/DashboardPreview";
import RecruiterBrief from "@/components/landing/RecruiterBrief";
import Security from "@/components/landing/Security";
import FAQ from "@/components/landing/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Problem />
      <Workflow />
      <Features />
      <DashboardPreview />
      <RecruiterBrief />
      <Security />
      <FAQ />
      
    </main>
  );
}