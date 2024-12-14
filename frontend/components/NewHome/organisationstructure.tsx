"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { MainMenusGradientCard } from "../eldoraui/animatedcard";

export default function OrganizationalStructure() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }, // Lowered threshold for earlier visibility
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl py-20 mx-auto px-4 md:px-8 lg:px-10 bg-[#09090B]"
    >
      {/* Header */}
      <div className="mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white max-w-2xl leading-[110%]">
          Organizational <span className="text-teal-400">Structure</span>
        </h2>
        <p className="text-white text-xl font-semibold md:text-base mt-4 max-w-lg">
          Dedicated Customized Solution for clients
        </p>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Image Placeholder */}
        <div
          className={`w-full h-auto transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          <Image
            src="/images/organisationstructure.svg"
            alt="Organizational Structure"
            className="w-full h-auto object-contain"
            width={1920}
            height={1080}
            priority // Prioritize loading of this image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
          />
        </div>

        {/* Right: Cards */}
        <div
          className={`flex flex-col space-y-6 transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100 delay-300"
              : "translate-x-20 opacity-0"
          }`}
        >
          <MainMenusGradientCard
            title="Technology / IT Recruitment Vertical"
            description="Where team is dedicatedly focusing to cater Tech Hiring for Clients."
          />
          <MainMenusGradientCard
            title="Non-Tech / Functional Recruitment Vertical"
            description="Where team is dedicatedly focusing to cater Non-Tech / Functional Hiring for Clients."
          />
          <MainMenusGradientCard
            title="Staffing / Payroll / HR Management Vertical"
            description="Dedicated team for managing Payroll & Ops for domestic & international clients."
          />
          <MainMenusGradientCard
            title="Customer Success / Growth Management Vertical"
            description="Dedicated vertical to ensure smooth & productive business engagement with clients."
          />
        </div>
      </div>
    </section>
  );
}
