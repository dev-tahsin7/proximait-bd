import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Workflow, Zap, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Scope & Audit',
    icon: Search,
    color: '#06B6D4',
    bg: 'from-[#06B6D4]/20 to-transparent',
    promise:
      "We diagnose your specific bottlenecks. Whether it's a full React web architecture or a complex backend Python workflow, we map out the exact technical requirements first.",
  },
  {
    title: 'The Blueprint',
    icon: Workflow,
    color: '#06B6D4',
    bg: 'from-[#06B6D4]/20 to-transparent',
    promise:
      'No guessing. You receive a clear, technical plan for approval—high-fidelity wireframes for WebApps and detailed logic maps for automation—before a single line of code is written.',
  },
  {
    title: 'Precision Execution',
    icon: Zap,
    color: '#06B6D4',
    bg: 'from-[#06B6D4]/20 to-transparent',
    promise:
      'Deep work mode. Our developers forge clean, scalable code and connect your APIs strictly according to the approved architectural blueprint. Nothing shakes.',
  },
  {
    title: 'Deployment & Scale',
    icon: Rocket,
    color: '#06B6D4',
    bg: 'from-[#06B6D4]/20 to-transparent',
    promise:
      'We stress-test, render, and deploy. You receive a bug-free interface and a running backend automation engine ready to handle high-pressure traffic.',
  },
];

const ProcessTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-20 bg-[#0B0F19] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/60"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 space-y-8">
        <motion.div
          className="space-y-3 text-center"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={item}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.18em] text-white/70"
          >
          ENGINEERING PROTOCOL
          </motion.div>
          <motion.h2 className="text-3xl md:text-4xl font-bold" variants={item}>
            The Proxima Standard.
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
            variants={item}
          >
            We don&apos;t guess. We architect. Every digital ecosystem we deploy follows a strict, 4-step mechanical protocol.
          </motion.p>
        </motion.div>

        {/* Connector line */}
        <div className="relative hidden lg:block">
          <div className="absolute left-0 right-0 top-10 h-1.5 rounded-full bg-[#111827] opacity-80"></div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Desktop row */}
          <motion.div
            className="hidden lg:grid grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                variants={item}
                className="relative rounded-2xl border border-[#111827] bg-[#020617] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 group"
                style={{ '--hover-color': step.color } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = step.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div
                  className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-[#020617] border-2 flex items-center justify-center"
                  style={{ borderColor: step.color }}
                >
                  <step.icon size={22} style={{ color: step.color }} />
                </div>
                <div className="space-y-3 mt-8">
                  <p
                    className="text-xs uppercase tracking-[0.18em]"
                    style={{ color: step.color }}
                  >
                    Step 0{idx + 1}
                  </p>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-white/75 leading-relaxed">{step.promise}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile vertical timeline */}
          <motion.div
            className="lg:hidden relative border-l border-[#111827] pl-6 space-y-6"
            variants={container}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            >
            <div className="absolute left-2 top-0 bottom-0 w-1 rounded-full bg-[#111827] opacity-80"></div>
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                variants={item}
                className="relative rounded-2xl border border-[#111827] bg-[#020617] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.6)] transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = step.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div
                  className="absolute -left-8 top-4 h-10 w-10 rounded-full border-2 flex items-center justify-center bg-[#020617]"
                  style={{ borderColor: step.color }}
                >
                  <step.icon size={20} style={{ color: step.color }} />
                </div>
                <div className="space-y-2">
                  <p
                    className="text-xs uppercase tracking-[0.18em]"
                    style={{ color: step.color }}
                  >
                    Step 0{idx + 1}
                  </p>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-white/75 leading-relaxed">{step.promise}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;

