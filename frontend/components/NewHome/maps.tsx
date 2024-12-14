"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export default function WorldMapSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const controlsMap = useAnimation();
  const controlsHeader = useAnimation();
  const controlsRegions = useAnimation();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animate header
          controlsHeader.start({
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2,
            },
          });

          // Animate map
          controlsMap.start({
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.4,
            },
          });

          // Animate regions
          controlsRegions.start({
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay: 0.6,
              staggerChildren: 0.1,
            },
          });

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
  }, [controlsHeader, controlsMap, controlsRegions]);

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
    <div
      ref={sectionRef}
      className="max-w-7xl py-20 mx-auto px-4 md:px-8 lg:px-10 bg-[#09090B]"
    >
      {/* Header */}
      <motion.div initial={{ opacity: 0, x: -50 }} animate={controlsHeader}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white max-w-2xl leading-[110%]">
          World <span className="text-teal-400">Map</span>
        </h2>
        <p className="text-white text-lg md:text-xl font-semibold my-4 max-w-lg">
          We've successfully worked with clients across various regions,
          expanding our global footprint and delivering exceptional services
          worldwide.
        </p>
      </motion.div>

      {/* World Map */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controlsMap}
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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controlsRegions}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center mb-6"
      >
        {growthData.map((data) => (
          <motion.div
            key={data.year}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 50,
            }}
            whileHover={{ scale: 1.05 }}
            className={`p-3 md:p-4 ${data.color} rounded-lg transition-transform`}
          >
            <h3 className="text-base md:text-lg font-bold">{data.year}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
