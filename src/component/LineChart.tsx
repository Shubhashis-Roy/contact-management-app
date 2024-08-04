import React from "react";
import { TEChart } from "tw-elements-react";

export default function LineChart({
  isLoading,
  dates,
  cases,
  deaths,
  recovered,
}): JSX.Element {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen flex-1">
        {isLoading ? (
          <div className="h-8/12 w-8/12 bg-gray-100 p-4  rounded-lg">
            <TEChart
              type="line"
              data={{
                labels: dates,
                datasets: [
                  {
                    label: "Cases",
                    data: cases,
                  },
                  {
                    label: "Deaths",
                    data: deaths,
                  },
                  {
                    label: "Recovered",
                    data: recovered,
                  },
                ],
              }}
            />
          </div>
        ) : (
          <div
            className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        )}
      </div>
    </>
  );
}
