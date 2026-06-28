import { useState, ReactNode, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Tag, Eye, Heart, ShoppingBag, Terminal, Gamepad2, Dumbbell, Compass, Code } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  mode: 'tech' | 'lifestyle';
  description: string;
  image: string;
  fallbackImage: string;
  badge: string;
  icon: ReactNode;
  accentClass: string;
  tags: string[];
  link?: string;
}

interface VisualShowcaseProps {
  activeMode: 'all' | 'tech' | 'lifestyle';
}

export default function VisualShowcase({ activeMode }: VisualShowcaseProps) {
  const [likes, setLikes] = useState<Record<string, number>>({
    sbb: 142,
    hackathon: 89,
    setup: 104,
    athlete: 156,
    hiking: 74,
    future: 230
  });

  const [hasLiked, setHasLiked] = useState<Record<string, boolean>>({});

  const handleLike = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    if (hasLiked[id]) {
      setLikes(prev => ({ ...prev, [id]: prev[id] - 1 }));
      setHasLiked(prev => ({ ...prev, [id]: false }));
    } else {
      setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
      setHasLiked(prev => ({ ...prev, [id]: true }));
    }
  };

  const showcaseItems: ShowcaseItem[] = [
    {
      id: 'sbb',
      title: 'SBB TECH STORE',
      category: 'E-com Brand',
      mode: 'tech',
      description: 'A premium consumer technology brand curated and owned by Salah. Optimizing inventory logistics, target marketing pipelines, and responsive product delivery systems.',
      image: '/src/assets/salah_workstation.png',
      fallbackImage: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?q=80&w=600&auto=format&fit=crop',
      badge: 'PROPRIETOR BRAND',
      icon: <ShoppingBag className="w-5 h-5 text-neon-cyan" />,
      accentClass: 'border-neon-cyan/20 hover:border-neon-cyan/80 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]',
      tags: ['E-Commerce', 'Meta Ads', 'Gadget Logistics', 'Retail Systems'],
      link: 'https://sbb-tech-store.com' // Placeholder/Actual brand link
    },
    {
      id: 'hackathon',
      title: 'Hackathons & Events',
      category: 'Campus Leadership',
      mode: 'tech',
      description: 'Fostering innovation networks at ISIDS. Organizing extreme collaborative software sprints, technical hackathons, speaker events, and managing logistical infrastructure.',
      image: '/src/assets/salah_workstation.png',
      fallbackImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop',
      badge: 'EVENT COORDINATION',
      icon: <Terminal className="w-5 h-5 text-neon-green" />,
      accentClass: 'border-neon-green/20 hover:border-neon-green/80 hover:shadow-[0_0_20px_rgba(57,255,20,0.15)]',
      tags: ['ISIDS Coordination', 'Team Leadership', 'Community Outreach'],
      link: '#'
    },
    {
      id: 'setup',
      title: 'My Workstation Setup',
      category: 'Tactical Workspace',
      mode: 'lifestyle',
      description: 'A bespoke high-performance coding station engineered for deep technical development, agile project management, and elegant software design workflows.',
      image: '/src/assets/salah_workstation.png',
      fallbackImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop',
      badge: 'DEV WORKSTATION',
      icon: <Gamepad2 className="w-5 h-5 text-neon-purple" />,
      accentClass: 'border-neon-purple/20 hover:border-neon-purple/80 hover:shadow-[0_0_20px_rgba(176,38,255,0.15)]',
      tags: ['Hardware Optimization', 'Reflex Training', 'Dev Setup'],
      link: '#'
    },
    {
      id: 'athlete',
      title: 'Athlete in Action',
      category: 'Physical Discipline',
      mode: 'lifestyle',
      description: 'Cultivating stamina, cardiovascular endurance, and physical focus. Actively training across Running, Boxing, Weight Lifting, and Team Basketball/Football matches.',
      image: '/src/assets/salah_action.png',
      fallbackImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
      badge: 'PEAK ENDURANCE',
      icon: <Dumbbell className="w-5 h-5 text-neon-cyan" />,
      accentClass: 'border-neon-cyan/20 hover:border-neon-cyan/80 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]',
      tags: ['500km Run Tracked', 'Weight Training', 'Boxing Core', 'Athletic Lifestyle'],
      link: '#'
    },
    {
      id: 'hiking',
      title: 'Hiking Adventures',
      category: 'Peak Navigation',
      mode: 'lifestyle',
      description: 'Recharging systemic creative flow through wilderness navigation and rugged mountain trails, embracing challenging altitude elevation and natural isolation.',
      image: '/src/assets/salah_hiking.png',
      fallbackImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop',
      badge: 'EXPLORATION',
      icon: <Compass className="w-5 h-5 text-neon-green" />,
      accentClass: 'border-neon-green/20 hover:border-neon-green/80 hover:shadow-[0_0_20px_rgba(57,255,20,0.15)]',
      tags: ['Alpine Navigation', 'High Altitude', 'Physical Recovery'],
      link: '#'
    },
    {
      id: 'future',
      title: 'Confidential Tech Store Pipeline',
      category: 'Future R&D',
      mode: 'tech',
      description: 'An upcoming automated inventory control system leveraging integrated pipeline algorithms to synchronize multi-retail storefront stocks with regional supply logs.',
      image: '/src/assets/salah_future.png',
      fallbackImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop',
      badge: 'INCOMING PIPELINE',
      icon: <Code className="w-5 h-5 text-neon-purple" />,
      accentClass: 'border-neon-purple/20 hover:border-neon-purple/80 hover:shadow-[0_0_20px_rgba(176,38,255,0.15)]',
      tags: ['Automation', 'Supply Synchronization', 'Scale Architecture'],
      link: '#'
    }
  ];

  // Filtering showcase items based on chosen lens
  const filteredItems = showcaseItems.filter(item => {
    if (activeMode === 'all') return true;
    return item.mode === activeMode;
  });

  return (
    <section id="showcase" className="py-24 px-4 md:px-8 relative bg-dark-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />
      
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-xs font-mono text-neon-cyan">
              <Eye className="w-3.5 h-3.5" />
              <span>// CHRONICLES & MILESTONES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
              THE VISUAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green">SHOWCASE</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-sm md:text-right font-sans">
            A photographic timeline and blueprint logging Salah's core milestones across business, academia, setup engineering, and athletics.
          </p>
        </div>

        {/* Responsive Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`glass-card border rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 group ${item.accentClass}`}
            >
              {/* Image / Visual Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-950/80">
                
                {/* Visual Preset Fallback overlay gradient with customized badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none" />
                
                {/* High fidelity image loading from Unsplash with safety fallback */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 relative z-20"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // If the first local try fails, try loading the Unsplash fallback
                    const localPath = item.image;
                    const fallbackPath = item.fallbackImage;
                    if (target.getAttribute('src') === localPath) {
                      target.src = fallbackPath;
                    } else {
                      target.style.display = 'none';
                    }
                  }}
                />

                {/* Styled high-tech digital graphic inside container in case images aren't present */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-zinc-900 to-black pointer-events-none group-hover:from-zinc-950 z-0">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-2 bg-white/5">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono text-gray-500">// MAVERICK_VISUAL_FEED</span>
                </div>

                {/* Corner high-energy system tag */}
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <span className="text-[10px] font-mono tracking-wider font-extrabold px-2.5 py-1 rounded bg-black/80 border border-white/10 text-white shadow-lg">
                    {item.badge}
                  </span>
                  <span className={`text-[10px] font-mono tracking-wider font-extrabold px-2.5 py-1 rounded bg-black/80 border border-white/10 shadow-lg capitalize ${
                    item.mode === 'tech' ? 'text-neon-cyan' : 'text-neon-purple'
                  }`}>
                    {item.mode}
                  </span>
                </div>

                {/* Top Right Action Button */}
                {item.link && item.link !== '#' && (
                  <a
                    id={`link-ext-${item.id}`}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-black/80 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Information Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider flex items-center gap-1">
                      <Tag className="w-3 h-3 text-neon-green" />
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-extrabold text-white group-hover:text-neon-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Showcase tags and like triggers */}
                <div className="pt-2 border-t border-white/5 space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      id={`btn-like-${item.id}`}
                      onClick={(e) => handleLike(item.id, e)}
                      className={`flex items-center gap-1.5 text-xs font-mono transition-all duration-200 cursor-pointer ${
                        hasLiked[item.id] ? 'text-neon-purple' : 'text-gray-500 hover:text-white'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${hasLiked[item.id] ? 'fill-neon-purple text-neon-purple' : ''}`} />
                      <span>{likes[item.id]}</span>
                    </button>
                    <span className="text-[10px] font-mono text-gray-600">// METRIC_PASS</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
