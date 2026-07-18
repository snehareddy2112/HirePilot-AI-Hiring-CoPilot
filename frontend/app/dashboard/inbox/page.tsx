"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import InboxFilters from "@/components/inbox/InboxFilters";
import InboxTable from "@/components/inbox/InboxTable";
import CandidateDrawer from "@/components/inbox/CandidateDrawer";
import Pagination from "@/components/common/Pagination";
import type { Candidate } from "@/types/candidate";

export default function InboxPage() {
  const [page, setPage] = useState(1);

  const [candidates, setCandidates] =
    useState<Candidate[]>([]);

  const [
    selectedCandidate,
    setSelectedCandidate,
  ] = useState<Candidate | null>(null);

  async function fetchEmails() {
    try {
      const response =
        await axios.get(
          //"http://localhost:5000/api/emails",
           `${process.env.NEXT_PUBLIC_API_URL}/api/emails`,
          {
            withCredentials: true,
          }
        );

      setCandidates(
        response.data.data
      );
    } catch (error) {
      console.error(
        "Failed to fetch emails:",
        error
      );
    }
  }

  async function syncEmails() {
    try {
      await axios.get(
        //"http://localhost:5000/api/emails/sync",
         `${process.env.NEXT_PUBLIC_API_URL}/api/emails/sync`,
        {
          withCredentials: true,
        }
      );

      await fetchEmails();
    } catch (error) {
      console.error(
        "Failed to sync emails:",
        error
      );
    }
  }

  useEffect(() => {
    let isMounted = true;

    const loadEmails = async () => {
      try {
        const response = await axios.get(
          //"http://localhost:5000/api/emails",
           `${process.env.NEXT_PUBLIC_API_URL}/api/emails`,
          {
            withCredentials: true,
          }
        );

        if (isMounted) {
          setCandidates(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch emails:", error);
      }
    };

    void loadEmails();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Applications
            </h1>

            <p className="mt-2 text-slate-400">
              Manage candidates received in
              your hiring inbox.
            </p>
          </div>

          <button
            onClick={syncEmails}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Sync Emails
          </button>
        </div>

        <InboxFilters />

        <InboxTable
          candidates={candidates}
          onSelect={
            setSelectedCandidate
          }
        />

        <Pagination
          page={page}
          totalPages={Math.ceil(
            candidates.length / 10
          )}
          onPageChange={setPage}
        />

        <CandidateDrawer
          candidate={
            selectedCandidate
          }
          open={
            selectedCandidate !==
            null
          }
          onClose={() =>
            setSelectedCandidate(
              null
            )
          }
        />
      </div>
    </DashboardLayout>
  );
}