import React, { useState } from 'react';
import { ArrowUpRight, Send, Check, Mail, MessageSquare } from 'lucide-react';
import { ContactFormData } from '../types';

const SOCIAL_LINKS = [
  {
    name: 'WhatsApp',
    link: 'https://wa.me/2348110607341',
    label: 'Chat Directly on WhatsApp',
    featured: true,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/david-nwaeze?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    label: 'David Nwaeze',
  },
  { name: 'X / Twitter', link: 'https://x.com/NwaezeDavid5', label: '@NwaezeDavid5' },
  {
    name: 'Instagram / Designs',
    link: 'https://www.instagram.com/niuxdesigns?igsh=MXVvZTIxYTJhMXBuag==',
    label: '@niuxdesigns',
  },
  {
    name: 'Instagram / Personal',
    link: 'https://www.instagram.com/iamdavidnwaeze?igsh=MXJxYnBwYzJndHN4eA==',
    label: '@iamdavidnwaeze',
  },
  {
    name: 'TikTok',
    link: 'https://www.tiktok.com/@king.of.intellige3?_r=1&_t=ZS-98fSG3ZsYYn',
    label: '@king.of.intellige3',
  },
  {
    name: 'YouTube',
    link: 'https://youtube.com/@davidnwaeze923?si=POH2djicW4Gel8cN',
    label: '@davidnwaeze923',
  },
] as const;

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    roleOrIndustry: 'Design Project',
    topic: 'New Collaboration',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const message = [
      'Hello David, I visited your website and would love to connect.',
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Topic: ${formData.roleOrIndustry}`,
      `Details: ${formData.message}`,
    ].join('\n');

    window.open(
      `https://wa.me/2348110607341?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-black text-white border-b border-white/20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header in Human Language */}
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-[0.2em] font-mono text-orange-400 font-bold">
            Get in Touch
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-sans">
            Let's Build Something Great Together
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
            Whether you need a human-friendly design for an AI tool, want to book a speaking session, or just want to say hello, I'd love to hear from you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 border border-white/20 bg-neutral-950 space-y-4">
              <span className="text-xs uppercase tracking-wider font-bold text-orange-400 font-mono block">
                Direct Contact
              </span>
              <p className="text-base text-white/90 leading-relaxed font-sans">
                You can reach me directly by email or WhatsApp. I usually reply within 24 hours.
              </p>
              <div className="pt-2">
                <span className="text-xs font-mono text-white/50 block mb-1">EMAIL</span>
                <a
                  href="mailto:theniuxversesolutions@gmail.com"
                  className="text-base sm:text-lg font-bold text-white hover:text-orange-400 flex items-center space-x-2 font-mono transition-colors"
                >
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span>theniuxversesolutions@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SOCIAL_LINKS.map((soc) => (
                <a
                  key={soc.link}
                  href={soc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${soc.name}: ${soc.label}`}
                  className={`p-5 border bg-neutral-950 space-y-2 transition-colors block group ${
                    'featured' in soc && soc.featured
                      ? 'border-orange-500 bg-orange-500/10 sm:col-span-2'
                      : 'border-white/15 hover:border-orange-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-white/50 group-hover:text-orange-400">
                    <span className="uppercase tracking-wider font-bold">{soc.name}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <p className="text-xs text-white/80 font-mono">{soc.label}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Friendly Contact Form */}
          <div className="lg:col-span-7 border border-white/20 bg-neutral-950 p-6 sm:p-10">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 border-2 border-orange-500 mx-auto flex items-center justify-center text-orange-400">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-sans uppercase">
                  Message Ready on WhatsApp!
                </h3>
                <p className="text-white/80 text-sm max-w-md mx-auto leading-relaxed font-sans">
                  Thanks, {formData.name}! Your message has been opened in WhatsApp. Just tap send to start chatting.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', roleOrIndustry: 'Design Project', topic: 'New Collaboration', message: '' });
                  }}
                  className="mt-4 px-6 py-3 border border-white text-xs font-mono uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors cursor-pointer font-bold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="pb-4 border-b border-white/15">
                  <span className="text-xs font-mono text-orange-400 font-bold block mb-1">
                    Send a Message
                  </span>
                  <p className="text-xs text-white/70 font-sans">
                    Fill in your details below and it will open directly in WhatsApp for a quick conversation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-white/70 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Adebayo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black border border-white/20 text-white text-sm px-4 py-3 focus:border-orange-500 focus:outline-none font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-white/70 block">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black border border-white/20 text-white text-sm px-4 py-3 focus:border-orange-500 focus:outline-none font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/70 block">
                    What would you like to discuss?
                  </label>
                  <select
                    value={formData.roleOrIndustry}
                    onChange={(e) => setFormData({ ...formData, roleOrIndustry: e.target.value })}
                    className="w-full bg-black border border-white/20 text-white text-sm px-4 py-3 focus:border-orange-500 focus:outline-none font-sans cursor-pointer"
                  >
                    <option value="Product or AI Design Project">A product or AI design project</option>
                    <option value="Speaking Engagement / Keynote">Inviting me to speak at an event</option>
                    <option value="School of Intelligenze / Podcast Guest">School of Intelligenze or recommending a podcast guest</option>
                    <option value="SeedIntelligenze Marketing Agency">AI marketing with SeedIntelligenze</option>
                    <option value="Healthcare UI Consultation">Healthcare or public health design consultation</option>
                    <option value="Just saying hello">Just saying hello and sharing thoughts</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/70 block">
                    Tell me about your idea or project *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me a little about what you're working on, what you need help with, or what you'd like to talk about..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black border border-white/20 text-white text-sm p-4 focus:border-orange-500 focus:outline-none font-sans resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-orange-500 text-black font-black text-xs tracking-wider uppercase hover:bg-orange-400 transition-colors cursor-pointer flex items-center justify-center space-x-2 font-mono"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Message via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
