import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 bg-bg border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-sans font-bold tracking-tighter text-text">
          EB<span className="text-accent">.</span>
        </div>
        
        <p className="text-text/30 text-sm font-light">
          © {new Date().getFullYear()} Oshada Eranga. All rights reserved.
        </p>

        <div className="flex gap-8">
          <a href="#" className="text-xs uppercase tracking-widest text-text/40 hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs uppercase tracking-widest text-text/40 hover:text-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
