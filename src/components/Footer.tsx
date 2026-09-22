import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white/60 text-[10px] uppercase py-12 px-4 sm:px-6 lg:px-8 border-t border-white/20 font-mono tracking-[0.2em]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center space-x-2">
          <span className="text-white font-black text-xs">NIUXVERSE</span>
          <span className="text-white/40">/</span>
          <span className="text-white/70 font-semibold text-[10px] tracking-[0.2em]">KING OF INTELLIGENCE</span>
        </div>

        {/* Ecosystem External Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[10px]">
          <a
            href="https://schoolofintelligenze.ai.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors flex items-center space-x-1"
          >
            <span>School of Intelligenze</span>
            <ArrowUpRight className="w-3 h-3 text-orange-400" />
          </a>
          <span className="text-white/20">·</span>
          <a
            href="https://seedintelligenze.ai.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors flex items-center space-x-1"
          >
            <span>SeedIntelligenze (AI Marketing)</span>
            <ArrowUpRight className="w-3 h-3 text-orange-400" />
          </a>
        </div>

        <div>
          <span>© {new Date().getFullYear()} NWAEZE DAVID. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  );
};

