import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string | number;
  bgColor: string;
  textColor?: string;
}

export default function MetricCard({
  title,
  value,
  bgColor,
  textColor = "text-white",
}: MetricCardProps) {
  return (
    <Card className="rounded-lg border border-gray-200 bg-[#f9fafb] shadow-sm w-90 overflow-hidden p-0">
      <CardHeader className={`${bgColor} py-2 px-3 rounded-t-lg`}>
        <CardTitle className={`text-lg text-center font-semibold ${textColor}`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="py-2 px-4">
        <p className="text-2xl font-bold text-left text-gray-800">{value}</p>
      </CardContent>
    </Card>
  );
}
