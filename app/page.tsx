import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { WorkspaceSection } from "@/components/workspace-section";
import { TrainingSection } from "@/components/training-section";
import { PillarsSection } from "@/components/pillars-section";
import { PathSection } from "@/components/path-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WorkspaceSection />
        <TrainingSection />
        <PillarsSection />
        <PathSection />
      </main>
      <Footer />
    </>
  );
}
