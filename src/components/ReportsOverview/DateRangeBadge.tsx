import { Funnel } from "lucide-react";

export default function DateRangeBadge({ range }: { range: string }) {
  return (
    <div className="flex items-center gap-2 bg-[#f9f9f9] p-4 rounded-xl border border-gray-200 shadow-sm w-90">
      <Funnel className="w-5 h-5 text-purple-950" />
      <span className="text-sm font-medium text-white bg-purple-950 px-3 py-1 rounded-full">
        {range}
      </span>
    </div>
  );
}
