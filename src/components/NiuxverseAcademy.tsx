import React from 'react';
import { ArrowUpRight, GraduationCap, Mic2, Sparkles, MessageCircle, ExternalLink, Globe, Cpu } from 'lucide-react';
import { ACADEMY_DATA, SEED_INTELLIGENZE_DATA } from '../data/content';

export const NiuxverseAcademy: React.FC = () => {
  return (
    <section id="academy" className="py-24 bg-black text-white border-b border-orange-500/20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/20">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-[0.3em] text-orange-400 font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>{ACADEMY_DATA.academyBadge}</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-sans">
              {ACADEMY_DATA.name}
            </h2>
            <p className="text-orange-400 text-sm sm:text-base font-mono uppercase tracking-[0.2em] font-semibold">
              {ACADEMY_DATA.tagline}
            </p>
          </div>

          {/* Direct Website Link Button */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={ACADEMY_DATA.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit School of Intelligenze website"
              className="inline-flex items-center space-x-2 px-5 py-3 border border-orange-500/70 bg-orange-500/10 hover:bg-orange-500 hover:text-black text-orange-300 text-xs font-mono uppercase tracking-[0.2em] font-bold transition-all group"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{ACADEMY_DATA.websiteDisplay}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Core Academy Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column (7 cols): Founder & Core Philosophy */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            {/* Founder Block */}
            <div className="p-6 sm:p-8 border border-white/20 bg-neutral-950 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-orange-400 font-bold flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  {ACADEMY_DATA.foundedBy.label}
                </span>
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
                  EDUCATIONAL PLATFORM
                </span>
              </div>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal">
                {ACADEMY_DATA.foundedBy.description}
              </p>
            </div>

            {/* Core Philosophy Block */}
            <div className="p-6 sm:p-8 border border-orange-500/30 bg-white/[0.02] space-y-6 flex-grow">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-orange-400 font-bold">
                  {ACADEMY_DATA.corePhilosophy.label}
                </span>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  COGNITIVE SOVEREIGNTY
                </span>
              </div>

              <blockquote className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white leading-snug font-sans">
                "{ACADEMY_DATA.corePhilosophy.statement}"
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {ACADEMY_DATA.corePhilosophy.pillars.map((pillar, idx) => (
                  <div key={idx} className="p-3 border border-white/10 bg-black/40 space-y-1">
                    <span className="text-[10px] font-mono text-orange-500 font-bold block">
                      0{idx + 1}
                    </span>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-white/70 leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Conversations & Inquiry / Flagship Show */}
          <div className="lg:col-span-5 border border-white/20 bg-neutral-950 p-6 sm:p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/50">
                  <span>{ACADEMY_DATA.interviewSeries.sectionLabel}</span>
                  <span className="text-orange-500 font-bold">·</span>
                  <span className="text-orange-400">{ACADEMY_DATA.interviewSeries.seriesType}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight flex items-center gap-3">
                  <Mic2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span>{ACADEMY_DATA.interviewSeries.title}</span>
                </h3>
              </div>

              <div className="p-5 border border-white/10 bg-black/60 space-y-3">
                <p className="text-sm sm:text-base font-semibold italic text-white/90 leading-relaxed">
                  "{ACADEMY_DATA.interviewSeries.quote}"
                </p>
                <div className="text-[10px] font-mono text-white/50 uppercase tracking-widest pt-2 border-t border-white/10">
                  HOSTED BY NWAEZE DAVID // THE KING OF INTELLIGENCE
                </div>
              </div>

              {/* Host & Guest Invitation Specs */}
              <div className="space-y-2 text-xs font-mono text-white/70">
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">→</span>
                  <span>Interviews with researchers, builders, ethicists & creators</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">→</span>
                  <span>Exploring human cognitive sovereignty in the age of synthetic AI</span>
                </div>
              </div>
            </div>

            {/* Actions for the Show */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={ACADEMY_DATA.interviewSeries.recommendGuestWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Recommend a Guest for The School of Intelligenze Show via WhatsApp"
                className="w-full py-4 bg-orange-500 hover:bg-orange-400 text-black font-black text-xs uppercase tracking-[0.18em] transition-colors flex items-center justify-center space-x-2 font-mono"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Recommend a Guest</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={ACADEMY_DATA.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 border border-white/30 hover:border-white text-white text-center text-xs font-mono uppercase tracking-[0.15em] font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <span>Visit {ACADEMY_DATA.websiteDisplay}</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/60" />
              </a>
            </div>
          </div>
        </div>

        {/* SeedIntelligenze Spotlight Card */}
        <div className="p-6 sm:p-8 border border-white/20 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-orange-400 font-bold">
              <Cpu className="w-3.5 h-3.5" />
              <span>ECOSYSTEM VENTURE & MARKETING</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              {SEED_INTELLIGENZE_DATA.name}
            </h3>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              <strong className="text-white font-bold">{SEED_INTELLIGENZE_DATA.name}</strong> is an <span className="text-orange-400 font-semibold">AI-powered marketing agency</span> dedicated to scaling visionary brands with intelligent growth systems and synthetic-human collaborative marketing.
            </p>
          </div>

          <a
            href={SEED_INTELLIGENZE_DATA.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit SeedIntelligenze AI powered marketing agency website"
            className="inline-flex items-center space-x-2 px-6 py-4 border border-white/30 hover:border-orange-500 bg-white/5 hover:bg-orange-500 hover:text-black text-white text-xs font-mono uppercase tracking-[0.2em] font-bold transition-all flex-shrink-0 group"
          >
            <Globe className="w-3.5 h-3.5 text-orange-400 group-hover:text-black" />
            <span>{SEED_INTELLIGENZE_DATA.websiteDisplay}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
