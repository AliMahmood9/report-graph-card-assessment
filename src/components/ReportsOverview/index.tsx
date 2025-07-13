import DateRangeBadge from "./DateRangeBadge";
import MetricSelector from "./MetricSelector";
import MetricCard from "./MetricCard";

interface ReportsOverviewProps {
  dateRange: string;
  selectedRangeValue: number;
  pastMonthValue: number;
}

export default function ReportsOverview({
  dateRange,
  selectedRangeValue,
  pastMonthValue,
}: ReportsOverviewProps) {
  return (
    <div className="flex flex-col gap-4">
      <DateRangeBadge range={dateRange} />
      <MetricSelector />

      <MetricCard
        title="Selected Range"
        value={selectedRangeValue.toLocaleString()}
        bgColor="bg-blue-800"
      />

      <MetricCard
        title="Past Month"
        value={pastMonthValue.toLocaleString()}
        bgColor="bg-blue-500"
        textColor="text-gray-700"
      />
    </div>
  );
}
