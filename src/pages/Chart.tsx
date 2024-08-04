import React, { useEffect, useState } from "react";
import LineChart from "../component/LineChart.tsx";

export default function Chart(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [dates, setDates] = useState([]);
  const [cases, setCases] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [recovered, setRecovered] = useState([]);

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

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
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
  }, []);

  console.log(dates, "hlo");

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
