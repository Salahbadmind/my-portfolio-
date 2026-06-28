import { motion } from 'motion/react';
import { ArrowDown, Code, Sparkles, ShoppingBag, Gamepad2, Dumbbell } from 'lucide-react';
import InteractiveBackground from './InteractiveBackground';

interface HeroProps {
  activeMode: 'all' | 'tech' | 'lifestyle';
  setActiveMode: (mode: 'all' | 'tech' | 'lifestyle') => void;
}

export default function HeroSection({ activeMode, setActiveMode }: HeroProps) {
  const scrollToExplore = () => {
    const target = document.getElementById('stats-bar');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 pb-12 px-4 md:px-8 grid-bg">
      {/* Dynamic particles & connection lines */}
      <InteractiveBackground />

      {/* Decorative ambient neon glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-neon-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left side: Hero Text */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-white/10 text-xs md:text-sm font-mono tracking-wider text-neon-cyan"
          >
            <Sparkles className="w-4 h-4 text-neon-green animate-pulse" />
            <span>M1 COMPUTER SCIENCE STUDENT @ ISIDS</span>
          </motion.div>

          <div className="space-y-3">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tighter text-white"
            >
              SALAH <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green text-glow-cyan">
                BOURAGBI
              </span>
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-2xl font-space font-medium text-gray-300 max-w-2xl mx-auto lg:mx-0"
            >
              CS Student @ ISIDS <span className="text-neon-cyan">|</span> CEO of SBB TECH STORE <span className="text-neon-purple">|</span> Web Developer
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
          >
            A high-energy, multifaceted maverick bridging the gap between rigorous technical systems, business enterprise development, and an intense active lifestyle. Welcome to my digital showcase.
          </motion.p>

          {/* Immersive Theme Core Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm max-w-xl mx-auto lg:mx-0"
          >
            <h3 className="text-neon-cyan text-[10px] font-bold uppercase tracking-[0.4em] mb-2">// CORE MISSION</h3>
            <p className="text-xl sm:text-2xl font-light leading-snug italic text-gray-300">
              "Building the <span className="text-white font-extrabold not-italic text-glow-cyan">Future</span>, One Line of Code at a Time."
            </p>
          </motion.div>

          {/* Core Duality Controller / Mode Selector */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-2"
          >
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3 text-center lg:text-left">
              Select Your Lens (Filter Portfolio Experience):
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <button
                id="btn-lens-all"
                onClick={() => setActiveMode('all')}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold font-display tracking-wide transition-all duration-300 border ${
                  activeMode === 'all'
                    ? 'bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border-neon-cyan text-white shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                    : 'glass-card text-gray-400 border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                ⚡ Full Maverick
              </button>
              <button
                id="btn-lens-tech"
                onClick={() => setActiveMode('tech')}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold font-display tracking-wide transition-all duration-300 border ${
                  activeMode === 'tech'
                    ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                    : 'glass-card text-gray-400 border-white/5 hover:border-neon-cyan/40 hover:text-neon-cyan'
                }`}
              >
                💼 CEO & Developer
              </button>
              <button
                id="btn-lens-lifestyle"
                onClick={() => setActiveMode('lifestyle')}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold font-display tracking-wide transition-all duration-300 border ${
                  activeMode === 'lifestyle'
                    ? 'bg-neon-purple/20 border-neon-purple text-neon-purple shadow-[0_0_15px_rgba(176,38,255,0.25)]'
                    : 'glass-card text-gray-400 border-white/5 hover:border-neon-purple/40 hover:text-neon-purple'
                }`}
              >
                🥊 Athlete & Gamer
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-6 flex justify-center lg:justify-start"
          >
            <button
              id="btn-explore-work"
              onClick={scrollToExplore}
              className="group flex items-center gap-2 px-6 py-3.5 bg-white text-black font-display font-bold text-sm rounded-xl hover:bg-neon-cyan hover:text-black transition-all duration-300 shadow-lg hover:shadow-neon-cyan/20 cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right side: Interactive Holographic Duality Visual Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-md"
        >
          <div className="relative glass-card border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden group">
            {/* Ambient scanline / grid overlay inside card */}
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-pulse" />

            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neon-cyan/50 flex-shrink-0 bg-black">
                  <img 
                    src="/src/assets/salah_workstation.png" 
                    alt="Salah Bouragbi"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#39FF14] border-2 border-black" />
                </div>
                <div>
                  <div className="text-xs font-mono text-neon-cyan font-bold tracking-wider">
                    MAVERICK_OS v4.1
                  </div>
                  <div className="text-[9px] text-gray-500 font-mono">SYS_USER: salah_bouragbi</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
            </div>

            {/* Simulated terminal and graphics */}
            <div className="space-y-4 font-mono text-sm">
              <div className="bg-black/40 rounded-lg p-3 border border-white/5">
                <div className="text-gray-500 text-xs mb-1">// SYSTEM_INITIALIZATION</div>
                <div className="text-neon-cyan flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  <span>SalahBouragbi.init()</span>
                </div>
                <div className="text-gray-300 mt-1 pl-4">
                  &gt; Master 1 Computer Science Student <br />
                  &gt; Tech Store Proprietor (SBB TECH) <br />
                  &gt; Full Stack Engineering Core
                </div>
              </div>

              {/* Duality Visual Display */}
              <div className="relative h-44 rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-black/60 to-gray-900/60 flex items-center justify-center">
                {/* Custom animated geometric element */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <div className="w-24 h-24 border-2 border-dashed border-neon-cyan rounded-full animate-spin [animation-duration:15s]" />
                  <div className="absolute w-32 h-32 border border-dotted border-neon-purple rounded-full animate-spin [animation-duration:10s]" />
                  <div className="absolute w-16 h-16 border-2 border-neon-green rounded-full animate-pulse" />
                </div>

                <div className="relative z-10 flex flex-col items-center text-center p-4">
                  <div className="text-2xl font-display font-extrabold tracking-widest text-white mb-2">
                    {activeMode === 'all' && "DUAL ACTION"}
                    {activeMode === 'tech' && "TECH LEADERSHIP"}
                    {activeMode === 'lifestyle' && "HIGH PERFORMANCE"}
                  </div>
                  <div className="flex gap-4 items-center justify-center">
                    <div className={`p-2 rounded-lg transition-all duration-300 ${activeMode === 'tech' || activeMode === 'all' ? 'bg-neon-cyan/20 text-neon-cyan scale-110 shadow-lg shadow-neon-cyan/10' : 'bg-white/5 text-gray-500'}`}>
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <div className="text-gray-600 text-xs font-bold">VS</div>
                    <div className={`p-2 rounded-lg transition-all duration-300 ${activeMode === 'lifestyle' || activeMode === 'all' ? 'bg-neon-purple/20 text-neon-purple scale-110 shadow-lg shadow-neon-purple/10' : 'bg-white/5 text-gray-500'}`}>
                      <Dumbbell className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 rounded-lg p-3 border border-white/5 flex justify-between items-center text-xs">
                <div>
                  <span className="text-gray-500">ACCENT STATE:</span>
                  <span className={`ml-2 font-bold ${
                    activeMode === 'all' ? 'text-neon-cyan' : activeMode === 'tech' ? 'text-neon-cyan' : 'text-neon-purple'
                  }`}>
                    {activeMode === 'all' && 'ALL_SPECTRUM'}
                    {activeMode === 'tech' && 'CYAN_CORP_MODE'}
                    {activeMode === 'lifestyle' && 'PURPLE_ATHLETE_MODE'}
                  </span>
                </div>
                <div className="flex gap-1">
                  <span className={`w-2 h-2 rounded-full ${activeMode === 'tech' || activeMode === 'all' ? 'bg-neon-cyan animate-ping' : 'bg-gray-700'}`} />
                  <span className={`w-2 h-2 rounded-full ${activeMode === 'lifestyle' || activeMode === 'all' ? 'bg-neon-purple animate-ping' : 'bg-gray-700'}`} />
                  <span className={`w-2 h-2 rounded-full ${activeMode === 'all' ? 'bg-neon-green animate-ping' : 'bg-gray-700'}`} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
