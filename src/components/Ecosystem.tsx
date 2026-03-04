import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Server, Zap, Gauge } from 'lucide-react';

const Ecosystem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="ecosystem"
      ref={ref}
      className="relative py-20 bg-[#0B0F19] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/60"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 space-y-6">
        <motion.div
          className="space-y-3 text-center"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            variants={card}
          >
            Unified Infrastructure. Two Core Pillars.
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
            variants={card}
          >
            We don&apos;t build isolated projects. We engineer the exact ecosystem required for massive scale.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* WebApp Pillar */}
          <motion.div
            variants={card}
            className="rounded-3xl border border-[#111827] bg-[#0A0A0A] p-6 flex flex-col justify-between shadow-[0_24px_80px_rgba(0,0,0,0.7)] hover:-translate-y-2 hover:border-[#06B6D4] transition-all duration-300 h-full"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#020617] border border-[#1f2937] text-white/80">
                  <Code2 size={22} />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.24em] text-[#06B6D4] uppercase">
                    /// THE FRONT-FACING ENGINE
                  </p>
                  <h3 className="text-xl font-semibold">Custom Web Architecture</h3>
                </div>
              </div>
              <p className="text-white/75 leading-relaxed">
                We replace bloated templates and fragile plugins with unified digital ecosystems. Using fluid React frontends and robust Laravel backbones, we build interfaces that command absolute authority and operate with zero-reload friction.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-[#1f2937] bg-[#111827] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-8 rounded-lg bg-black/60 border border-[#1f2937] flex items-center justify-center">
                  <Server className="text-white/80" size={18} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-white/60">Status</p>
                  <p className="text-sm font-semibold text-white">Sub-Second Load Times</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-6 rounded-full bg-emerald-400"></span>
                <span className="h-1.5 w-3 rounded-full bg-emerald-400/40"></span>
              </div>
            </div>
          </motion.div>

          {/* Automation Pillar */}
          <motion.div
            variants={card}
            className="rounded-3xl border border-[#111827] bg-[#0A0A0A] p-6 flex flex-col justify-between shadow-[0_24px_80px_rgba(0,0,0,0.7)] hover:-translate-y-2 hover:border-[#06B6D4] transition-all duration-300 h-full"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#020617] border border-[#1f2937] text-white/80">
                  <Zap size={22} />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.24em] text-[#06B6D4] uppercase">
                    /// THE INVISIBLE BRAIN
                  </p>
                  <h3 className="text-xl font-semibold">Custom Backend Automation</h3>
                </div>
              </div>
              <p className="text-white/75 leading-relaxed">
                Scale without the operational bloat. We engineer custom Python and n8n workflows that connect your fragmented APIs, sync your CRM, and eliminate manual data entry. We build the logic that saves your operations team 20+ hours a week.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-[#1f2937] bg-[#111827] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-8 rounded-lg bg-black/60 border border-[#1f2937] flex items-center justify-center">
                  <Zap className="text-white/80" size={18} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-white/60">Status</p>
                  <p className="text-sm font-semibold text-emerald-400">100% Data Sync Active</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Gauge className="text-[#06B6D4]" size={18} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ecosystem;

