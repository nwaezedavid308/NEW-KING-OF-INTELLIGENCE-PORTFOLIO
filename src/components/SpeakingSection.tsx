import React from 'react';
import { ArrowUpRight, Mic2, Globe, Calendar, MessageSquare, Award } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const speakingTopics = [
  'How to Design AI That People Actually Trust',
  'Healthcare & Empathy: What Tech Can Learn from Medicine',
  'Building Africa’s Next Generation of Thinkers & Builders',
  'Staying Human in the Age of Artificial Intelligence',
];

const bookingLink = 'https://wa.me/2348110607341?text=Hello%20Nwaeze%20David%2C%20I%20would%20like%20to%20invite%20you%20to%20speak%20at%20our%20event.';

export const SpeakingSection: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="speaking" className="speaking-section border-b border-orange-500/20 px-4 py-24 text-white sm:px-6 lg:px-8 bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Left Column: Speaker Note & Approach */}
        <div className="lg:col-span-6 space-y-6">
          <div className="border border-orange-500/40 bg-neutral-950 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/15 pb-4 text-xs font-mono">
              <span className="text-orange-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <Mic2 className="w-3.5 h-3.5 text-orange-500" />
                Keynote Speaker & Facilitator
              </span>
              <span className="text-white/50">Nwaeze David</span>
            </div>

            {/* Speaker Info */}
            <div className="flex items-start gap-4 pt-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 border-2 border-orange-500 bg-orange-500/10 flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-black font-mono text-orange-400">ND</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold block">
                  Speaker Profile
                </span>
                <h3 className="text-2xl font-black uppercase text-white font-sans">
                  Nwaeze David
                </h3>
                <p className="text-xs text-white/70 font-mono">
                  Founder of Niuxverse · Pharmacist & Designer
                </p>
              </div>
            </div>

            {/* Warm Human Speaking Bio */}
            <p className="text-sm text-white/85 leading-relaxed font-sans pt-1">
              When I take the stage, I don't give dry lectures full of corporate buzzwords. I share practical stories from healthcare, human psychology, and modern AI design. My goal is to make every conversation energetic, grounded, and deeply human — so your audience leaves with clarity, practical tools, and renewed inspiration.
            </p>

            {/* Delivery Formats */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs font-mono text-white/80">
              <div className="p-3 bg-white/5 border border-white/10 space-y-1">
                <span className="text-orange-400 text-[10px] font-bold flex items-center gap-1.5 uppercase">
                  <Globe className="w-3.5 h-3.5" />
                  Format
                </span>
                <span className="text-white text-xs">In-Person & Virtual</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 space-y-1">
                <span className="text-orange-400 text-[10px] font-bold flex items-center gap-1.5 uppercase">
                  <Award className="w-3.5 h-3.5" />
                  Types of Sessions
                </span>
                <span className="text-white text-xs">Keynotes & Workshops</span>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="p-3 bg-orange-500/10 border border-orange-500/30 flex items-center justify-between text-xs font-mono">
              <span className="text-white/80">Booking Calendar</span>
              <span className="text-orange-300 font-bold">Open for 2025 & 2026 events</span>
            </div>
          </div>
        </div>

        {/* Right Column: Keynote Topics & Direct WhatsApp Invite */}
        <div className="space-y-8 lg:col-span-6 lg:pl-4">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-400 font-mono">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <span>Speaking & Workshops</span>
          </div>

          <motion.h2
            className="text-4xl sm:text-6xl font-black uppercase leading-[0.9] tracking-tight font-sans text-white"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Invite me to <br />
            <span className="text-orange-500">speak.</span>
          </motion.h2>

          <p className="max-w-xl text-base leading-relaxed text-white/80 font-normal font-sans">
            Have an upcoming tech summit, healthcare conference, university forum, or company workshop? I'd love to contribute and speak with your community.
          </p>

          <ul className="grid gap-3" aria-label="Speaking topics">
            {speakingTopics.map((topic, i) => (
              <li
                key={topic}
                className="border-l-2 border-orange-500/80 bg-white/[0.02] p-3 text-xs sm:text-sm font-semibold text-white/90 font-sans flex items-center gap-3"
              >
                <span className="text-orange-400 font-mono text-xs">0{i + 1}</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-3 bg-orange-500 px-8 py-4 text-xs font-black uppercase tracking-[0.15em] text-black transition-colors hover:bg-orange-400 font-mono cursor-pointer"
              aria-label="Book Nwaeze David to speak through WhatsApp"
            >
              <MessageSquare className="h-4 w-4" />
              Chat on WhatsApp to Book a Date
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
