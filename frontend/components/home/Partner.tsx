"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PartnerLogo {
  id: number;
  src: string;
  name: string;
  originalColor: string;
}

const partnerLogos = [
  {
    id: 1,
    src: "/Partner Logos/Royal_Enfield.png",
    name: "Royal Enfield",
    originalColor: "rgb(255, 100, 0)",
  },
  {
    id: 2,
    src: "/Partner Logos/Gruner.png",
    name: "Gruner",
    originalColor: "rgb(0, 123, 255)",
  },
  {
    id: 3,
    src: "/Partner Logos/ITC.png",
    name: "ITC",
    originalColor: "rgb(0, 255, 0)",
  },
  {
    id: 4,
    src: "/Partner Logos/Sanskriti.png",
    name: "Sanskriti",
    originalColor: "rgb(255, 0, 0)",
  },
  {
    id: 5,
    src: "/Partner Logos/ximkart.png",
    name: "ximkart",
    originalColor: "rgb(128, 0, 128)",
  },
  {
    id: 6,
    src: "/Partner Logos/Stancebeam.png",
    name: "Stancebeam",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 7,
    src: "/Partner Logos/WazirX.png",
    name: "WazirX",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 8,
    src: "/Partner Logos/Whitehat.jfif",
    name: "Whitehat",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 9,
    src: "/Partner Logos/liquiloans.png",
    name: "liquiloans",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 10,
    src: "/Partner Logos/park.png",
    name: "park",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 11,
    src: "/Partner Logos/werize_logo.png",
    name: "werize_logo",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 12,
    src: "/Partner Logos/Terra_Motors.png",
    name: "Terra Motors",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 14,
    src: "/Partner Logos/Otipy.png",
    name: "Otipy",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 15,
    src: "/Partner Logos/Otipy Green.jfif",
    name: "Otipy Green",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 16,
    src: "/Partner Logos/Healthkart.png",
    name: "Healthkart",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 17,
    src: "/Partner Logos/Farmley.png",
    name: "Farmley",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 18,
    src: "/Partner Logos/Field Assist.png",
    name: "Field Assist",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 19,
    src: "/Partner Logos/Draup.png",
    name: "Draup",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 20,
    src: "/Partner Logos/Locofast.png",
    name: "Locofast",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 21,
    src: "/Partner Logos/Eureka Forbes.png",
    name: "Eureka Forbes",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 22,
    src: "/Partner Logos/Reevoy.png",
    name: "Reevoy",
    originalColor: "rgb(255,255,255)",
  },
  {
    id: 23,
    src: "/Partner Logos/Fresh_to_home.png",
    name: "Fresh_to_home",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 24,
    src: "/Partner Logos/Getsupp.png",
    name: "Getsupp",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 25,
    src: "/Partner Logos/Aditya Birls.png",
    name: "Aditya Birla",
    originalColor: "rgb(255,0,0)",
  },
  {
    id: 26,
    src: "/Partner Logos/Lifelong.png",
    name: "Lifelong",
    originalColor: "rgb(255,0,0)",
  },
  {
    id: 27,
    src: "/Partner Logos/Lendingkart.png",
    name: "Lendingkart",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 28,
    src: "/Partner Logos/Mindtickle.png",
    name: "Mindtickle",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 29,
    src: "/Partner Logos/NoBroker.png",
    name: "NoBroker",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 30,
    src: "/Partner Logos/Battery_Smart_Logo.png",
    name: "Battery Smart",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 31,
    src: "/Partner Logos/Blinkit_Logo.png",
    name: "Blinkit",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 32,
    src: "/Partner Logos/Joveo.png",
    name: "Joveo",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 33,
    src: "/Partner Logos/Coverfox.png",
    name: "Coverfox",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 34,
    src: "/Partner Logos/DG Liger.png",
    name: "DG Liger",
    originalColor: "rgb(0, 0, 255)",
  },
  {
    id: 35,
    src: "/Partner Logos/Bharat agri.png",
    name: "Bharat agri",
    originalColor: "rgb(0, 0, 255)",
  },
];

interface InfiniteScrollRowProps {
  logos: PartnerLogo[];
  direction?: number;
}

const PartnersSection: React.FC = () => {
  // Divide logos into three groups
  const row1Logos = partnerLogos.slice(0, 10);
  const row2Logos = partnerLogos.slice(10, 20);
  const row3Logos = partnerLogos.slice(20);

  return (
    <section className="relative min-h-screen w-full overflow-hidden py-16 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
      <div className="mx-auto max-w-12xl px-4 sm:px-6 relative z-10">
        <div className="pb-4 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Trusted Partners
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Our Collaborative Network
            </h2>
            <p className="text-lg text-indigo-200/65">
              Empowering innovation through strategic partnerships that drive
              technological advancement
            </p>
          </div>

          <div className="space-y-8">
            {/* First row - left to right */}
            <InfiniteScrollRow logos={row1Logos} direction={1} />

            {/* Second row - right to left */}
            <InfiniteScrollRow logos={row2Logos} direction={-1} />

            {/* Third row - left to right */}
            <InfiniteScrollRow logos={row3Logos} direction={1} />
          </div>
        </div>
      </div>

      {/* Gradient Overlay and Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top and Bottom gradient overlays */}
        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-gray-950 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-950 to-transparent"></div>

        {/* Glowing Circular Spots */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -left-1/4 top-1/4 w-96 h-96 rounded-full bg-indigo-600/20 blur-2xl opacity-40"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-indigo-600/20 blur-2xl opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-600/20 blur-2xl opacity-40"></div>
        </div>
      </div>
    </section>
  );
};

const InfiniteScrollRow: React.FC<InfiniteScrollRowProps> = ({
  logos,
  direction = 1,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <div className="overflow-hidden w-full relative">
      <motion.div
        ref={scrollRef}
        className="flex"
        animate={{
          x:
            direction > 0
              ? ["-100%", "0%"] // Left to right
              : ["0%", "-100%"], // Right to left
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="flex">
          {logos.map((logo, index) => (
            <a
              key={`${logo.name}-${index}`}
              href="#"
              className="group/card relative mx-4 flex-shrink-0 w-32 h-32 flex items-center justify-center"
            >
              <div className="relative z-20 h-full w-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover/card:opacity-100">
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex items-center justify-center p-4">
                  {/* Logo Image with Glow Hover Effect */}
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-24 max-w-24 object-contain opacity-60 group-hover:opacity-100 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-indigo-500/50 transition-all duration-300"
                    width={96}
                    height={96}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
        {/* Duplicate for seamless looping */}
        <div className="flex">
          {logos.map((logo, index) => (
            <a
              key={`duplicate-${logo.name}-${index}`}
              href="#"
              className="group/card relative mx-4 flex-shrink-0 w-32 h-32 flex items-center justify-center"
            >
              <div className="relative z-20 h-full w-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover/card:opacity-100">
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex items-center justify-center p-4">
                  {/* Logo Image with Glow Hover Effect */}
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-24 max-w-24 object-contain opacity-60 group-hover:opacity-100 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-indigo-500/50 transition-all duration-300"
                    width={96}
                    height={96}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PartnersSection;
