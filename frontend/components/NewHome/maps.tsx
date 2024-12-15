"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WorldMapSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const growthData = [
    { year: "Australia", color: "bg-orange-300 text-[#09090B]" },
    { year: "India", color: "bg-green-300 text-[#09090B]" },
    { year: "Europe", color: "bg-red-300 text-[#09090B]" },
    { year: "Africa", color: "bg-blue-200 text-[#09090B]" },
    { year: "Middle East", color: "bg-yellow-300 text-[#09090B]" },
  ];

  return (
    <div
      ref={sectionRef}
      className="max-w-7xl py-20 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 bg-[#09090B]"
    >
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-bold mb-4 text-white max-w-2xl leading-[110%]"
      >
        World <span className="text-teal-400">Map</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-white text-xl font-semibold md:text-base my-4 max-w-lg"
      >
        We&apos;ve successfully worked with clients across various regions,
        expanding our global footprint and delivering exceptional services
        worldwide.
      </motion.p>

      {/* World Map */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-4xl mx-auto mb-6"
      >
        <Image
          src="/images/maps.svg"
          alt="World Map"
          className="w-full h-auto object-contain"
          width={1200}
          height={800}
        />
      </motion.div>

      {/* Year Data */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center mb-6">
        {growthData.map((data) => (
          <motion.div
            key={data.year}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.4 }}
            className={`p-4 ${data.color} rounded-lg transition-transform transform hover:scale-105`}
          >
            <h3 className="text-lg font-bold">{data.year}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
