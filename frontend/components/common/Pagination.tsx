"use client";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="mt-6 flex items-center justify-between">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        Previous
      </button>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            className={`h-10 w-10 rounded-lg ${
              page === i + 1
                ? "bg-blue-600 text-white"
                : "bg-slate-900 text-slate-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}