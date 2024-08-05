import React, { useEffect, useState } from "react";
import LineChart from "../component/LineChart.tsx";

export default function Chart(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [dates, setDates] = useState<string[]>([]);
  const [cases, setCases] = useState<number[]>([]);
  const [deaths, setDeaths] = useState<number[]>([]);
  const [recovered, setRecovered] = useState<number[]>([]);

  interface ChartData {
    dates: string[];
    cases: number[];
    deaths: number[];
    recovered: number[];
  }

  function processChartData(data: any): ChartData {
    const dates: string[] = [];
    const cases: number[] = [];
    const deaths: number[] = [];
    const recovered: number[] = [];

    for (const date in data.cases) {
      dates.push(date);
      cases.push(data.cases[date]);
      deaths.push(data.deaths[date]);
      recovered.push(data.recovered[date]);
    }

    return { dates, cases, deaths, recovered };
  }

  const apiUrl = process.env.REACT_APP_CHART_API;

  useEffect(() => {
    const getData = async () => {
      let response;
      if (apiUrl) {
        response = await fetch(apiUrl);
      }
      const data = await response.json();

      if (data) {
        setIsLoading(true);

        setDates(processChartData(data).dates);
        setCases(processChartData(data).cases);
        setDeaths(processChartData(data).deaths);
        setRecovered(processChartData(data).recovered);
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LineChart
      isLoading={isLoading}
      dates={dates}
      cases={cases}
      deaths={deaths}
      recovered={recovered}
    />
  );
}
