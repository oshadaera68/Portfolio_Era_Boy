import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-surface text-surface-text">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-text/5 rounded-2xl overflow-hidden">
              <img
                src="./about-me.jpeg"
                alt="Oshada Eranga"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent rounded-full flex items-center justify-center text-white font-sans italic text-xl">
              Est. 2019
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-mono text-sm uppercase tracking-widest mb-4 block">About Me</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-surface-text">
              Crafting Digital <br />
              <span className="italic font-normal">Excellence</span>
            </h2>
            <p className="text-xl text-surface-text/70 font-light leading-relaxed mb-8">
              I am Oshada Eranga, an aspiring Full Stack Developer currently pursuing a B.Eng (Hons) in Software Engineering at the Informatics Institute of Technology (IIT). 
              I am dedicated to building modern, high-performance applications that solve real-world problems. 
              Beyond coding, I am a YouTuber and a Subtitle Contributor at Baiscope.lk, blending my technical skills with a passion for creative content and community contribution.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-2xl mb-2 text-surface-text">5+</h4>
                <p className="text-sm uppercase tracking-widest text-surface-text/50">Years Experience</p>
              </div>
              <div>
                <h4 className="font-bold text-2xl mb-2 text-surface-text">50+</h4>
                <p className="text-sm uppercase tracking-widest text-surface-text/50">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
