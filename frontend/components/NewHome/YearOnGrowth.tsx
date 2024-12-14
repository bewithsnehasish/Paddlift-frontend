"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Dynamically import ApexCharts for client-side rendering
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const YearGrowthCard: React.FC = () => {
  const [chartData, setChartData] = useState<any>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
          transition: { duration: 0 },
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
      className="max-w-7xl py-20 mx-auto px-4 md:px-8 lg:px-10 bg-[#09090B]"
    >
      {/* Header with Staggered Animation */}
      <motion.h2
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 },
          },
        }}
        className="text-5xl md:text-6xl font-bold mb-4 text-white max-w-2xl leading-[110%]"
      >
        Year On Year <span className="text-teal-400">Growth</span>
      </motion.h2>

      <motion.p
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.2 },
          },
        }}
        className="text-white text-xl font-semibold md:text-base my-4 max-w-lg"
      >
        It was just an Inception with our Vision & offer small businesses in
        tough time of Covid Pandemic.
      </motion.p>

      {/* Year Data with Staggered Animation */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.4,
            },
          },
        }}
        className="grid grid-cols-5 gap-4 text-center mb-6"
      >
        {/* 2020 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.4 },
            },
          }}
          className="p-4 bg-orange-300 text-orange-900 rounded-lg transition-transform transform hover:scale-105"
        >
          <h3 className="text-lg font-bold">2020</h3>
          <p className="text-sm">Inception Year</p>
        </motion.div>

        {/* 2021 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.4 },
            },
          }}
          className="p-4 bg-green-300 text-green-900 rounded-lg transition-transform transform hover:scale-105"
        >
          <h3 className="text-lg font-bold">2021</h3>
          <p className="text-sm">161% Growth</p>
        </motion.div>

        {/* 2022 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.4 },
            },
          }}
          className="p-4 bg-red-300 text-red-900 rounded-lg transition-transform transform hover:scale-105"
        >
          <h3 className="text-lg font-bold">2022</h3>
          <p className="text-sm">-18% Dip</p>
        </motion.div>

        {/* 2023 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.4 },
            },
          }}
          className="p-4 bg-blue-200 text-blue-700 rounded-lg transition-transform transform hover:scale-105"
        >
          <h3 className="text-lg font-bold">2023</h3>
          <p className="text-sm">8% Growth</p>
        </motion.div>

        {/* 2024 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.4 },
            },
          }}
          className="p-4 bg-teal-300 text-teal-700 rounded-lg transition-transform transform hover:scale-105"
        >
          <h3 className="text-lg font-bold">2024</h3>
          <p className="text-sm">42% Anticipated</p>
        </motion.div>
      </motion.div>

      {/* Chart with Lazy Loading */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.6 },
          },
        }}
      >
        {chartData && (
          <Chart
            options={chartData}
            series={chartData.series}
            type="area"
            height={350}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default YearGrowthCard;
