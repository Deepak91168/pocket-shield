import React from "react";
import "./Chart.css";
import { ChartBar } from "./ChartBar";
export const Chart = (props) => {
    console.log(props.dataPoints);
    const valArray = props.dataPoints.map((dataPoint => dataPoint.value));
    const maxi = Math.max(...valArray)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxi}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
