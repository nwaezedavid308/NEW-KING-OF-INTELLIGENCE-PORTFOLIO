import React from 'react';
import { Compass, Sparkles, HeartHandshake, Brain, ArrowUpRight } from 'lucide-react';

export const NiuxversePhilosophy: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="philosophy" className="py-24 bg-black text-white border-b border-white/20 px-4 sm:px-6 lg:px-8">
      <div id="mission" className="-mt-24 pt-24" />
      <div id="manifesto" className="-mt-24 pt-24" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/20">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-orange-400 font-bold">
              <Compass className="w-4 h-4" />
              <span>How I Think & Build</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-sans">
              The Niuxverse Philosophy
            </h2>
            <p className="text-white/80 text-sm sm:text-base font-normal max-w-2xl leading-relaxed">
              A world of creative minds leveraging technology to solve real human problems and make life better for everyday people.
            </p>
          </div>

          <button
            onClick={scrollToContact}
            className="px-6 py-3.5 border border-white/40 hover:border-white text-white bg-black hover:bg-white hover:text-black transition-all font-mono text-xs uppercase tracking-[0.15em] font-bold cursor-pointer flex items-center space-x-2 self-start md:self-auto"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Master Philosophy Statement */}
        <div className="p-8 sm:p-12 border-2 border-white/20 bg-white/[0.02] relative overflow-hidden space-y-8">
          <div className="flex items-center justify-between border-b border-white/15 pb-4 text-xs font-mono">
            <span className="text-orange-400 font-bold uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              My Core Belief
            </span>
            <span className="text-white/50">Humans First, Always</span>
          </div>

          <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-sans">
            "Technology must serve humanity, never the other way around. True intelligence is not about algorithmic speed — it is about empathy, clear thinking, and tools that protect human dignity."
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/15">
            {/* Real Healthcare Lesson */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-orange-400 text-xs font-mono uppercase tracking-wider font-bold">
                <HeartHandshake className="w-4 h-4" />
                <span>What healthcare taught me</span>
              </div>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
                In a pharmacy, people come to you when they are hurting or worried. They don't want jargon; they want relief, clarity, and kindness. I bring that exact care into software design: no confusing traps, no stressful clutter, and zero dark patterns.
              </p>
            </div>

            {/* Humans in Charge */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-orange-400 text-xs font-mono uppercase tracking-wider font-bold">
                <Brain className="w-4 h-4" />
                <span>Keeping humans in the driver's seat</span>
              </div>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
                AI can calculate patterns in seconds, but only humans have heart, conscience, and purpose. Our designs ensure AI acts as a patient, transparent assistant — while you stay firmly in control of your decisions and your work.
              </p>
            </div>
          </div>
        </div>

        {/* The 3 Core Commitments */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-orange-400 font-bold">
            <span>Three Commitments I Make</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-8 border border-white/20 bg-neutral-950 space-y-4">
              <span className="text-xs font-mono text-orange-400 font-bold block">01 / MASTER THE TOOLS</span>
              <h3 className="text-xl font-black uppercase text-white font-sans">
                Stay Ahead of New Technology
              </h3>
              <p className="text-sm text-white/75 leading-relaxed font-sans">
                Don't run from AI or fear it. Learn it deeply, test new models hands-on, and turn powerful technologies into easy, reliable tools that anyone can use.
              </p>
            </div>

            <div className="p-6 sm:p-8 border border-white/20 bg-neutral-950 space-y-4">
              <span className="text-xs font-mono text-orange-400 font-bold block">02 / KEEP YOUR MIND SHARP</span>
              <h3 className="text-xl font-black uppercase text-white font-sans">
                Think Clearly & Question Deeply
              </h3>
              <p className="text-sm text-white/75 leading-relaxed font-sans">
                Never hand your critical thinking over to a machine. Nurture your curiosity, preserve your independent judgment, and lead with empathy.
              </p>
            </div>

            <div className="p-6 sm:p-8 border border-white/20 bg-neutral-950 space-y-4">
              <span className="text-xs font-mono text-orange-400 font-bold block">03 / BUILD FOR REAL PEOPLE</span>
              <h3 className="text-xl font-black uppercase text-white font-sans">
                Solve Everyday Human Needs
              </h3>
              <p className="text-sm text-white/75 leading-relaxed font-sans">
                Create digital products that make real people's lives easier, safer, and more productive — tools that businesses can count on and users genuinely love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
