import React, { useEffect, useRef, useState, Text } from "react";
import { BarChart, Bar, XAxis } from "recharts";
import "./ChartComponent.css";

const data = [
  { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 300, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 200, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 780, pv: 3908, amt: 200 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "June", uv: 390, pv: 3800, amt: 2500 },
  { name: "July", uv: 2090, pv: 3800, amt: 2500 },
  { name: "Aug", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Sep", uv: 1580, pv: 3800, amt: 2500 },
  { name: "Oct", uv: 1210, pv: 3800, amt: 2500 },
  { name: "Nov", uv: 1010, pv: 3800, amt: 2500 },
  { name: "Dec", uv: 1890, pv: 3800, amt: 2500 },
];

const ChartComponent = () => {
  const chartRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (chartRef.current) {
        const parentWidth = chartRef.current.offsetWidth;
        // Adjust the chart width based on the parent container width
        setChartWidth(parentWidth);
      }
    };

    // Update dimensions on mount and window resize
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <>
      <div className="Bar-chart" ref={chartRef}>
        <span className="overview-text">Overview</span>
        <br></br>
        <span className="EarningsText">Monthly Earnings </span>
        <BarChart width={chartWidth} height={240} data={data}>
          <XAxis dataKey="name" stroke="black" />
          <Bar dataKey="uv" fill="#401c9b" barSize={30} />
        </BarChart>
      </div>
    </>
  );
};

export default ChartComponent;
