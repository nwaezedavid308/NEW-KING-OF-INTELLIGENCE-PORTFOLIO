import React, { useState } from 'react';
import { DESIGN_WORKS } from '../data/content';
import { DesignProject } from '../types';
import { ArrowUpRight, Eye, CheckCircle2, HeartPulse, Sparkles, Sliders, ShieldCheck } from 'lucide-react';

// Custom SVG/CSS Live Interface Architecture component for each project
const ProjectSystemPreview: React.FC<{ projectId: string; title: string }> = ({ projectId, title }) => {
  if (projectId === 'pulsecare') {
    return (
      <div className="w-full h-full bg-neutral-950 p-5 flex flex-col justify-between border-b border-white/15 font-sans select-none">
        <div className="flex items-center justify-between text-xs text-white/70 border-b border-white/10 pb-2">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Patient Vital Overview
          </span>
          <span className="text-white/50 text-[11px] font-mono">Real-Time Sync</span>
        </div>

        {/* Live SVG Cardiac Waveform */}
        <div className="py-2">
          <div className="flex items-center justify-between text-[11px] text-white/60 mb-1 font-mono">
            <span>HEART RHYTHM</span>
            <span className="text-emerald-400 font-semibold">Normal Sinus Rhythm</span>
          </div>
          <svg className="w-full h-14 text-emerald-400" viewBox="0 0 300 60" preserveAspectRatio="none">
            <path
              d="M0 30 L50 30 L60 30 L65 10 L70 50 L75 15 L80 35 L85 30 L150 30 L160 30 L165 8 L170 52 L175 12 L180 34 L185 30 L250 30 L260 30 L265 10 L270 50 L275 15 L280 35 L300 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Vital Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center text-xs">
          <div className="bg-white/5 p-2 rounded border border-white/10">
            <span className="text-[10px] text-white/50 block font-mono">PULSE</span>
            <span className="text-sm font-bold text-white">72 bpm</span>
          </div>
          <div className="bg-white/5 p-2 rounded border border-white/10">
            <span className="text-[10px] text-white/50 block font-mono">OXYGEN</span>
            <span className="text-sm font-bold text-emerald-400">98% SpO2</span>
          </div>
          <div className="bg-white/5 p-2 rounded border border-white/10">
            <span className="text-[10px] text-white/50 block font-mono">CLINICAL STATUS</span>
            <span className="text-sm font-bold text-orange-400">Calm & Stable</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'aetherflow') {
    return (
      <div className="w-full h-full bg-neutral-950 p-5 flex flex-col justify-between border-b border-white/15 font-sans select-none">
        <div className="flex items-center justify-between text-xs text-white/70 border-b border-white/10 pb-2">
          <span className="flex items-center gap-1.5 text-orange-400 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            AI Teammate Canvas
          </span>
          <span className="text-emerald-400 text-[11px] font-mono">You Are in Control</span>
        </div>

        {/* 3-Step Human-AI Flow */}
        <div className="py-3 flex items-center justify-between gap-2 text-xs">
          <div className="p-2.5 border border-white/20 bg-white/5 rounded text-center flex-1">
            <span className="text-[10px] text-white/50 block font-mono">STEP 1</span>
            <span className="font-semibold text-white">Your Request</span>
          </div>
          <span className="text-orange-400 font-bold">→</span>
          <div className="p-2.5 border border-orange-500/50 bg-orange-500/10 rounded text-center flex-1">
            <span className="text-[10px] text-orange-400 block font-mono">STEP 2</span>
            <span className="font-semibold text-orange-300">AI Suggestion</span>
          </div>
          <span className="text-orange-400 font-bold">→</span>
          <div className="p-2.5 border border-emerald-500/50 bg-emerald-500/10 rounded text-center flex-1">
            <span className="text-[10px] text-emerald-400 block font-mono">STEP 3</span>
            <span className="font-semibold text-emerald-300">Your Approval</span>
          </div>
        </div>

        <div className="p-2.5 bg-black/60 border border-white/10 text-xs text-white/70 flex items-center justify-between font-mono">
          <span>AI never publishes without your say-so.</span>
          <span className="text-emerald-400 font-bold">✓ Safe Mode</span>
        </div>
      </div>
    );
  }

  if (projectId === 'cognitive-os') {
    return (
      <div className="w-full h-full bg-neutral-950 p-5 flex flex-col justify-between border-b border-white/15 font-sans select-none relative overflow-hidden">
        <div className="flex items-center justify-between text-xs text-white/70 border-b border-white/10 pb-2">
          <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
            <Sliders className="w-3.5 h-3.5" />
            Distraction-Free Operating Space
          </span>
          <span className="text-white/50 text-[11px] font-mono">Low Eye Strain</span>
        </div>

        <div className="py-4 flex flex-col items-center justify-center text-center space-y-1">
          <div className="w-16 h-16 rounded-full border border-cyan-400/40 flex items-center justify-center bg-cyan-950/20">
            <span className="w-3 h-3 rounded-full bg-orange-400" />
          </div>
          <span className="text-xs font-semibold text-white">Focus Mode Enabled</span>
          <span className="text-[11px] text-white/60">No popups, notifications held for later.</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-center text-xs border-t border-white/10 pt-2 font-mono">
          <div className="bg-white/5 p-1.5 border border-white/10 text-white/80">Adaptive Dark Tone</div>
          <div className="bg-white/5 p-1.5 border border-white/10 text-white/80">Clear Typography</div>
        </div>
      </div>
    );
  }

  // OmniPulse Audit System
  return (
    <div className="w-full h-full bg-neutral-950 p-5 flex flex-col justify-between border-b border-white/15 font-sans select-none">
      <div className="flex items-center justify-between text-xs text-white/70 border-b border-white/10 pb-2">
        <span className="flex items-center gap-1.5 text-orange-400 font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          Product Trust & Ethics Checklist
        </span>
        <span className="text-emerald-400 font-bold font-mono">Grade: A+</span>
      </div>

      <div className="py-2 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-white/80 font-medium">User Respect & Trust Score</span>
          <span className="text-orange-400 font-bold font-mono">99 / 100</span>
        </div>
        <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
          <div className="bg-orange-500 h-full w-[99%]" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs border-t border-white/10 pt-2 font-mono">
        <div className="flex items-center gap-1 text-emerald-400">
          <span>✓</span>
          <span>Zero Dark Patterns</span>
        </div>
        <div className="flex items-center gap-1 text-emerald-400">
          <span>✓</span>
          <span>Plain English Policy</span>
        </div>
      </div>
    </div>
  );
};

export const DesignWorks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeProject, setActiveProject] = useState<DesignProject | null>(null);

  const categories = ['ALL', 'Healthcare & AI Interface', 'AI Workflow & Interaction', 'Next-Gen Spatial Interface', 'Ethical AI & Analytics'];

  const filteredProjects = selectedCategory === 'ALL'
    ? DESIGN_WORKS
    : DESIGN_WORKS.filter((p) => p.category === selectedCategory);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="works" className="py-24 bg-black text-white border-b border-orange-500/20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-white/20">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-orange-400 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Projects & Case Studies</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-sans">
              Work I've Designed
            </h2>
            <p className="text-white/80 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
              A collection of digital interfaces and AI tools I've created. Every screen is designed with healthcare empathy: clear, simple, and respectful of the human being using it.
            </p>
          </div>

          <button
            onClick={scrollToContact}
            className="px-6 py-4 bg-orange-500 hover:bg-orange-400 text-black text-xs uppercase tracking-[0.15em] font-black transition-all cursor-pointer flex items-center space-x-3 self-start lg:self-auto font-mono"
          >
            <span>Let's Discuss a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 pb-2 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? 'border-orange-500 bg-orange-500 text-black font-bold'
                  : 'border-white/20 text-white/70 hover:border-white hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group border border-white/20 bg-neutral-950 hover:border-white transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Live Architectural Preview */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-neutral-950">
                  <ProjectSystemPreview projectId={project.id} title={project.title} />
                  <div className="absolute top-4 left-4 bg-black/90 border border-white/30 px-3 py-1 text-[10px] font-mono text-white z-10">
                    Project 0{idx + 1} // {project.category}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                      {project.tagline}
                    </span>
                    <span className="text-xs text-white/50 font-mono">Case Study</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-sans">
                    {project.title}
                  </h3>

                  <p className="text-sm text-white/80 leading-relaxed font-normal font-sans">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 border-t border-white/10 flex flex-wrap gap-2">
                    {project.metrics.map((metric, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-white/80"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-white/10">
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-mono text-white/50">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveProject(project)}
                  className="px-4 py-2 border border-white/30 hover:border-orange-400 hover:text-orange-400 text-xs font-mono uppercase tracking-wider text-white transition-all cursor-pointer flex items-center space-x-2"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Read Story</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-neutral-950 border border-white/30 max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-white/15 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold block">
                  {activeProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-sans mt-1">
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="text-white/60 hover:text-white text-xs font-mono uppercase border border-white/20 px-3 py-1.5 cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <div className="space-y-4 text-sm text-white/85 leading-relaxed font-sans">
              <div>
                <h4 className="text-xs font-mono uppercase text-orange-400 font-bold mb-1">
                  The Problem
                </h4>
                <p>
                  Most tools in this domain are built by engineers for engineers. Users get lost in technical clutter, complex settings, and stressful notifications.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-orange-400 font-bold mb-1">
                  How I Solved It
                </h4>
                <p>{activeProject.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-orange-400 font-bold mb-1">
                  The Human Impact
                </h4>
                <ul className="space-y-1.5 pt-1">
                  {activeProject.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center space-x-2 text-xs font-mono text-white/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/15 flex items-center justify-between">
              <button
                onClick={() => {
                  setActiveProject(null);
                  scrollToContact();
                }}
                className="px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-black text-xs font-mono uppercase font-bold tracking-wider cursor-pointer"
              >
                Discuss a Similar Project
              </button>
              <button
                onClick={() => setActiveProject(null)}
                className="text-xs font-mono text-white/60 hover:text-white cursor-pointer"
              >
                Back to Overview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
