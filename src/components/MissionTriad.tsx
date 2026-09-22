import React, { useState } from 'react';
import { MANIFESTO_CHAPTER_1 } from '../data/content';
import { Compass, ChevronDown, ChevronUp, Layers } from 'lucide-react';

export const MissionTriad: React.FC = () => {
  const [activePillarIndex, setActivePillarIndex] = useState<number | null>(null);
  const [showAllPillars, setShowAllPillars] = useState<boolean>(false);

  const pillars = MANIFESTO_CHAPTER_1.missionPillars;
  const problem = MANIFESTO_CHAPTER_1.problemToSolve;

  return (
    <section id="mission" className="py-24 bg-black text-white border-b border-white/20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/20">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-[0.3em] text-orange-400 font-bold">
              <Compass className="w-3.5 h-3.5" />
              <span>CORE ARCHITECTURAL COMMITMENTS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-sans">
              The NIUXVERSE Mission
            </h2>
            <p className="text-white/70 text-base sm:text-lg font-medium max-w-2xl uppercase tracking-wider">
              Exploring the relationship between human intelligence and machine intelligence through three core commitments.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                setShowAllPillars(!showAllPillars);
                if (!showAllPillars) setActivePillarIndex(null);
              }}
              className="px-5 py-2.5 border border-white/40 hover:border-white text-white bg-black hover:bg-white hover:text-black transition-all font-mono text-xs uppercase tracking-[0.2em] font-bold cursor-pointer flex items-center space-x-2"
            >
              <Layers className="w-4 h-4" />
              <span>{showAllPillars ? 'Collapse All Pillars' : 'Expand All 3 Pillars'}</span>
              {showAllPillars ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Interactive Mission Control Deck / Clickable Pillar Cards */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const isSelected = activePillarIndex === idx;
              const isExpanded = showAllPillars || isSelected;

              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (showAllPillars) {
                      setShowAllPillars(false);
                      setActivePillarIndex(idx);
                    } else {
                      setActivePillarIndex(isSelected ? null : idx);
                    }
                  }}
                  className={`p-6 sm:p-8 border transition-all cursor-pointer flex flex-col justify-between space-y-6 ${
                    isExpanded
                      ? 'border-white bg-white/5 ring-1 ring-white/50'
                      : 'border-white/20 bg-black hover:border-white/60 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/20 pb-4">
                      <span className={`text-[10px] font-mono border px-2 py-0.5 ${
                        isExpanded ? 'border-orange-400 text-orange-400 font-bold' : 'border-white/30 text-white/60'
                      }`}>
                        PILLAR 0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 flex items-center space-x-1">
                        <span>{isExpanded ? '[ ACTIVE ]' : '[ CLICK TO EXPLORE ]'}</span>
                      </span>
                    </div>

                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                      {pillar.title}
                    </h3>

                    <p className="text-lg sm:text-xl font-bold uppercase text-white leading-snug tracking-tight">
                      "{pillar.action}"
                    </p>

                    <p className="text-xs text-white/70 font-normal leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Expanded Pillar Details */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-white/20 space-y-3 animate-fadeIn">
                      <span className="text-[9px] text-orange-400 font-mono uppercase tracking-[0.3em] font-bold block">
                        CORE FOCUS MODULES
                      </span>
                      <div className="grid grid-cols-1 gap-2 text-xs text-white/90 font-sans">
                        {pillar.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 border border-white/10">
                            <span className="text-orange-400 font-mono text-[10px]">→</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!showAllPillars && activePillarIndex === null && (
            <p className="text-center text-xs font-mono uppercase tracking-widest text-white/40">
              [ Tip: Click any individual Pillar Card above to reveal module details, or toggle Expand All ]
            </p>
          )}

          {/* The Core Problem Box */}
          <div className="border border-white/20 bg-black p-8 sm:p-12 space-y-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 block">
                THE CORE PROBLEM
              </span>
              <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
                {problem.title}
              </h3>
              <p className="text-xl sm:text-2xl text-white/90 font-bold leading-snug">
                "{problem.lead}"
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm text-white/70 font-normal leading-relaxed pt-6 border-t border-white/20">
              <div className="space-y-4">
                <p>{problem.details[0]}</p>
                <p className="text-white font-medium">{problem.details[1]}</p>
              </div>
              <div className="space-y-4">
                <p className="text-white font-semibold">{problem.details[2]}</p>
                {problem.details[3] && <p>{problem.details[3]}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
