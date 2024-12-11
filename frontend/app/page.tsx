import Footer from "@/components/Footer";
import CompanyTimeline from "@/components/home/CompanyTimeline";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/Partner";
import Features from "@/components/home/Features";
import Workflows from "@/components/home/workflows";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Workflows />
      <Features />
      <PartnersSection />
      <CompanyTimeline />
      <Footer />
    </div>
  );
}
