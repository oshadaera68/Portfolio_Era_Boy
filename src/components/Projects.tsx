import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-accent font-mono text-sm uppercase tracking-widest mb-4 block">Portfolio</span>
            <h2 className="text-5xl md:text-7xl font-bold">Selected Works</h2>
          </div>
          <p className="max-w-xs text-text/50 text-sm font-light">
            A collection of projects that demonstrate my technical skills and creative problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-glass-bg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <a
                    href={project.link}
                    className="w-16 h-16 bg-surface rounded-full flex items-center justify-center text-surface-text hover:bg-accent hover:text-white transition-all transform scale-0 group-hover:scale-100 duration-500"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 border border-border rounded-full text-text/40">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-text/50 font-light">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
