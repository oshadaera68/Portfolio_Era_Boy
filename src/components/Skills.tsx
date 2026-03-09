import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';

export default function Skills() {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-32 bg-surface text-surface-text">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-accent font-mono text-sm uppercase tracking-widest mb-4 block">Expertise</span>
          <h2 className="text-5xl md:text-7xl font-bold text-surface-text">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-xl font-bold mb-8 uppercase tracking-widest border-b border-surface-text/10 pb-4 text-surface-text">
                {category}
              </h3>
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-xs font-mono text-surface-text/40">{skill.level}%</span>
                    </div>
                    <div className="h-[2px] w-full bg-surface-text/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
