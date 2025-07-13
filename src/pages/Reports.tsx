import LineChartCard from "@/components/Chart";
import ReportsOverview from "@/components/ReportsOverview";
import { useOverviewData } from "@/hooks/useOverviewData";

export default function OverviewPage() {
  const { data } = useOverviewData();

  const latest = data?.[data.length - 1];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Overview
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 w-full">
          {latest && (
            <ReportsOverview
              dateRange="June 10, 2025 - July 20, 2025"
              selectedRangeValue={latest.selectedRange}
              pastMonthValue={latest.pastMonth}
            />
          )}
        </div>

        <div className="lg:w-2/3 w-full">
          <LineChartCard data={data} />
        </div>
      </div>
    </div>
  );
}
