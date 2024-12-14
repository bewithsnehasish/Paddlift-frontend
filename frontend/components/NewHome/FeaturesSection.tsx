import Image from "next/image";
import React from "react";

type Feature = {
  icon: string;
  title: string;
  desc: string;
};

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: "/NewLogos/recruitment.png",
      title: "Recruitment",
      desc: "Delivering top talent across industries and skill sets, from tech to non-tech, with precision and expertise",
    },
    {
      icon: "/NewLogos/staffing.png",
      title: "Staffing",
      desc: "Deploying skilled talent globally with seamless payroll management for efficient and compliant staffing solutions.",
    },
    {
      icon: "/NewLogos/fgateway.png",
      title: "Funding Gateway",
      desc: "Opening doors for startups by connecting them with global angel investors & VCs, guiding funding from pre-seed to Series B.",
    },
    {
      icon: "/NewLogos/hrdynamics.png",
      title: "HR Dynamics",
      desc: "Comprehensive HR management service that streamlines policy, strategies, salary benchmarking, etc. different analytics support.",
    },
  ];

  return (
    <section className="relative py-28 bg-[#09090B]">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
        <div className="max-w-xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white max-w-2xl leading-[110%]">
            <span className="text-teal-400">Our</span> Services
          </h2>
          <p className="mt-3">
            Our squad of seasoned specialists. With different team setups for IT
            and non-IT needs, we are equipped with street-smart knowledge and
            the know-how to serve our customers with swift turnaround times.
            This makes us your gateway to top-tier talent that aligns perfectly
            with your unique requirements.
          </p>
        </div>
        <div className="mt-12 lg:mt-0">
          <ul className="grid gap-8 sm:grid-cols-2">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div className="flex-none w-12 h-12 text-cyan-400 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    className="w-12 h-12"
                    width={64}
                    height={64}
                  />
                </div>
                <div>
                  <h4 className="text-xl text-gray-100 font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-lg">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
