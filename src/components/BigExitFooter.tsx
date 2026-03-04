import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const BigExitFooter = () => {
  return (
    <section className="bg-[#0B0F19] text-white">
      {/* Big Exit CTA */}
      <div
        className="relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, rgba(15, 23, 42, 1) 70%)',
        }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 text-center space-y-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00E5FF] text-[#00E5FF] text-xs uppercase tracking-[0.18em]">
            LIMITED DEPLOYMENT CAPACITY FOR Q1 2026
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Stop Managing Tools. Start Commanding Scale.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
          >
            The operational bottleneck ends here. You are one architectural blueprint away from eliminating friction. Let's diagnose your current tech stack and map out the exact infrastructure required for your growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-3"
          >
            <a
              href="https://calendly.com/business-tahsinahm/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-semibold text-black bg-[#00E5FF] border-2 border-[#00E5FF] hover:bg-[#00c6dd] hover:border-[#00c6dd] transition-all duration-200"
            >
              Book Engineering Audit ↗
            </a>
            <p className="text-sm text-white/60">
              Strictly for scaling founders and enterprise platforms ready for high-performance architecture.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src="/assets/icon.png" alt="Proxima IT Logo" className="h-10 w-10 rounded-xl object-cover" />
              <div>
                <p className="text-lg font-semibold text-white">Proxima IT</p>
                <p className="text-sm text-white/60">The Ecosystem Behind Your Growth.</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.14em] text-white/60">Quick Links</p>
            <div className="flex flex-wrap gap-3 text-sm text-white/80">
              <a href="#ecosystem" className="hover:text-white">Services</a>
              <a href="#process" className="hover:text-white">Process</a>
              <a href="#comparison" className="hover:text-white">Why We?</a>
              <a href="#founders-note" className="hover:text-white">Founder Note</a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.14em] text-white/60">Connect</p>
            <div className="flex items-center gap-3 text-white">
              <a href="https://www.linkedin.com/company/the-proxima-it/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10">
                <Linkedin size={18} />
              </a>
              <a href="mailto:business.tahsinahm@gmail.com" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10">
                <Mail size={18} />
              </a>
              <a
                href="https://wa.me/qr/DUO64QXSGOPFF1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10"
              >
                <svg
                  viewBox="0 0 32 32"
                  width="18"
                  height="18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.295.586 4.54 1.701 6.534L2.667 29.333l6.936-1.67A13.27 13.27 0 0 0 16 29.333c7.364 0 13.333-5.97 13.333-13.333C29.333 8.636 23.364 2.667 16 2.667Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.995 18.662c-.246-.123-1.45-.716-1.675-.798-.224-.082-.388-.123-.552.123-.164.246-.634.798-.777.962-.143.164-.286.184-.532.061-.246-.123-1.038-.383-1.977-1.221-.73-.65-1.223-1.452-1.366-1.698-.143-.246-.015-.378.108-.501.11-.11.246-.286.368-.43.123-.143.164-.246.246-.41.082-.164.041-.307-.02-.43-.061-.123-.552-1.33-.756-1.822-.2-.479-.402-.414-.552-.422l-.47-.01c-.163 0-.429.062-.654.307-.225.246-.857.838-.857 2.044 0 1.207.878 2.373 1 2.537.123.164 1.728 2.64 4.185 3.703.584.252 1.04.403 1.396.516.586.186 1.12.16 1.542.097.471-.071 1.45-.593 1.654-1.166.204-.573.204-1.064.143-1.166-.061-.102-.224-.164-.47-.287Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
            <p className="text-sm text-white/60">© 2025 Proxima IT. Built for Scale.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigExitFooter;

