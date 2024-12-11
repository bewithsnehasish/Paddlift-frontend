import Image from "next/image";
import { Timeline } from "../ui/timeline";

export default function CompanyTimeline() {
  return (
    <Timeline
      data={[
        {
          title: "The Foundation",
          content: (
            <div>
              <p>
                Launched during the COVID-19 pandemic, offering essential
                recruitment services to founders in need of quality manpower.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://i.ibb.co/W3tjR7S/rb-2733.png"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="https://assets.aceternity.com/templates/startup-2.webp"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="https://assets.aceternity.com/templates/startup-3.webp"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="https://assets.aceternity.com/templates/startup-4.webp"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
        {
          title: "Momentum",
          content: (
            <>
              <p>
                Achieved significant momentum with a high repeat customer ratio
                and strong word-of-mouth publicity
              </p>
            </>
          ),
        },
        {
          title: "Resilience",
          content: (
            <>
              <p>
                Strategically managed market slowdowns and economic challenges,
                ensuring stability and continued service excellence.
              </p>
            </>
          ),
        },
        {
          title: "Global Expansion",
          content: (
            <>
              <p>
                Expanded operations globally, establishing a presence in Europe,
                Australia, Africa, and the Middle East despite market
                turbulence.
              </p>
            </>
          ),
        },
        {
          title: "Scaling Heights",
          content: (
            <>
              <p>
                Continued to grow by diversifying services and strengthening
                market position, focusing on innovation and client satisfaction.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
