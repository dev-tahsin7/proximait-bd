import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [focusWord, setFocusWord] = useState("Strategy");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const words = ["Scaling", "Growth", "Success"];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % words.length;
      setFocusWord(words[idx]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stackItems = [
    { label: "React" },
    { label: "Next.js" },
    { label: "Python" },
    { label: "n8n" },
    { label: "Django" },
    { label: "Node.js" }, 

  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white" id="hero">
      {/* Background grid + subtle motion */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-15"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-1/2 w-[40rem] -translate-x-1/2 bg-gradient-to-b from-white/[0.06] via-transparent to-white/[0.02]"
        initial={{ opacity: 0, scaleX: 0.8 }}
        animate={{ opacity: [0.3, 0.6, 0.3], scaleX: [0.8, 1, 0.9] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      {/* Navigation */}
      <div className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${scrolled ? "bg-black/70 backdrop-blur-md border-b border-white/10" : "bg-transparent"} `}>
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/icon.png" alt="Proxima IT Logo" className="h-10 w-10 rounded-xl object-cover" />
            <span className="text-lg font-semibold tracking-tight">Proxima IT</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm">
            <a href="#ecosystem" className="text-white/70 hover:text-white transition-colors duration-200">
              Services
            </a>
            <a href="#process" className="text-white/70 hover:text-white transition-colors duration-200">
              Process
            </a>
            <a href="#engineered-ecosystems" className="text-white/70 hover:text-white transition-colors duration-200">
              Projects
            </a>
            <a href="#proof-of-scale" className="text-white/70 hover:text-white transition-colors duration-200">
              Reviews
            </a>
            <a href="#comparison" className="text-white/70 hover:text-white transition-colors duration-200">
              Why We?
            </a>
            <a href="#founders-note" className="text-white/70 hover:text-white transition-colors duration-200">
              Founder Note
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <a
              className="px-4 py-2 rounded-full border border-white/60 text-white font-semibold hover:border-white transition-colors duration-200 flex items-center gap-2"
              href="https://calendly.com/business-tahsinahm/30min"
              target="blank"
            >
              Book Strategy
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-16 lg:pt-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - copy & CTAs */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur">
              <span className="text-[12px] tracking-[0.12em] text-[#A8F5E8] uppercase">INFRASTRUCTURE FOR SCALING FOUNDERS</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
              variants={itemVariants}
            >
              We <span className="text-[#06B6D4]">Engineer</span> the Digital Systems That{" "}
              <span className="text-[#06B6D4]">Scale</span> Your Business.
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
            Proxima IT is an elite engineering firm. We replace fragmented software stacks with High-Performance Web Architecture and Intelligent Automation. Focus on {focusWord}.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              {/* Primary CTA */}
              <motion.a
                href="https://calendly.com/business-tahsinahm/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#06B6D4] text-black font-semibold hover:bg-[#0891b2] transition-colors duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Engineering Audit
                <CalendarDays size={18} />
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="#ecosystem"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/30 text-white/80 font-semibold hover:border-white hover:text-white transition-colors duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                See Our Ecosystem
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>

            <motion.div className="space-y-3 pt-6" variants={itemVariants}>
              <p className="text-xs uppercase tracking-[0.18em] text-white/60">Powering Growth With:</p>
              <div className="flex flex-wrap gap-2">
                {stackItems.map((item) => (
                  <span key={item.label} className="px-3 py-2 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-white/70">
                    {item.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - structural API/dashboard visual */}
          <motion.div
            className="relative h-[480px] w-full flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-md rounded-3xl bg-[#050816] border border-white/10 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
              {/* top bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <span>Proxima Orchestrator</span>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/50 border border-white/10">
                  LIVE API
                </span>
              </div>

              {/* main layout */}
              <div className="grid grid-cols-5 gap-4">
                {/* left: metrics */}
                <div className="col-span-3 space-y-3">
                  <div className="h-24 rounded-2xl bg-white/[0.03] border border-white/10 p-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <span>Request Volume</span>
                      <span className="text-emerald-400">+38%</span>
                    </div>
                    <div className="flex items-end gap-1">
                      <div className="h-3 w-3 rounded-sm bg-[#06B6D4]/40"></div>
                      <div className="h-5 w-3 rounded-sm bg-[#06B6D4]/60"></div>
                      <div className="h-8 w-3 rounded-sm bg-[#06B6D4]"></div>
                      <div className="h-6 w-3 rounded-sm bg-[#22C55E]/70"></div>
                      <div className="h-10 w-3 rounded-sm bg-[#22C55E]"></div>
                    </div>
                  </div>

                  <div className="h-20 rounded-2xl bg-white/[0.03] border border-white/10 p-3 flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-xs text-white/60">Latency</p>
                      <p className="text-sm font-semibold text-white">63 ms avg</p>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-white/50">
                      <span className="h-1.5 w-6 rounded-full bg-emerald-400/70"></span>
                      <span className="h-1.5 w-4 rounded-full bg-emerald-400/40"></span>
                      <span className="h-1.5 w-2 rounded-full bg-emerald-400/20"></span>
                    </div>
                  </div>
                </div>

                {/* right: node connection */}
                <div className="col-span-2 space-y-3">
                  <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-3 space-y-3">
                    <p className="text-xs text-white/60">Connected Systems</p>
                    <div className="space-y-1 text-[11px] text-white/70">
                      <div className="flex items-center justify-between">
                        <span>Frontend · React</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Backend · Django</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Automation · n8n</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>DB Cluster</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-3">
                    <p className="text-xs text-white/60 mb-2">Throughput</p>
                    <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full w-3/4 rounded-full bg-[#06B6D4]"></div>
                    </div>
                    <p className="mt-2 text-[11px] text-white/50">3.2k ops / min</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center">
        <div className="flex flex-col items-center gap-3 text-white/60 text-xs">
          <div className="w-9 h-14 rounded-full border border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-3 rounded-full bg-white/50 animate-bounce"></div>
          </div>
          <span className="tracking-[0.18em] uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;