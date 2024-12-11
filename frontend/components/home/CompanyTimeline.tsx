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
              <div className="flex justify-center">
                <Image
                  src="/Foundation.gif"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg mt-4 object-cover h-72 w-full max-w-2xl"
                />
              </div>
            </div>
          ),
        },
        {
          title: "Momentum",
          content: (
            <div className="">
              <p className="text-lg text-center">
                Achieved significant momentum with a high repeat customer ratio
                and strong word-of-mouth publicity
              </p>
              <div className="flex justify-center">
                <Image
                  src="/Momentum.gif"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg mt-4 object-cover h-72 w-full max-w-2xl"
                />
              </div>
            </div>
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
              <div className="flex justify-center">
                <Image
                  src="/Resilience.gif"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg mt-4 object-cover h-72 w-full max-w-2xl"
                />
              </div>
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
              <div className="flex justify-center">
                <Image
                  src="/Gexpansion.gif"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg mt-4 object-cover h-72 w-full max-w-2xl"
                />
              </div>
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
              <div className="flex justify-center">
                <Image
                  src="/SHeights.gif"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg mt-4 object-cover h-72 w-full max-w-2xl"
                />
              </div>
            </>
          ),
        },
      ]}
    />
  );
}
