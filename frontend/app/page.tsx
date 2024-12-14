import HeroSection from "@/components/home/HeroSection";
import "./globals.css";
import FeaturesSection from "@/components/NewHome/FeaturesSection";
import CompanyTimeline from "@/components/home/CompanyTimeline";
import VisitorsCard from "@/components/NewHome/YearOnGrowth";
import ApproachSection from "@/components/NewHome/Usp";
import PartnersSection from "@/components/home/Partner";
import OrganizationalStructure from "@/components/NewHome/organisationstructure";
import WorldMapSection from "@/components/NewHome/maps";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      {/*
      <Workflows />
      <PartnersSection />
        <Features />
        */}

      <FeaturesSection />
      <CompanyTimeline />
      <div className="min-h-screen p-6">
        <VisitorsCard />
      </div>
      <ApproachSection />
      <OrganizationalStructure />
      <WorldMapSection />
      <PartnersSection />
    </div>
  );
}
