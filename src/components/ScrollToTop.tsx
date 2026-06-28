import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="btn-scroll-top"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-xl bg-black/80 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] cursor-pointer"
          title="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
