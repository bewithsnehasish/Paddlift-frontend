import CompanyTimeline from "@/components/home/CompanyTimeline";
import Features from "@/components/home/Features";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/Partner";
import Workflows from "@/components/home/workflows";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Workflows />
      <Features />
      <PartnersSection />
      <CompanyTimeline />
    </div>
  );
}
