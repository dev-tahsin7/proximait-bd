import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Smartphone, Search, Zap, Globe, Shield, Lightbulb, Wrench} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Tailored websites built with modern technologies for optimal performance and user experience.",
      features: ["Frontend", "Backend", "API Integration", "Database Design", "Your Requirements"]
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.",
      features: ["Mobile Optimization", "Cross-browser Testing", "Touch-friendly UI", "Fast Loading"]
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Built-in SEO best practices to help your website rank higher in search engine results.",
      features: ["Technical SEO", "Page Speed", "Meta Optimization", "Schema Markup"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast websites that provide exceptional user experience and higher conversions.",
      features: ["Code Splitting", "Image Optimization", "Caching Strategies", "CDN Integration"]
    },
    {
      icon: Globe,
      title: "E-commerce Solutions",
      description: "Complete online stores with secure payment processing and inventory management.",
      features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics"]
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Ongoing security updates and maintenance to keep your website safe and running smoothly.",
      features: ["SSL Certificates", "Regular Backups", "Security Monitoring", "Updates & Patches"]
    },
    {
      icon: Lightbulb,
      title: "Any Kind of Solutions",
      description: "Your vision is our execution. We will provide you with the best solutions for your business.",
      features: ["Best Performance", "24/7 Support", "Best value for money", "Lifetime service"]
    },
    {
      icon: Wrench,
      title: "WordPress",
      description: "We provide A-Z wordpress service. From theme edit to development.",
      features: ["Best Performance", "Theme Edit", "Theme Development", "Plugin Development", "A-Z Support"]
    }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Web Development 
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}Services
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development solutions designed to elevate your business and deliver exceptional results.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="bg-gradient-to-br from-blue-400 to-cyan-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {React.isValidElement(service.icon) ? service.icon : <service.icon className="text-white" size={28} />}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-blue-100 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-blue-200">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss your requirements and create a custom solution that exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href = "https://wa.me/qr/DUO64QXSGOPFF1"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Consultation
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;