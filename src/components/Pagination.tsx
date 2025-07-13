import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center pt-6">
      <ul className="flex items-center gap-2 text-sm list-none">
        <li>
          <button
            className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 text-gray-500 disabled:opacity-50"
            aria-label="Previous Page"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={16} />
          </button>
        </li>

        {pages.map((num) => (
          <li key={num}>
            <button
              className={`px-3 py-1 rounded-full transition ${
                num === currentPage
                  ? "bg-blue-100 text-blue-800 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => onPageChange(num)}
            >
              {num}
            </button>
          </li>
        ))}

        <li>
          <button
            className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 text-gray-500 disabled:opacity-50"
            aria-label="Next Page"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={16} />
          </button>
        </li>
      </ul>
    </div>
  );
}
