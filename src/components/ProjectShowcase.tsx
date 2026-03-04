import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      thumbnail: "./assets/carlux.png",
      title: "Carlux Automobile",
      liveLink: "https://carluxautomobile.com/",
      caseStudyLink: "#",
    },
    {
      thumbnail: "/assets/loopnest.png",
      title: "LoopNest",
      liveLink: "https://theloopnest.com/",
      caseStudyLink: "#",
    },
    {
      thumbnail: "/assets/imran.png",
      title: "Imran Academy",
      liveLink: "https://imranacademyltd.com/",
      caseStudyLink: "#",
    },
    {
      thumbnail: "/assets/myPharma.png",
      title: "My Pharma",
      liveLink: "https://bluepillc.com/",
      caseStudyLink: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="py-20 bg-[#0A0A0A] text-white relative overflow-hidden"
      ref={ref}
      id="engineered-ecosystems"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.div
          className="text-center mb-14 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.18em] text-white/70">
          ENGINEERED ECOSYSTEMS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Proof of Performance.
          </h2>
          <p className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto leading-relaxed">
            We don&apos;t just write code; we deploy revenue engines. Explore our recent enterprise and high-traffic architecture.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group rounded-[8px] bg-[#111827] border border-[#1F2937] hover:border-[#00E5FF] transition-all duration-300 relative"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              {/* Thumbnail */}
              <div className="relative h-52 overflow-hidden rounded-t-[8px]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-5">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <div className="flex flex-col sm:flex-row gap-2">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-[8px] bg-[#00E5FF] text-black text-sm font-semibold hover:bg-[#00c6dd] transition-colors duration-200"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Live Platform
                  </motion.a>

                  <motion.a
                    href={project.caseStudyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-[8px] border border-white/15 text-white/80 text-sm font-semibold hover:border-[#00E5FF] hover:text-white transition-colors duration-200"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Read Case Study
                    <ArrowUpRight size={16} />
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-[#00E5FF]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;

