import { useEffect, useState, ReactNode } from 'react';
import { motion } from 'motion/react';
import { GitBranch, Activity, Award, DollarSign } from 'lucide-react';

interface StatItemProps {
  label: string;
  targetNum: number;
  prefix?: string;
  suffix?: string;
  icon: ReactNode;
  glowColor: 'cyan' | 'green' | 'purple' | 'yellow';
}

function StatCounter({ label, targetNum, prefix = '', suffix = '', icon, glowColor }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = targetNum / (duration / 16); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNum) {
        setCount(targetNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetNum]);

  const glowStyles = {
    cyan: 'border-neon-cyan/20 hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] text-neon-cyan',
    green: 'border-neon-green/20 hover:border-neon-green hover:shadow-[0_0_15px_rgba(57,255,20,0.15)] text-neon-green',
    purple: 'border-neon-purple/20 hover:border-neon-purple hover:shadow-[0_0_15px_rgba(176,38,255,0.15)] text-neon-purple',
    yellow: 'border-yellow-500/20 hover:border-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.15)] text-yellow-500',
  };

  const textGlowStyles = {
    cyan: 'text-glow-cyan',
    green: 'text-glow-green',
    purple: 'text-glow-purple',
    yellow: 'text-yellow-400',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`glass-card border rounded-2xl p-6 flex items-center gap-5 transition-all duration-300 group ${glowStyles[glowColor]}`}
    >
      <div className={`p-4 rounded-xl bg-black/40 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <div>
        <div className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white flex items-baseline">
          <span className="text-gray-400 font-normal mr-0.5">{prefix}</span>
          <span className={textGlowStyles[glowColor]}>{count.toLocaleString()}</span>
          <span className="text-gray-400 font-normal ml-0.5">{suffix}</span>
        </div>
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-1">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <section id="stats-bar" className="py-12 relative px-4 md:px-8 bg-black/80">
      <div className="max-w-6xl w-full mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
          <div>
            <h3 className="text-xs font-mono text-neon-green tracking-widest uppercase mb-1">
              // OPERATIONAL METRICS
            </h3>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              FUSION STATES MATRIX
            </h2>
          </div>
          <p className="text-xs md:text-sm text-gray-500 max-w-md text-center md:text-right font-sans">
            Quantifying high-volume output across code commits, physical stamina challenges, e-commerce revenues, and scale-up event coordination.
          </p>
        </div>

        {/* Bento Grid Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCounter
            label="Code Commits"
            targetNum={1247}
            suffix="+"
            icon={<GitBranch className="w-7 h-7 text-neon-cyan" />}
            glowColor="cyan"
          />
          <StatCounter
            label="Kilometers Run"
            targetNum={500}
            suffix="km+"
            icon={<Activity className="w-7 h-7 text-neon-green" />}
            glowColor="green"
          />
          <StatCounter
            label="Events Managed"
            targetNum={12}
            suffix="+"
            icon={<Award className="w-7 h-7 text-neon-purple" />}
            glowColor="purple"
          />
          <StatCounter
            label="Store Revenue"
            targetNum={50000}
            prefix="$"
            suffix="+"
            icon={<DollarSign className="w-7 h-7 text-yellow-500" />}
            glowColor="yellow"
          />
        </div>

      </div>
    </section>
  );
}
