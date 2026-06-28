import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Laptop, Megaphone, Coins, Users, Calendar, Instagram, Dumbbell, Gamepad2, Compass, Car, Briefcase, Trophy } from 'lucide-react';

interface SkillsMatrixProps {
  activeMode: 'all' | 'tech' | 'lifestyle';
}

interface SkillCategory {
  title: string;
  id: 'tech' | 'business' | 'lifestyle' | 'misc';
  icon: ReactNode;
  accentColor: string;
  glowClass: string;
  borderHoverClass: string;
  skills: {
    name: string;
    description: string;
    icon: ReactNode;
    tags?: string[];
  }[];
}

export default function SkillsMatrix({ activeMode }: SkillsMatrixProps) {
  const categories: SkillCategory[] = [
    {
      title: 'Tech & Dev',
      id: 'tech',
      icon: <Laptop className="w-5 h-5 text-neon-cyan" />,
      accentColor: 'text-neon-cyan',
      glowClass: 'text-glow-cyan',
      borderHoverClass: 'glass-card-hover',
      skills: [
        {
          name: 'Web Developer',
          description: 'Crafting responsive, high-fidelity frontends and sturdy servers with React, TypeScript, and modern stacks.',
          icon: <Laptop className="w-4 h-4 text-neon-cyan" />,
          tags: ['React', 'Vite', 'TypeScript', 'Node.js', 'Tailwind v4']
        },
        {
          name: 'Meta Ads Runner',
          description: 'Engineering targeted customer acquisition campaigns, optimized retargeting, and analytical budget pipelines.',
          icon: <Megaphone className="w-4 h-4 text-neon-cyan" />,
          tags: ['Meta Business Manager', 'A/B Testing', 'ROI Optimization']
        },
        {
          name: 'Sales Expert',
          description: 'Client communication, persuasive negotiation pipelines, product positioning, and closing strategies.',
          icon: <Coins className="w-4 h-4 text-neon-cyan" />,
          tags: ['B2C Sales', 'Customer Care', 'Persuasion']
        }
      ]
    },
    {
      title: 'Business & Leadership',
      id: 'business',
      icon: <Briefcase className="w-5 h-5 text-yellow-500" />,
      accentColor: 'text-yellow-400',
      glowClass: 'text-yellow-400',
      borderHoverClass: 'glass-card-hover hover:border-yellow-500/50 hover:shadow-[0_0_15px_rgba(234,179,8,0.15)]',
      skills: [
        {
          name: 'CEO of SBB TECH STORE',
          description: 'Managing end-to-end e-commerce supply chains, inventory management, product scouting, and digital storefront branding.',
          icon: <Briefcase className="w-4 h-4 text-yellow-400" />,
          tags: ['Strategy', 'E-commerce', 'Supply Chain', 'Operations']
        },
        {
          name: 'Events Manager (Hackathons)',
          description: 'Coordinating high-energy, fast-paced technical hackathons and academic events at ISIDS. Keeping teams motivated.',
          icon: <Calendar className="w-4 h-4 text-yellow-400" />,
          tags: ['Logistics', 'Team Building', 'Public Speaking']
        },
        {
          name: 'Social Media Manager',
          description: 'Designing visual identity pipelines, content schedules, and brand engagement plans across social platforms.',
          icon: <Instagram className="w-4 h-4 text-yellow-400" />,
          tags: ['Content Strategy', 'Branding', 'Community Growth']
        }
      ]
    },
    {
      title: 'Physical & Lifestyle',
      id: 'lifestyle',
      icon: <Trophy className="w-5 h-5 text-neon-purple" />,
      accentColor: 'text-neon-purple',
      glowClass: 'text-glow-purple',
      borderHoverClass: 'glass-card-purple-hover',
      skills: [
        {
          name: 'Athlete & Gym enthusiast',
          description: 'Dedicated to intensive high-stamina activities. Active in Running, Weight Lifting, Workout, Boxing, Basketball, Football, and Bodybuilding.',
          icon: <Dumbbell className="w-4 h-4 text-neon-purple" />,
          tags: ['Weight Lifting', 'Boxing', 'Stamina Run', 'Basketball', 'Football']
        },
        {
          name: 'Competitive Gamer',
          description: 'Tactical coordinator with an custom ultra-responsive command station, emphasizing lightning reflexes and strategic thinking.',
          icon: <Gamepad2 className="w-4 h-4 text-neon-purple" />,
          tags: ['Tactical Teamwork', 'Fast Reflexes', 'Hardware Optimization']
        },
        {
          name: 'Hiking Lover',
          description: 'Exploration of rugged outdoor landscapes and mountain peaks. Recharging mind and body in nature.',
          icon: <Compass className="w-4 h-4 text-neon-purple" />,
          tags: ['Peak Trails', 'Navigation', 'Endurance', 'Mindfulness']
        }
      ]
    },
    {
      title: 'Miscellaneous',
      id: 'misc',
      icon: <Car className="w-5 h-5 text-neon-green" />,
      accentColor: 'text-neon-green',
      glowClass: 'text-glow-green',
      borderHoverClass: 'glass-card-green-hover',
      skills: [
        {
          name: 'Certified Car Driver',
          description: 'Holding a full clean European-standard driving license with exceptional highway and city navigation skill.',
          icon: <Car className="w-4 h-4 text-neon-green" />,
          tags: ['Driving License', 'Route Optimization', 'Road Security']
        }
      ]
    }
  ];

  // Logic to determine if a category matches activeMode filters
  const getCategoryOpacity = (catId: 'tech' | 'business' | 'lifestyle' | 'misc') => {
    if (activeMode === 'all') return 'opacity-100 scale-100';
    if (activeMode === 'tech' && (catId === 'tech' || catId === 'business')) return 'opacity-100 scale-100';
    if (activeMode === 'lifestyle' && (catId === 'lifestyle' || catId === 'misc')) return 'opacity-100 scale-100';
    return 'opacity-30 scale-[0.98] pointer-events-none filter grayscale';
  };

  return (
    <section id="skills" className="py-24 relative px-4 md:px-8 bg-black">
      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
      
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-xs font-mono text-neon-purple"
          >
            <Users className="w-3.5 h-3.5" />
            <span>// PROFILE OVERVIEW</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            THE DUALITY <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green">SKILLS MATRIX</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto font-sans">
            Bridging technical masterclasses, active e-commerce leadership, and dedicated physical performance metrics. Hover over categories to reveal specializations.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card border rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between ${cat.borderHoverClass} ${getCategoryOpacity(cat.id)}`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      {cat.icon}
                    </div>
                    <h3 className={`text-lg md:text-xl font-display font-bold text-white`}>
                      {cat.title}
                    </h3>
                  </div>
                  <span className={`text-xs font-mono ${cat.accentColor} font-bold uppercase tracking-widest`}>
                    // 0{idx + 1}
                  </span>
                </div>

                {/* Sub-skills list */}
                <div className="space-y-6">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2 group/skill">
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded bg-white/5 border border-white/5 group-hover/skill:border-white/10 transition-colors">
                          {skill.icon}
                        </div>
                        <h4 className="text-sm md:text-base font-space font-semibold text-white group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                      <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-sans pl-7">
                        {skill.description}
                      </p>
                      
                      {/* Interactive Tags */}
                      {skill.tags && (
                        <div className="flex flex-wrap gap-1.5 pt-1 pl-7">
                          {skill.tags.map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative accent footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span>SYSTEM_NODE: active</span>
                <span className={cat.accentColor}>
                  {activeMode === 'all' ? 'SYNCHRONIZED' : activeMode === 'tech' ? 'TECH FILTER' : 'LIFESTYLE FILTER'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
