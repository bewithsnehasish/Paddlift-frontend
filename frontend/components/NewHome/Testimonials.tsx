"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonialsData = [
  {
    quote:
      "Partnering with Paddlelift for our hiring needs at Otipy/Crofarm was exceptional. Their industry knowledge and commitment ensured highly qualified candidates who fit our team perfectly. Their thorough vetting and proactive communication saved us time and addressed our concerns, helping us fill critical positions with outstanding individuals. We highly recommend Paddlelift for reliable hiring consulting.",
    name: "Sandeep Kumar",
    title: "AVP – Human Resources | Otipy",
    avatar:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
  },
  {
    quote:
      "Collaborating with Paddlelift has been a game-changer for our recruitment strategy at ITC. Their deep understanding of our business needs and meticulous approach have led to the seamless onboarding of high-caliber professionals who align perfectly with our company culture. Paddlelift’s dedication to excellence, proactive communication, and quick turnaround time make them a trusted partner, and we look forward to continuing our successful collaboration.",
    name: "Mrinal Pallial",
    title: "Sr. HR – Business Partner | ITC",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
  },
  {
    quote:
      "I loved the pace at which Paddlelift works, their quick turnaround time with relevant profiles, and the high quality of candidates they provide. This sets them apart from other recruitment agencies. I wish the Paddlelift team all the best and urge them to continue their excellent work, as it greatly helps us founders.",
    name: "Mayank Bhawsinghka",
    title: "Founder & CEO | Nirmaan e-store",
    avatar:
      "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
  },
];

const statsData = [
  {
    title: "Clients Served",
    value: 42,
    suffix: "+",
    description: "Empowering Businesses",
  },
  {
    title: "Candidates Placed",
    value: 1200,
    suffix: "+",
    description: "Redefining Recruitment",
  },
  {
    title: "Happy Customer",
    value: 85,
    suffix: "%",
    description: "Connecting Top Talent",
  },
];

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<number[]>(statsData.map(() => 0));
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

  useEffect(() => {
    if (isVisible) {
      statsData.forEach((data, index) => {
        let start = 0;
        const end = data.value;
        const duration = 1000; // 1 second
        const increment = end / (duration / 16); // Smooth step per frame (assuming 60fps)
        const counterInterval = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(counterInterval);
          }
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.round(start);
            return newCounters;
          });
        }, 16);
      });
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="overflow-hidden bg-[#09090B]">
      <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold mb-4 text-white max-w-2xl leading-[110%]"
        >
          <span className="text-teal-400">Testimonials</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-xl font-semibold md:text-base my-4 max-w-lg"
        >
          Global Reach, Local Expertise
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {testimonialsData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.8,
              }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="flex h-auto"
            >
              <div className="flex flex-col bg-white rounded-xl">
                <div className="flex-auto p-4 md:p-6">
                  <p className="text-base italic md:text-lg text-gray-800">
                    {data.quote}
                  </p>
                </div>
                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                  <div className="flex items-center gap-x-3">
                    <div className="shrink-0">
                      <Image
                        src={data.avatar}
                        alt={data.name}
                        className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                        width={72}
                        height={72}
                      />
                    </div>
                    <div className="grow">
                      <p className="text-sm sm:text-base font-semibold text-gray-800">
                        {data.name}
                      </p>
                      <p className="text-xs text-gray-500">{data.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
          {statsData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="text-center"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-white">
                {data.title}
              </h4>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
                {counters[index]}
                {data.suffix}
              </p>
              <p className="mt-1 text-gray-400">{data.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
