import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FoundersNote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="founders-note"
      ref={ref}
      className="relative py-20 bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left Column - Founder Photo */}
          <motion.div variants={item} className="relative">
            <div className="relative group">
              {/* Glowing Cyan Ring Backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#A8F5E8]/20 via-[#A8F5E8]/10 to-transparent rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              
              {/* Photo Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                <img
                  src="/assets/ceo.png"
                  alt="Founder"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full aspect-[3/4] bg-gradient-to-br from-[#4A3A8C]/30 to-[#FF7A5C]/20 flex items-center justify-center text-white/40 text-sm">Founder Photo</div>';
                    }
                  }}
                />
                
                {/* Glass Badge - EST. 2025 */}
                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/20">
                  <p className="text-xs font-bold text-white uppercase tracking-[0.12em]">Tahsin Ahmad</p>
                  <p className="text-[10px] text-white/70 uppercase tracking-[0.1em] mt-0.5">Founder & CEO</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Manifesto */}
          <motion.div variants={item} className="space-y-6">
            {/* Eyebrow Tag */}
            <motion.div
              variants={item}
              className="inline-block"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8F5E8]">
                FROM THE DESK OF THE FOUNDER
              </p>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              We Build the Agency I Wish I Could Have Hired.
            </motion.h2>

            {/* Body Text */}
            <motion.div
              variants={item}
              className="space-y-4 text-gray-400 leading-relaxed"
            >
              <p className="text-base md:text-lg">
                <span className="text-white/90 font-medium">
                  As an engineer and founder, I saw the same pattern repeatedly: ambitious businesses stuck choosing between unreliable freelancers who ghosted them, or bloated corporate agencies that moved too slowly.
                </span>
              </p>
              <p className="text-base md:text-lg">
                I built Proxima IT to fill that gap. We combine engineering-grade rigor with the speed and agility of a startup. We don&apos;t just want to complete a ticket for you; we want to be the technical partner you trust with your growth infrastructure for the next five years.
              </p>
            </motion.div>

            {/* Signature Block */}
            <motion.div
              variants={item}
              className="pt-4 space-y-2"
            >
              {/* Signature Image Placeholder - You can add your signature image here */}
              <div className="h-12 w-48 mb-4 opacity-60">
                {/* Uncomment and update path when you have signature image */}
                {/* <img src="/assets/signature.png" alt="Signature" className="h-full w-auto object-contain" /> */}
              </div>
              
              <p className="text-lg font-bold text-white">
                Tahsin Ahmad
              </p>
              <p className="text-sm text-[#A8F5E8]">
                Founder & CEO, Proxima IT
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FoundersNote;
