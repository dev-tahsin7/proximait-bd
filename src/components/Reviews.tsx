import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

type VideoReview = {
  youtubeId: string;
  label: string;
};

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const videoReviews: VideoReview[] = [
    {
      youtubeId: 'H52yEk8BS1s',
      label: 'ARCHITECTURE REVIEW: Carlux Automobile',
    },
    {
      youtubeId: 'ywfNm8rZCSI?',
      label: 'ARCHITECTURE REVIEW: SAIC PAA',
    },
  ];

  return (
    <section
      id="proof-of-scale"
      className="relative py-20 bg-[#0A0A0A] text-white overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 space-y-12">
        <motion.div
          className="text-center space-y-4"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={item}
            className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.18em] text-white/70"
          >
          PROOF OF SCALE
          </motion.div>
          <motion.h2 className="text-3xl md:text-4xl font-bold" variants={item}>
            The Output of Mechanical Precision.
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white/75 max-w-4xl mx-auto leading-relaxed"
            variants={item}
          >
            We don&apos;t deal in promises. We deal in deployed architecture and measurable growth. Hear from the founders who command our ecosystems.
          </motion.p>
        </motion.div>

        {/* Video testimonials */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {videoReviews.map((v) => (
            <motion.div key={v.youtubeId} variants={item} className="space-y-3">
              <div className="rounded-2xl bg-[#111827] border border-[#00E5FF]/30 shadow-[0_18px_50px_rgba(0,229,255,0.10)] overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${v.youtubeId}?rel=0&modestbranding=1`}
                    title={v.label}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/70">
                  {v.label}
                </p>
                <ArrowUpRight className="text-white/40" size={16} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;