"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ApexCharts for client-side rendering
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const YearGrowthCard: React.FC = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Chart Configuration without tooltip
      setChartData({
        chart: {
          type: "area",
          height: 350,
          toolbar: { show: false },
        },
        series: [
          {
            name: "Yearly Growth",
            data: [0, 161, -18, 8, 42],
          },
        ],
        xaxis: {
          categories: ["2020", "2021", "2022", "2023", "2024"],
          labels: { style: { colors: "#9ca3af", fontSize: "20px" } },
        },
        yaxis: {
          labels: { style: { colors: "#9ca3af", fontSize: "18px" } },
        },
        fill: {
          gradient: {
            shadeIntensity: 1,
            opacity: 1,
            stops: [0, 100],
          },
        },
        stroke: { curve: "smooth", width: 2 },
        tooltip: {
          enabled: false, // Disable tooltips
        },
        colors: ["#2563eb"], // Primary blue color
      });
    }
  }, []);

  return (
    <div className="max-w-7xl py-20 mx-auto px-4 md:px-8 lg:px-10 bg-[#09090B] ">
      {/* Header */}
      <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white max-w-2xl leading-[110%]">
        Year On Year <span className="text-teal-400">Growth</span>
      </h2>
      <p className="text-white text-xl font-semibold md:text-base my-4 max-w-lg">
        It was just an Inception with our Vision & offer small businesses in
        tough time of Covid Pandemic.
      </p>

      {/* Year Data */}
      <div className="grid grid-cols-5 gap-4 text-center mb-6">
        {/* 2020 */}
        <div className="p-4 bg-orange-300 text-orange-900 rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-lg font-bold">2020</h3>
          <p className="text-sm">Inception Year</p>
        </div>
        {/* 2021 */}
        <div className="p-4 bg-green-300 text-green-900 rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-lg font-bold">2021</h3>
          <p className="text-sm">161% Growth</p>
        </div>
        {/* 2022 */}
        <div className="p-4 bg-red-300 text-red-900 rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-lg font-bold">2022</h3>
          <p className="text-sm">-18% Dip</p>
        </div>
        {/* 2023 */}
        <div className="p-4 bg-blue-200 text-blue-700 rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-lg font-bold">2023</h3>
          <p className="text-sm">8% Growth</p>
        </div>
        {/* 2024 */}
        <div className="p-4 bg-teal-300 text-teal-700 rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-lg font-bold">2024</h3>
          <p className="text-sm">42% Anticipated</p>
        </div>
      </div>

      {/* Chart */}
      <div>
        {chartData && (
          <Chart
            options={chartData}
            series={chartData.series}
            type="area"
            height={350}
          />
        )}
      </div>
    </div>
  );
};

export default YearGrowthCard;
