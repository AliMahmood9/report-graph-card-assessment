import { useEffect, useState } from "react";

export interface ChartDataPoint {
  date: string;
  selectedRange: number;
  pastMonth: number;
}

export function useOverviewData() {
  const [data, setData] = useState<ChartDataPoint[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const mockData: ChartDataPoint[] = [
        { date: "Jun 10", selectedRange: 200, pastMonth: 180 },
        { date: "Jun 11", selectedRange: 220, pastMonth: 190 },
        { date: "Jun 12", selectedRange: 250, pastMonth: 210 },
        { date: "Jun 13", selectedRange: 300, pastMonth: 270 },
        { date: "Jun 14", selectedRange: 280, pastMonth: 260 },
        { date: "Jun 15", selectedRange: 350, pastMonth: 310 },
        { date: "Jun 16", selectedRange: 420, pastMonth: 380 },
        { date: "Jun 17", selectedRange: 500, pastMonth: 460 },
        { date: "Jun 18", selectedRange: 600, pastMonth: 520 },
        { date: "Jun 19", selectedRange: 750, pastMonth: 600 },
        { date: "Jun 20", selectedRange: 800, pastMonth: 620 },
        { date: "Jun 21", selectedRange: 900, pastMonth: 700 },
        { date: "Jun 22", selectedRange: 1000, pastMonth: 820 },
        { date: "Jun 23", selectedRange: 1150, pastMonth: 950 },
        { date: "Jun 24", selectedRange: 1250, pastMonth: 1050 },
        { date: "Jun 25", selectedRange: 1300, pastMonth: 1100 },
        { date: "Jun 26", selectedRange: 1400, pastMonth: 1200 },
        { date: "Jun 27", selectedRange: 1600, pastMonth: 1350 },
        { date: "Jun 28", selectedRange: 1700, pastMonth: 1450 },
        { date: "Jun 29", selectedRange: 1850, pastMonth: 1550 },
        { date: "Jun 30", selectedRange: 1900, pastMonth: 1600 },
        { date: "Jul 01", selectedRange: 1750, pastMonth: 1500 },
        { date: "Jul 02", selectedRange: 1600, pastMonth: 1400 },
        { date: "Jul 03", selectedRange: 1500, pastMonth: 1300 },
        { date: "Jul 04", selectedRange: 1350, pastMonth: 1200 },
        { date: "Jul 05", selectedRange: 1200, pastMonth: 1100 },
        { date: "Jul 06", selectedRange: 1000, pastMonth: 950 },
        { date: "Jul 07", selectedRange: 850, pastMonth: 800 },
        { date: "Jul 08", selectedRange: 650, pastMonth: 600 },
        { date: "Jul 09", selectedRange: 500, pastMonth: 450 },
      ];

      setTimeout(() => setData(mockData), 500);
    };

    fetchData();
  }, []);

  return { data };
}
