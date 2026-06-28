import { Terminal, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-white/5 bg-black text-gray-500 font-sans text-xs">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Copyright */}
        <div className="text-center sm:text-left space-y-1">
          <p className="text-gray-400 font-medium">
            © {currentYear} SALAH BOURAGBI. Built with React & Tailwind.
          </p>
          <p className="text-[10px] text-gray-600 font-mono">
            M1 Computer Science Student @ ISIDS & CEO SBB TECH STORE. All Rights Reserved.
          </p>
        </div>

        {/* Right Side: High Tech Status Bar */}
        <div className="flex items-center gap-6 text-[10px] font-mono">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
            <span className="text-gray-400">MAVERICK_NET: ONLINE</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-neon-purple" />
            <span>SECURE TERMINAL</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
