export interface Job {
  id?: string;
  _id?: string;
  title: string;
  department?: string;
  experience?: string;
  location?: string;
  type?: "Full Time" | "Internship" | "Contract";
  applications?: number;
  status?: "Open" | "Closed";
}