'use client';

import { useState } from 'react';
import { portfolioData } from '@/data';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import ProgrammingLanguage from '@/components/sections/ProgrammingLanguage';
import Timeline from '@/components/sections/Timeline';
import Achievements from '@/components/sections/Achievements';
import Learning from '@/components/sections/Learning';
import Research from '@/components/sections/Research';
import Challenge from '@/components/sections/Challenge';
import About from '@/components/sections/About';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-bg">
      <Navigation />
      <Hero data={portfolioData.hero} />
      <Challenge challenge={portfolioData.challenge} />
      <Projects projects={portfolioData.projects} />
      <ProgrammingLanguage data={portfolioData.programmingLanguage} />
      <Timeline timeline={portfolioData.timeline} />
      <Achievements achievements={portfolioData.achievements} />
      <Learning learning={portfolioData.learning} />
      <Research research={portfolioData.research} />
      <About about={portfolioData.about} />
      <Footer social={portfolioData.social} />
    </main>
  );
}
