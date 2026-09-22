import React, { useState } from 'react';
import { Sparkles, HeartHandshake, CheckCircle2, ChevronRight, User } from 'lucide-react';
import { PERSONAL_BIO } from '../data/content';

export const WhoIsSection: React.FC = () => {
  const [selectedTraitIndex, setSelectedTraitIndex] = useState<number>(0);

  const humanTraits = [
    {
      label: "Curiosity over ego",
      summary: "I don't pretend to know it all. I ask honest questions, test new ideas constantly, and keep an open mind."
    },
    {
      label: "Plain English & clarity",
      summary: "No confusing tech jargon. If someone needs a computer science degree to understand your app, the design failed."
    },
    {
      label: "Healthcare-level care",
      summary: "Trained in pharmacy and public health, I bring medical safety standards to tech: protecting your peace of mind and data."
    },
    {
      label: "Humans stay in charge",
      summary: "AI should act as a reliable helper and copilot, never an opaque black box that takes away your freedom or choices."
    },
    {
      label: "Real-world impact",
      summary: "I turn ambitious ideas into simple, beautiful products that people actually love opening and using every day."
    }
  ];

  return (
    <section id="who-is" className="py-24 bg-black text-white border-b border-orange-500/20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/20">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-orange-400 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A Little About Me</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-sans">
              Who is David Nwaeze?
            </h2>
          </div>
          <span className="text-xs font-mono text-white/50">
            Designer · Pharmacist · Founder
          </span>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Personal Snapshot Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="border border-orange-500/40 bg-neutral-950 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 shrink-0 border-2 border-orange-500 bg-orange-500/10 flex items-center justify-center font-mono font-black text-xl text-orange-400">
                  ND
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-bold block">
                    Meet the Founder
                  </span>
                  <h3 className="text-2xl font-black uppercase text-white font-sans mt-0.5">
                    Nwaeze David
                  </h3>
                  <p className="text-xs text-white/70 font-mono">
                    The King of Intelligence
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-white/80 leading-relaxed pt-2 border-t border-white/10 font-sans">
                <p>
                  I'm a pharmacist, public health scholar, and designer. My roots in healthcare taught me that every line of code, every patient record, and every app screen touches a real person's life.
                </p>
                <p className="text-white/60">
                  I started Niuxverse to prove that modern technology like AI can be gentle, simple, and deeply empowering instead of intimidating.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-mono">
                <div className="p-3 bg-white/5 border border-white/10 space-y-0.5">
                  <span className="text-orange-400 text-[10px] font-bold block">EDUCATION & BACKGROUND</span>
                  <span className="text-white font-medium">Pharmacist & MSc Public Health candidate</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 space-y-0.5">
                  <span className="text-orange-400 text-[10px] font-bold block">CURRENT BASE</span>
                  <span className="text-white font-medium">Lagos, Nigeria · Working with global teams</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: What I Believe & How I Work */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold block">
                The Heart of What I Do
              </span>
              <p className="text-2xl sm:text-3xl font-black text-white leading-snug font-sans">
                "Technology should feel as natural, safe, and helpful as talking with a thoughtful friend."
              </p>
            </div>

            <div className="border-y border-white/15 py-5 space-y-4 text-sm text-white/80 leading-relaxed font-sans">
              <p>
                Before I started designing digital interfaces, I spent years in clinical training. In a hospital pharmacy, patients don't care about the molecular chemistry formula; they care about feeling better, trusting the dosage, and getting back to their families.
              </p>
              <p>
                Digital products are no different. People don't want to wrestle with complex settings or drown in technical buzzwords. They want a tool that understands what they need, gets out of their way, and helps them accomplish their work with peace of mind.
              </p>
            </div>

            <div className="p-6 border border-white/20 bg-white/5 space-y-2">
              <span className="text-[11px] uppercase tracking-wider font-bold text-orange-400 font-mono block">
                My Promise as a Designer
              </span>
              <p className="text-sm text-white/90 leading-relaxed font-sans">
                Whether I'm building an AI dashboard for doctors, an interactive platform for students, or a growth system for startups, I design with care, empathy, and absolute clarity.
              </p>
            </div>
          </div>

          {/* Column 3: The Principles I Live By */}
          <div className="lg:col-span-3 border border-white/20 p-5 sm:p-6 bg-neutral-950 space-y-5">
            <h3 className="text-xs uppercase tracking-wider font-bold text-white/70 pb-3 border-b border-white/15 font-mono">
              Principles I Live By
            </h3>

            <div className="space-y-2.5">
              {humanTraits.map((trait, index) => {
                const isSelected = selectedTraitIndex === index;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedTraitIndex(index)}
                    className={`w-full text-left p-3 transition-all border cursor-pointer flex items-center justify-between text-xs ${
                      isSelected
                        ? 'border-orange-500 bg-orange-500 text-black font-bold'
                        : 'border-white/15 hover:border-white text-white/80'
                    }`}
                  >
                    <span>{trait.label}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90 text-black' : 'text-white/40'}`} />
                  </button>
                );
              })}
            </div>

            <div className="p-4 border border-white/10 text-xs text-white/80 leading-relaxed font-sans bg-white/5 space-y-1">
              <span className="text-orange-400 block text-[10px] font-mono uppercase tracking-wider font-bold">
                Why this matters:
              </span>
              <p>{humanTraits[selectedTraitIndex].summary}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
