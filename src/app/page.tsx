import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ServicesStack from "@/components/sections/ServicesStack";
import MetricsSection from "@/components/sections/MetricsSection";
import ProjectGrid from "@/components/sections/ProjectGrid";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ServicesStack />
      <MetricsSection />
      <ProjectGrid />
      <CtaSection />
    </main>
  );
}
