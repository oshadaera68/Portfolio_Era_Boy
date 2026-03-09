import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-text/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4"
          >
            Creative Developer & Designer
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[15vw] md:text-[12vw] leading-[0.85] font-sans font-bold tracking-tighter uppercase mb-8"
          >
            Oshada<br />
            <span className="text-text/20">Eranga</span>
          </motion.h1>

          <div className="flex flex-col items-center justify-center w-full gap-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="max-w-2xl text-lg text-text/60 font-light leading-relaxed"
            >
              Aspiring Full Stack Developer | B.Eng (Hons) Software Engineering @ IIT | Building Modern Applications | Youtuber | Subtitle Contributer at Baiscope.lk
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-4"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 text-sm uppercase tracking-widest font-bold border-b border-border pb-2 hover:border-accent transition-all"
              >
                View Projects
                <ArrowDownRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Brand Watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute -bottom-20 -right-20 text-[40vw] font-sans font-bold pointer-events-none"
      >
        EB
      </motion.div>
    </section>
  );
}
