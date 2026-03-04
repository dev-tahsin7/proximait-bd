import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, XCircle } from 'lucide-react';

const rows = [
  {
    label: 'Strategy',
    leftTitle: 'Order-Takers',
    leftDesc: 'They wait for instructions and close tickets.',
    rightTitle: 'Lead Architects',
    rightDesc: 'We diagnose the bottleneck and map the logic before we code.',
  },
  {
    label: 'Technology',
    leftTitle: 'Fragile Templates',
    leftDesc: 'Bloated plugins and rigid themes that break at scale.',
    rightTitle: 'Custom Infrastructure',
    rightDesc: 'React, Laravel, and Python code forged for high-pressure traffic.',
  },
  {
    label: 'Execution',
    leftTitle: 'Siloed Communication',
    leftDesc: "Frontend and backend teams don't talk. Timelines stall.",
    rightTitle: 'Unified Partnership',
    rightDesc: 'A dedicated engineering arm integrated directly into your Slack.',
  },
  {
    label: 'Outcome',
    leftTitle: 'Isolated Projects',
    leftDesc: 'Static code that instantly begins to depreciate.',
    rightTitle: 'Growth Ecosystems',
    rightDesc: 'A 24/7 revenue-generating machine built for mechanical precision.',
  },
];

const Comparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="comparison"
      ref={ref}
      className="relative py-16 md:py-20 bg-[#0A0A0A] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/70"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 space-y-6">
        <motion.div
          className="space-y-3 text-center"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4" variants={item}>
            Why Visionaries Switch to Proxima.
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-4"
            variants={item}
          >
            The difference between &quot;stacking software&quot; and &quot;engineering an ecosystem.&quot;
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-3"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header row - Desktop */}
          <motion.div
            variants={item}
            className="hidden md:grid grid-cols-[0.9fr_1fr_1fr] items-center border-b border-white/10 pb-4"
          >
            <div></div>
            <div className="flex items-center gap-2 text-white/60 text-xs uppercase tracking-[0.16em]">
              <XCircle size={16} className="text-red-300/70" />
              Fragmented Agencies
            </div>
            <div className="flex items-center gap-2 justify-start text-xs uppercase tracking-[0.16em] flex-wrap">
              <Check size={16} className="text-[#00E5FF]" />
              <span className="text-white font-semibold">Proxima Architecture</span>
              <span className="ml-2 px-2 py-1 rounded-full text-[10px] font-bold bg-[#020617] border border-[#1F2937] text-[#00E5FF] whitespace-nowrap">
              ELITE STANDARD
              </span>
            </div>
          </motion.div>

          {/* Header row - Mobile */}
          <motion.div
            variants={item}
            className="md:hidden space-y-3 border-b border-white/10 pb-4"
          >
            <div className="flex items-center gap-2 text-white/60 text-xs uppercase tracking-[0.16em]">
              <XCircle size={14} className="text-red-300/70" />Fragmented Agencies
            </div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] flex-wrap">
              <Check size={14} className="text-[#00E5FF]" />
              <span className="text-white font-semibold">Proxima Architecture</span>
              <span className="ml-2 px-2 py-1 rounded-full text-[10px] font-bold bg-[#020617] border border-[#1F2937] text-[#00E5FF] whitespace-nowrap">
              ELITE STANDARD
              </span>
            </div>
          </motion.div>

          {/* Data rows */}
          <div className="space-y-4 md:space-y-4">
            {rows.map((row) => (
              <motion.div
                key={row.label}
                variants={item}
                className="grid grid-cols-1 md:grid-cols-[0.9fr_1fr_1fr] gap-4 md:gap-6 items-start pb-4 border-b border-white/5 last:border-0 last:pb-0 relative"
              >
                {/* Desktop divider */}
                <div className="hidden md:block absolute left-[58%] top-2 bottom-2 w-px bg-white/10"></div>

                {/* Label - Desktop */}
                <div className="hidden md:block space-y-1">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/50">{row.label}</p>
                </div>

                {/* Mobile: Label + Left Column */}
                <div className="md:hidden space-y-3 pb-3 border-b border-white/5">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/50 font-semibold">{row.label}</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white/75">
                      <XCircle size={14} className="text-red-300/70 flex-shrink-0" />
                      <span>{row.leftTitle}</span>
                    </div>
                    <p className="text-sm text-white/60 pl-6">{row.leftDesc}</p>
                  </div>
                </div>

                {/* Left Column - Desktop */}
                <div className="hidden md:block space-y-1 pr-4 md:pr-8 text-white/65">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white/75">
                    <XCircle size={16} className="text-red-300/70" />
                    {row.leftTitle}
                  </div>
                  <p className="text-sm text-white/60">{row.leftDesc}</p>
                </div>

                {/* Right Column - Mobile */}
                <div className="md:hidden space-y-1 pt-2">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Check
                      size={14}
                      className="text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.25)] flex-shrink-0"
                    />
                    <span className="text-white">{row.rightTitle}</span>
                    <Check size={12} className="text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.18)] flex-shrink-0" />
                  </div>
                  <p className="text-sm text-white/85 pl-6">
                    {row.rightDesc}
                  </p>
                </div>

                {/* Right Column - Desktop */}
                <div className="hidden md:block space-y-1 pl-4 md:pl-8 relative">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Check
                      size={16}
                      className="text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.25)]"
                    />
                    <span className="text-white">{row.rightTitle}</span>
                    <Check size={14} className="text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.18)]" />
                  </div>
                  <p className="text-sm text-white/85">
                    {row.rightDesc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;

