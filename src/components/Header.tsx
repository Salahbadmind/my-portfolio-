import { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUp } from 'lucide-react';

interface HeaderProps {
  activeMode: 'all' | 'tech' | 'lifestyle';
  setActiveMode: (mode: 'all' | 'tech' | 'lifestyle') => void;
}

export default function Header({ activeMode, setActiveMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'stats-bar', label: 'Stats' },
    { id: 'skills', label: 'Skills' },
    { id: 'showcase', label: 'Showcase' },
    { id: 'contact', label: 'Contact Hub' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section highlights
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md py-2 border-white/10 shadow-2xl shadow-black/80' 
          : 'bg-transparent py-4 border-transparent'
      }`}>
        {/* Immersive Top Ribbon */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between mb-2 text-[9px] font-mono tracking-widest text-white/40 border-b border-white/5 pb-1 select-none">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14] animate-pulse" />
            <span className="uppercase font-bold text-glow-green text-[#39FF14]">SYS_STATUS: OPTIMIZED</span>
          </div>
          <div className="hidden sm:block">
            <span>ST-QUENTIN, FR [49.84° N, 3.28° E]</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Brand/Logo */}
          <div 
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-green p-0.5 flex items-center justify-center transition-all duration-300 group-hover:rotate-6">
              <div className="w-full h-full bg-black rounded-[6px] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-neon-cyan group-hover:text-neon-green transition-colors" />
              </div>
            </div>
            <span className="font-display font-black text-sm md:text-base tracking-widest text-white">
              SBB<span className="text-neon-cyan">_MAVERICK</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navItems.map((item) => (
                <button
                  id={`nav-link-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs font-display font-semibold uppercase tracking-widest transition-all relative py-1 cursor-pointer ${
                    activeSection === item.id 
                      ? 'text-neon-cyan' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 inset-x-0 h-[2px] bg-neon-cyan text-glow-cyan" />
                  )}
                </button>
              ))}
            </div>

            {/* Accent Mode Toggle Pills in Header */}
            <div className="flex items-center bg-white/5 border border-white/5 p-1 rounded-xl gap-1">
              <button
                id="header-mode-all"
                onClick={() => setActiveMode('all')}
                className={`px-3 py-1 text-[10px] font-mono rounded-lg transition-all ${
                  activeMode === 'all' 
                    ? 'bg-white/10 text-white font-bold' 
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                All
              </button>
              <button
                id="header-mode-tech"
                onClick={() => setActiveMode('tech')}
                className={`px-3 py-1 text-[10px] font-mono rounded-lg transition-all ${
                  activeMode === 'tech' 
                    ? 'bg-neon-cyan/20 text-neon-cyan font-bold' 
                    : 'text-gray-500 hover:text-neon-cyan/80'
                }`}
              >
                CEO
              </button>
              <button
                id="header-mode-lifestyle"
                onClick={() => setActiveMode('lifestyle')}
                className={`px-3 py-1 text-[10px] font-mono rounded-lg transition-all ${
                  activeMode === 'lifestyle' 
                    ? 'bg-neon-purple/20 text-neon-purple font-bold' 
                    : 'text-gray-500 hover:text-neon-purple/80'
                }`}
              >
                Athlete
              </button>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            {/* Minimal Pill for active filter view on mobile */}
            <span className="text-[10px] font-mono bg-white/5 border border-white/5 px-2 py-1 rounded text-gray-400 capitalize">
              {activeMode} Mode
            </span>
            <button
              id="btn-mobile-menu"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden flex flex-col justify-center items-center">
          <div className="flex flex-col gap-8 text-center">
            {navItems.map((item) => (
              <button
                id={`mobile-nav-link-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-lg font-display font-extrabold uppercase tracking-widest transition-all ${
                  activeSection === item.id 
                    ? 'text-neon-cyan text-glow-cyan' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="h-[1px] w-24 bg-white/10 mx-auto my-4" />

            {/* Mobile Filter Options */}
            <div className="space-y-3">
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                FILTER PROFILE MODE:
              </p>
              <div className="flex gap-2 justify-center">
                <button
                  id="mobile-mode-all"
                  onClick={() => { setActiveMode('all'); setIsOpen(false); }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono border ${activeMode === 'all' ? 'bg-white/10 border-white/20 text-white' : 'border-white/5 text-gray-500'}`}
                >
                  Full Matrix
                </button>
                <button
                  id="mobile-mode-tech"
                  onClick={() => { setActiveMode('tech'); setIsOpen(false); }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono border ${activeMode === 'tech' ? 'bg-neon-cyan/20 border-neon-cyan/40 text-neon-cyan' : 'border-white/5 text-gray-500'}`}
                >
                  Tech/CEO
                </button>
                <button
                  id="mobile-mode-lifestyle"
                  onClick={() => { setActiveMode('lifestyle'); setIsOpen(false); }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono border ${activeMode === 'lifestyle' ? 'bg-neon-purple/20 border-neon-purple/40 text-neon-purple' : 'border-white/5 text-gray-500'}`}
                >
                  Athlete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
