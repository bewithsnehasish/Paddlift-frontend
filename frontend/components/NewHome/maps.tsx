"use client";
import { useRef, useEffect, useState } from "react";
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
    {
      year: "Australia",
      color: "bg-orange-300 text-orange-900",
    },
    {
      year: "India",
      color: "bg-green-300 text-green-900",
    },
    {
      year: "Europe",
      color: "bg-red-300 text-red-900",
    },
    {
      year: "Africa",
      color: "bg-blue-200 text-blue-700",
    },
    {
      year: "Middle East",
      color: "bg-yellow-300 text-yellow-900",
    },
  ];

  return (
    <div className="max-w-7xl py-20 mx-auto px-4 md:px-8 lg:px-10 bg-[#09090B]">
      {/* Header */}
      <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white max-w-2xl leading-[110%]">
        World <span className="text-teal-400">Map</span>
      </h2>

      <p className="text-white text-xl font-semibold md:text-base my-4 max-w-lg">
        We've successfully worked with clients across various regions, expanding
        our global footprint and delivering exceptional services worldwide.
      </p>

      {/* World Map */}
      <div className="w-full max-w-4xl mx-auto mb-6">
        <Image
          src="/images/maps.svg"
          alt="World Map"
          className="w-full h-auto object-contain"
          width={1200}
          height={800}
        />
      </div>

      {/* Year Data */}
      <div className="grid grid-cols-5 gap-4 text-center mb-6">
        {growthData.map((data) => (
          <div
            key={data.year}
            className={`p-4 ${data.color} rounded-lg transition-transform transform hover:scale-105`}
          >
            <h3 className="text-lg font-bold">{data.year}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
