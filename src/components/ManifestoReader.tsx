import React, { useState } from 'react';
import { Volume2, VolumeX, Search, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

interface ManifestoReaderProps {
  isSpeaking: boolean;
  toggleSpeech: () => void;
  speechSupported: boolean;
  isExpanded?: boolean;
  onToggleExpanded?: () => void;
}

export const ManifestoReader: React.FC<ManifestoReaderProps> = ({
  isSpeaking,
  toggleSpeech,
  speechSupported,
  isExpanded: controlledExpanded,
  onToggleExpanded,
}) => {
  const [internalExpanded, setInternalExpanded] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>('base');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;
  const toggleExpanded = onToggleExpanded || (() => setInternalExpanded(!internalExpanded));

  const fontClasses = {
    sm: 'text-xs leading-relaxed',
    base: 'text-sm sm:text-base leading-relaxed',
    lg: 'text-base sm:text-lg leading-relaxed',
    xl: 'text-lg sm:text-xl leading-relaxed',
  };

  const fullContent = [
    { title: "Chapter 1: The Birth of The King of Intelligence", subtitle: "THE BEGINNING OF A HUMAN-CENTERED INTELLIGENCE JOURNEY" },
    { p: "Every movement begins with a question." },
    { p: "NIUXVERSE begins with one powerful question: How can humanity build intelligent technology without losing the human experience?" },
    { p: "Artificial Intelligence is transforming how people work, learn, create, and solve problems. However, the future of technology cannot only be measured by how powerful machines become. It must also be measured by how well technology understands, supports, and protects human beings." },
    { title: "WHO IS THE KING OF INTELLIGENCE?" },
    { p: "The King of Intelligence is not a claim of knowing everything. It represents a commitment to continuous learning, curiosity, creativity, and responsible innovation." },
    { p: "It is the journey of becoming." },
    { p: "The King of Intelligence explores the connection between human intelligence and machine intelligence." },
    { title: "FROM HEALTHCARE TO INTELLIGENT SYSTEMS DESIGN" },
    { p: "The foundation of NIUXVERSE comes from understanding humans first." },
    { p: "Healthcare teaches that every problem has a human story behind it. A health challenge affects individuals, families, and communities." },
    { p: "Technology follows the same principle. Behind every digital product, AI system, and innovation is a human being who needs trust, safety, and value." },
    { title: "WHAT IS HUMAN-CENTERED INTELLIGENCE?" },
    { p: "Human-centered intelligence means designing technology around real human needs." },
    { p: "It asks: Does this solve a meaningful problem? Is it safe and trustworthy? Can people understand and use it? Does it respect human dignity?" },
    { title: "WHY THE WORLD NEEDS HUMAN-CENTERED AI" },
    { p: "AI can write, design, analyse data, generate ideas, and automate tasks. But powerful technology also creates questions about privacy, ethics, safety, bias, and human impact." },
    { p: "The next generation of technology leaders must understand both machines and humans." },
    { title: "THE NIUXVERSE VISION" },
    { p: "NIUXVERSE is built on five beliefs: 1. Intelligence can be developed. 2. Technology should be accessible. 3. Africa must become a builder, not only a consumer. 4. Healthcare and technology must work together. 5. The future must remain human." },
    { title: "CHAPTER REFLECTION" },
    { p: "The King of Intelligence journey begins with a simple idea: The future belongs to those willing to learn, adapt, create, and think deeply." },
    { p: "Artificial Intelligence is not the end of human intelligence. It is an invitation for humans to become more intelligent." },
    { p: "Learn the tools. Train the mind. Build the future. Keep humanity at the centre." },
    { p: "Electricity changed how we powered the world. The internet changed how we connected. Mobile technology changed how information moved. Now, artificial intelligence is changing how humans think, create, work, learn, and solve problems." },
    { p: "Will we understand the future before the future changes us?" },
    { title: "The Beginning Of A New Journey" },
    { p: "NIUXVERSE was born from a simple realization: The world is entering a new era, and people need a bridge between complex technology and everyday human experience." },
    { p: "Artificial intelligence can feel intimidating. Many people hear words like machine learning, automation, algorithms, and AI agents and immediately believe these ideas belong only to programmers, engineers, or technology companies." },
    { p: "But technology only creates real impact when ordinary people understand it. A teacher should understand how AI can improve learning. A healthcare worker should understand how intelligent systems can improve care. A business owner should understand how automation can save time. A creator should understand how AI can expand imagination." },
    { title: "The Problem NIUXVERSE Wants To Solve" },
    { p: "Technology is advancing faster than human understanding. Every week, new tools appear. Every month, new systems change how work is done." },
    { p: "Where do I start? How do I learn? Will technology replace me? How can I benefit from these changes?" },
    { p: "NIUXVERSE exists to make the future understandable, practical, and human." },
    { title: "The Meaning Behind The King Of Intelligence" },
    { p: "The King of Intelligence is not a claim of knowing everything. It is a commitment to becoming." },
    { p: "Real intelligence includes: Asking better questions, Solving meaningful problems, Understanding people, Learning continuously, Adapting to change, Creating useful solutions." },
    { title: "The Human Before The Machine" },
    { p: "Before exploring artificial intelligence, we must first understand human intelligence. Humans create because humans experience. Every successful technology begins with a human need." },
    { title: "The Healthcare Connection" },
    { p: "Healthcare teaches an important lesson: Behind every data point is a human story. A patient is not only a diagnosis. A community is not only statistics. A health challenge is not only a number." },
    { title: "The NIUXVERSE Mission" },
    { p: "Learn the tools. Train the mind. Build the future." },
    { title: "Chapter Reflection" },
    { p: "The future will not belong only to those who create technology. It will belong to those who understand how technology should serve humanity." },
    { p: "The King of Intelligence journey begins here. Not with having all the answers, but with having the courage to keep learning." }
  ];

  const filteredContent = searchQuery.trim()
    ? fullContent.filter((item) =>
        (item.p || item.title || '').toLowerCase().includes(searchQuery.toLowerCase())
      )
    : fullContent;

  return (
    <section id="manifesto" className="py-20 bg-black text-white border-b border-white/20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Single Button to Expand/Collapse Manifesto */}
        <div className="flex flex-col items-center justify-center text-center">
          <button
            onClick={toggleExpanded}
            className="w-full sm:w-auto px-8 py-5 bg-white text-black hover:bg-orange-500 hover:text-black transition-all duration-300 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] font-black cursor-pointer flex items-center justify-center space-x-3 border border-white shadow-2xl group"
          >
            <BookOpen className="w-4 h-4 text-black" />
            <span>{isExpanded ? 'Collapse Manifesto' : 'Read Full Manifesto'}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            )}
          </button>
        </div>

        {/* Collapsible Content Area */}
        {isExpanded && (
          <div className="space-y-12 pt-8 border-t border-white/20 transition-all duration-500 animate-fadeIn">
            {/* Header & Controls Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/20">
              <div>
                <span className="text-[10px] font-mono text-orange-400 uppercase tracking-[0.3em] font-bold block mb-1">
                  NIUXVERSE ARCHITECTURE
                </span>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase font-sans">
                  The King of Intelligence Manifesto
                </h2>
              </div>

              <div className="flex items-center space-x-3 text-xs font-mono">
                {/* Audio Toggle */}
                {speechSupported && (
                  <button
                    onClick={toggleSpeech}
                    className={`px-3 py-1.5 border uppercase text-[10px] tracking-[0.2em] font-bold transition-all flex items-center space-x-2 cursor-pointer ${
                      isSpeaking ? 'bg-white text-black border-white' : 'border-white/30 text-white hover:border-white'
                    }`}
                  >
                    {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    <span>{isSpeaking ? 'Pause' : 'Listen'}</span>
                  </button>
                )}

                {/* Font size picker */}
                <div className="flex items-center border border-white/20 bg-black p-1 space-x-1">
                  {(['sm', 'base', 'lg', 'xl'] as const).map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setFontSize(sz)}
                      className={`px-2 py-0.5 uppercase cursor-pointer text-[10px] font-mono ${
                        fontSize === sz ? 'bg-white text-black font-bold' : 'text-white/40 hover:text-white'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search manifesto text (e.g., 'healthcare', 'beliefs', 'Africa', 'machine')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black border border-white/20 text-white text-xs uppercase tracking-wider pl-12 pr-4 py-3.5 focus:border-white focus:outline-none font-mono"
              />
            </div>

            {/* Main Text Content */}
            <div className="space-y-8 text-white/80 font-normal tracking-wide">
              {filteredContent.map((item, idx) => {
                if (item.title) {
                  return (
                    <div key={idx} className="pt-8 pb-4 border-b border-white/20">
                      <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight font-sans">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-[10px] font-mono text-white/50 uppercase tracking-[0.3em] mt-2 font-bold">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  );
                }

                return (
                  <p
                    key={idx}
                    className={`${fontClasses[fontSize]} text-white/80 hover:text-white transition-colors p-4 hover:bg-white/5 border-l-2 border-transparent hover:border-white`}
                  >
                    {item.p}
                  </p>
                );
              })}
            </div>

            {/* Bottom Collapse Button */}
            <div className="pt-8 border-t border-white/20 flex justify-center">
              <button
                onClick={toggleExpanded}
                className="px-6 py-3 border border-white/40 text-white hover:bg-white hover:text-black transition-all font-mono text-xs uppercase tracking-[0.2em] font-bold cursor-pointer flex items-center space-x-2"
              >
                <ChevronUp className="w-4 h-4" />
                <span>Collapse Manifesto</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
