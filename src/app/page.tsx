"use client";

import { MatrixRain } from "@/components/MatrixRain";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { MachinesSection } from "@/components/MachinesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e14] relative overflow-hidden">
      <MatrixRain />
      <div className="matrix-bg scanline">
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <AchievementsSection />
        <MachinesSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
