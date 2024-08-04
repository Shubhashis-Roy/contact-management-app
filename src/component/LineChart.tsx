import React from "react";
import { TEChart } from "tw-elements-react";

export default function LineChart(): JSX.Element {
  return (
    <div className="h-7/12 w-7/12 bg-red-500  ">
      <TEChart
        type="line"
        data={{
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          datasets: [
            {
              label: "Traffic 1",
              data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
            },
            {
              label: "Traffic 2",
              data: [1000, 2000, 3000, 7000],
            },
          ],
        }}
      />
    </div>
  );
}
