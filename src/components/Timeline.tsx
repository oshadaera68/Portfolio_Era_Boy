import React from 'react';
import { motion } from 'motion/react';
import { TIMELINE } from '../constants';

export default function Timeline() {
  return (
    <section className="py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-bold">The Journey</h2>
          <p className="max-w-md text-text/50 font-light">
            A timeline of my professional growth and the milestones that have shaped my career as a developer.
          </p>
        </div>

        <div className="space-y-12">
          {TIMELINE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 pb-12 border-b border-border hover:border-accent/50 transition-colors"
            >
              <div className="text-accent font-mono text-lg">{item.year}</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-text/40 uppercase tracking-widest text-sm mb-4">{item.company}</p>
                <p className="text-text/60 font-light leading-relaxed max-w-3xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
