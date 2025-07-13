// src/components/Header.tsx
import { Button } from "@/components/ui/button";
import SearchInput from "@/components/SearchInput";

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Gallery Curation</h1>
        <p className="text-sm text-gray-500">
          Review and manage staged galleries before they go live
        </p>
      </div>

      <div className="flex flex-col gap-2 sm:items-end sm:justify-between">
        <Button
          variant="destructive"
          className="rounded-full px-4 py-2 text-white bg-red-500 hover:bg-red-600 text-sm w-full sm:w-[280px]"
        >
          Edit
        </Button>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
          <span className="text-sm text-gray-600">
            View As: <span className="font-medium">List</span>
          </span>
          <SearchInput placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}
