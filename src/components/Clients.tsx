import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clients = [
    { name: "Streamersden", logo: <img src="/assets/l3.jpg" alt="Streamersden logo" className="w-full h-full object-contain" /> },
    { name: "Heptagon BD", logo: <img src="/assets/l1.jpg" alt="logo" className="w-full h-full object-contain" /> },
    { name: "Lifeline IT", logo: <img src="/assets/l5.png" alt="Lifeline IT logo" className="w-full h-full object-contain" /> },
    { name: "LoopNest", logo: <img src="/assets/l2.png" alt="LoopNest logo" className="w-full h-full object-contain" /> },
    { name: "PastryPallate", logo: <img src="/assets/l8.jpeg" alt="The pastrypallate logo" className="w-full h-full object-contain" /> },
    { name: "Imran Academy", logo: <img src="/assets/l6.jpeg" alt="Imran Academy logo" className="w-full h-full object-contain" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid-light opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by 
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to work with innovative companies of all sizes, from startups to enterprises.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          variants={containerVariants}
          animate={isInView ? "visible" : "hidden"}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center justify-center p-6"
              variants={logoVariants}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-xl">{client.logo}</span>
              </div>
              <span className="text-gray-700 font-semibold text-center group-hover:text-blue-600 transition-colors duration-300">
                {client.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full px-8 py-4 border border-blue-100">
            <div className="flex -space-x-2">
              {[
                "/assets/l3.jpg",
                "/assets/l1.jpg", 
                "/assets/l5.png",
                "/assets/l2.png"
              ].map((src, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <img 
                    src={src}
                    alt={`Client ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-gray-700 font-semibold">Join 15+ satisfied clients</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;