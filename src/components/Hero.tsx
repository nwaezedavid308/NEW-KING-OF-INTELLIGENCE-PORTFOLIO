import React from 'react';
import { ArrowDown, ArrowUpRight, Compass } from 'lucide-react';
import { PERSONAL_BIO } from '../data/content';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] bg-black text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden border-b border-white/20"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/[0.04] via-transparent to-transparent pointer-events-none" />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto w-full my-auto py-12">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-orange-400 font-bold">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-orange-500" />
              <span>Hello & Welcome</span>
              <span className="text-white/30 hidden sm:inline">|</span>
              <span className="text-white/70 hidden sm:inline">Human-Centered Designer & Strategist</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-[96px] font-black tracking-tight uppercase leading-[0.92] text-white font-sans">
              Nwaeze David <br />
              <span className="text-orange-500">The King Of</span> Intelligence
            </h1>
          </div>

          {/* Philosophy Creed */}
          <div className="border-l-2 border-orange-500 pl-4 sm:pl-6 space-y-2">
            <p className="text-lg sm:text-2xl font-bold text-white leading-snug">
              "{PERSONAL_BIO.niuxverseDefinition}"
            </p>
            <p className="text-xs font-mono uppercase tracking-wider text-orange-400">
              — Nwaeze David // The Niuxverse Creed
            </p>
          </div>

          {/* Warm, Relatable Human Bio */}
          <p className="text-base sm:text-xl text-white/80 max-w-3xl leading-relaxed font-normal">
            I am a designer with roots in pharmacy and public health. I take powerful technologies like AI and turn them into clean, friendly digital products that solve real everyday problems — keeping people calm, confident, and in control.
          </p>

          {/* Ventures Strip in Human Language */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono text-white/80">
            <div className="p-4 border border-white/15 bg-white/[0.02] space-y-1">
              <span className="text-orange-400 font-bold text-[10px] uppercase block tracking-wider">Venture 01</span>
              <p className="text-white font-bold text-sm">Niuxverse Solutions</p>
              <p className="text-white/60 text-[11px] font-sans">Designing simple, human-friendly interfaces for AI & software.</p>
            </div>
            <div className="p-4 border border-white/15 bg-white/[0.02] space-y-1">
              <span className="text-orange-400 font-bold text-[10px] uppercase block tracking-wider">Venture 02</span>
              <p className="text-white font-bold text-sm">School of Intelligenze</p>
              <p className="text-white/60 text-[11px] font-sans">Mentoring curious minds to think deeply and flourish alongside AI.</p>
            </div>
            <div className="p-4 border border-white/15 bg-white/[0.02] space-y-1">
              <span className="text-orange-400 font-bold text-[10px] uppercase block tracking-wider">Venture 03</span>
              <p className="text-white font-bold text-sm">SeedIntelligenze</p>
              <p className="text-white/60 text-[11px] font-sans">AI-powered marketing that helps good businesses grow.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <button
              onClick={() => scrollTo('works')}
              className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-black text-xs uppercase tracking-[0.15em] font-black transition-all cursor-pointer flex items-center space-x-3 font-mono"
            >
              <span>See What I've Built</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('philosophy')}
              className="px-8 py-4 border border-white/40 text-white text-xs uppercase tracking-[0.15em] font-bold hover:border-white hover:bg-white/10 transition-all cursor-pointer flex items-center space-x-3 font-mono"
            >
              <Compass className="w-4 h-4 text-orange-400" />
              <span>How I Think & Design</span>
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 border border-white/20 text-white/80 text-xs uppercase tracking-[0.15em] font-bold hover:border-white hover:text-white transition-all cursor-pointer flex items-center space-x-2 font-mono"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Ribbon */}
      <div className="max-w-7xl mx-auto w-full pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/60">
        <div className="flex items-center space-x-3">
          <span className="text-orange-500 font-bold">●</span>
          <span>Healthcare Empathy · Clear Design · Honest Technology</span>
        </div>

        <button
          onClick={() => scrollTo('who-is')}
          className="flex items-center space-x-2 text-white hover:text-orange-400 transition-colors cursor-pointer"
        >
          <span>Learn more about me</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
