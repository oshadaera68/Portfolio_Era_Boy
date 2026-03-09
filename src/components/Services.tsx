import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Code, Palette, Smartphone } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Code,
  Palette,
  Smartphone
};

export default function Services() {
  return (
    <section id="services" className="py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent font-mono text-sm uppercase tracking-widest mb-4 block">What I Do</span>
          <h2 className="text-5xl md:text-7xl font-bold">Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-12 rounded-3xl hover:border-accent/50 transition-all group"
              >
                <div className="w-16 h-16 bg-text/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-text/50 font-light leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
