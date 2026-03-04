import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AlertTriangle, RefreshCw, Link2Off } from 'lucide-react';

const FoundersTrap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = (delay: number) => ({
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay },
    },
  });

  const items = [
    {
      title: 'The Friction Trap',
      icon: AlertTriangle,
      description:
        'Your digital storefront is built on bloated templates, not custom architecture. High-friction UIs and slow load times are causing you to lose enterprise deals before you ever get on a call.',
    },
    {
      title: 'The Operational Bottleneck',
      icon: RefreshCw,
      description:
        'You are scaling, but your backend operations are manual. Your team is wasting 20+ hours a week moving data between fragmented tools, APIs, and CRMs instead of driving revenue.',
    },
    {
      title: 'The Tech Debt Trap',
      icon: Link2Off,
      description:
        "Your frontend doesn't communicate natively with your backend. You are stacking plugins and isolated subscriptions to hold the system together. When high-pressure traffic hits, the architecture shakes.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 bg-[#0B0F19] text-white overflow-hidden"
      id="why-proxima-it"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-4"
        >
          <motion.h2
            variants={card(0)}
            className="text-3xl md:text-4xl font-bold"
          >
            Fragmented systems create fragile growth.
          </motion.h2>
          <motion.p
            variants={card(0.1)}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            You don&apos;t have a vision problem. You have an infrastructure bottleneck. Here is why your scale is stalling:
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={card(idx * 0.2)}
              className="group relative p-6 rounded-2xl border border-[#111827] bg-[#020617] shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-2 hover:border-[#1f2937]"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#020617] border border-[#1f2937] text-white/80 transition-all duration-300 group-hover:border-[#06B6D4]">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FoundersTrap;

