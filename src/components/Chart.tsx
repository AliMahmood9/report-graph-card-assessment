import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = {
  selectedRange: "#1e3a8a",
  pastMonth: "#60a5fa",
};

export default function LineChartCard({
  data,
}: {
  data: { date: string; selectedRange: number; pastMonth: number }[];
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

          <XAxis
            dataKey="date"
            stroke="#6b7280"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            stroke="#6b7280"
            domain={[0, 2000]}
            ticks={[0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000]}
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload || !payload.length) return null;
              return (
                <div className="bg-white shadow-md rounded-md p-3 border text-sm">
                  <p className="text-gray-500 font-medium">Page Visit</p>
                  <p className="text-gray-800">{label}</p>
                  {payload.map((item) => (
                    <p key={item.dataKey} className="text-sm text-gray-700">
                      <span
                        className="inline-block w-2 h-2 rounded-full mr-2"
                        style={{ backgroundColor: item.color }}
                      />
                      {item.name}:{" "}
                      <span className="font-semibold text-gray-900">
                        {item.value}
                      </span>
                    </p>
                  ))}
                </div>
              );
            }}
          />

          <Legend verticalAlign="top" height={36} />

          <Line
            type="monotone"
            dataKey="selectedRange"
            name="Selected Range"
            stroke={COLORS.selectedRange}
            strokeWidth={2}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="pastMonth"
            name="Past Month"
            stroke={COLORS.pastMonth}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
