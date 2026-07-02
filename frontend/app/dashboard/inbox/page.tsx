"use client";

import { useState } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import InboxFilters from "@/components/inbox/InboxFilters";
import InboxTable from "@/components/inbox/InboxTable";
import CandidateDrawer from "@/components/inbox/CandidateDrawer";
import Pagination from "@/components/common/Pagination";

import { mockCandidates } from "@/constants/mockCandidates";
import { Candidate } from "@/types/candidate";

export default function InboxPage() {
  const [page, setPage] = useState(1);

  const [selectedCandidate, setSelectedCandidate] =
    useState<Candidate | null>(null);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Applications
          </h1>

          <p className="mt-2 text-slate-400">
            Manage candidates received in your hiring inbox.
          </p>
        </div>

        <InboxFilters />

        <InboxTable
          candidates={mockCandidates}
          onSelect={setSelectedCandidate}
        />

        <Pagination
          page={page}
          totalPages={12}
          onPageChange={setPage}
        />

        <CandidateDrawer
          candidate={selectedCandidate}
          open={selectedCandidate !== null}
          onClose={() => setSelectedCandidate(null)}
        />
      </div>
    </DashboardLayout>
  );
}