export interface Candidate {
  id: string;
  name: string;
  email: string;
  role: string;
  source: "Gmail" | "Referral" | "LinkedIn";
  match: number;
  status: "New" | "Review" | "Shortlisted" | "Rejected";
  appliedDate: string;
}