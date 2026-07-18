import type { ReactNode } from 'react';

export interface Candidate {
  score: ReactNode;
  skills: string[];
  missingSkills: string[];
  recommendation: ReactNode;
  subject: ReactNode;
  from: ReactNode;
  aiSummary: ReactNode;
  body: ReactNode;
  id: string;
  _id?: string;
  name: string;
  email: string;
  role: string;
  source: "Gmail" | "Referral" | "LinkedIn";
  match: number;
  status: "New" | "Review" | "Shortlisted" | "Rejected";
  appliedDate: string;
}