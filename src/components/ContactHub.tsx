import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, ShoppingBag, Mail, Send, Terminal, ShieldAlert } from 'lucide-react';

export default function ContactHub() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Collaboration Query',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct Mailto link
    const mailtoLink = `mailto:sbouragbi5@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Hi Salah,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nSent from Maverick Portfolio.`
    )}`;
    
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socials = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6 text-neon-cyan" />,
      url: 'https://github.com/Salahbadmind',
      label: '@Salahbadmind',
      accentColor: 'hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] text-neon-cyan'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6 text-neon-purple" />,
      url: 'https://linkedin.com',
      label: 'Salah Bouragbi',
      accentColor: 'hover:border-neon-purple/50 hover:shadow-[0_0_15px_rgba(176,38,255,0.15)] text-neon-purple'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6 text-neon-green" />,
      url: 'https://www.instagram.com/salah.sbb/',
      label: '@salah.sbb',
      accentColor: 'hover:border-neon-green/50 hover:shadow-[0_0_15px_rgba(57,255,20,0.15)] text-neon-green'
    },
    {
      name: 'SBB TECH STORE',
      icon: <ShoppingBag className="w-6 h-6 text-yellow-500" />,
      url: '#', // Shop link
      label: 'sbb-tech-store.com',
      accentColor: 'hover:border-yellow-500/50 hover:shadow-[0_0_15px_rgba(234,179,8,0.15)] text-yellow-500'
    }
  ];

  return (
    <section id="contact" className="py-24 relative px-4 md:px-8 bg-black">
      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-xs font-mono text-neon-cyan">
            <Mail className="w-3.5 h-3.5" />
            <span>// COMM PORTAL</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            CONTACT & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green">SOCIAL HUB</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto font-sans">
            Have an e-commerce venture, a web development request, or an athletics challenge? Drop a signal into my terminal below.
          </p>
        </div>

        {/* Master Hub Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Social cards columns */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest pl-2">
              // DIRECT FREQUENCIES
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {socials.map((social) => (
                <a
                  id={`link-social-${social.name.toLowerCase().replace(/\s+/g, '-')}`}
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card border border-white/5 rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 group ${social.accentColor}`}
                >
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-sm tracking-wider">
                      {social.name}
                    </h4>
                    <p className="text-xs font-mono text-gray-400 mt-0.5">
                      {social.label}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick response note */}
            <div className="glass-card border border-white/5 rounded-2xl p-5 flex gap-4 items-center bg-neon-cyan/5 border-neon-cyan/10">
              <ShieldAlert className="w-6 h-6 text-neon-cyan shrink-0" />
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                <span className="text-white font-bold font-mono text-[10px] block mb-0.5">// SECURE TRANSFER</span>
                All communications sent through this client terminal are formatted directly into clean email payloads and delivered securely to my inbox.
              </p>
            </div>
          </div>

          {/* Core Interactive Email Form */}
          <div className="lg:col-span-7">
            <div className="glass-card border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent animate-pulse" />
              
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-neon-purple animate-pulse" />
                  <span className="text-xs font-mono text-gray-400">secure-uplink.sh</span>
                </div>
                <span className="text-[10px] font-mono text-neon-purple font-bold">PORT: 8080</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-1">
                      Your Name
                    </label>
                    <input
                      id="input-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Jane Doe"
                      className="w-full px-4 py-3 bg-black/40 border border-white/5 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/20 font-sans transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-1">
                      Your Email
                    </label>
                    <input
                      id="input-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., jane@company.com"
                      className="w-full px-4 py-3 bg-black/40 border border-white/5 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/20 font-sans transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-1">
                    Subject Line
                  </label>
                  <input
                    id="input-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g., E-commerce collaboration, dev project"
                    className="w-full px-4 py-3 bg-black/40 border border-white/5 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/20 font-sans transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-1">
                    Your Message
                  </label>
                  <textarea
                    id="input-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your goals, requirements, or event logistics..."
                    className="w-full px-4 py-3 bg-black/40 border border-white/5 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/20 font-sans transition-all resize-none"
                  />
                </div>

                <button
                  id="btn-submit-message"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/40 rounded-xl text-sm font-display font-bold text-white hover:border-neon-cyan hover:from-neon-cyan/30 hover:to-neon-purple/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-neon-cyan animate-pulse" />
                  <span>LAUNCH CONTACT TERMINAL</span>
                </button>
              </form>

              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center text-center p-6"
                >
                  <div className="w-12 h-12 rounded-full border border-neon-green flex items-center justify-center mb-4 bg-neon-green/10 animate-bounce">
                    <Send className="w-5 h-5 text-neon-green" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-white mb-2">
                    TRANSMISSION INITIALIZED
                  </h4>
                  <p className="text-xs text-gray-400 font-mono max-w-xs">
                    Formatting mail payload and launching system mail application... Please confirm sending in your email client!
                  </p>
                </motion.div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
