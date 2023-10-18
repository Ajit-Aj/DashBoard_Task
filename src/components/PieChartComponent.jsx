import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import "./PieChartComponent.css";
const data = [
  { name: "New Customers", value: 370 },
  { name: "Returning Customers", value: 200 },
];

const COLORS = ["hsl(265, 79%, 39%)", "#c52798"];

const PieChartComponent = () => {
  const renderCustomLabel = ({ cx, cy, midAngle }) => {
    const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);
    const percentage = Math.round((data[0].value / totalValue) * 100);
    const radius = 0;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <>
        <span className="customers">Customers</span><br></br>
        <span className="customers-buy">Customers that buy products</span>
        <text x={x} y={y} textAnchor="middle" className="Text">
          Total New Customers
          <tspan x={x} dy="1.2em" fontSize="20" fill="black">
            {`${percentage}%`}
          </tspan>
        </text>
      </>
    );
  };

  return (
    <div className="Pie_chart">
      <span className="customers">Customers</span>
      <br></br>
      <span className="customers-buy">Customers that buy products</span>
      <PieChart width={500} height={300}>
        <Pie
          data={data}
          cx={200}
          cy={175}
          innerRadius={60}
          outerRadius={120}
          paddingAngle={5}
          dataKey="value"
          label={renderCustomLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value} customers`} />
        {/* <Legend /> */}
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
