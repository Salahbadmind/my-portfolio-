/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import SkillsMatrix from './components/SkillsMatrix';
import VisualShowcase from './components/VisualShowcase';
import ContactHub from './components/ContactHub';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [activeMode, setActiveMode] = useState<'all' | 'tech' | 'lifestyle'>('all');

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-neon-cyan selection:text-black relative overflow-hidden" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.02) 1px, transparent 0)', backgroundSize: '32px 32px' }}>
      {/* Immersive Theme Glowing Spheres */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00F0FF]/5 blur-[120px] rounded-full pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#B026FF]/5 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Sleek top navigation */}
      <Header activeMode={activeMode} setActiveMode={setActiveMode} />

      {/* Hero landing space with dynamic canvas background */}
      <HeroSection activeMode={activeMode} setActiveMode={setActiveMode} />

      {/* Numerical achievements counters */}
      <StatsBar />

      {/* Categorized high-fidelity interactive skills matrix */}
      <SkillsMatrix activeMode={activeMode} />

      {/* Bento grid visual showcase */}
      <VisualShowcase activeMode={activeMode} />

      {/* Direct email terminal & social links */}
      <ContactHub />

      {/* Minimal high-tech information footer */}
      <Footer />

      {/* Interactive floating scroll back helper */}
      <ScrollToTop />
    </div>
  );
}

