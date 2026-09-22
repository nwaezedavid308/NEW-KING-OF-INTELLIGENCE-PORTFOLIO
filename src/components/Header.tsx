import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Music2 } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  isSpeaking: boolean;
  toggleSpeech: () => void;
  speechSupported: boolean;
  musicEnabled: boolean;
  toggleMusic: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  isSpeaking,
  toggleSpeech,
  speechSupported,
  musicEnabled,
  toggleMusic,
}) => {
  const [timeString, setTimeString] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setTimeString(`${timeStr} WAT`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'who-is', label: 'About' },
    { id: 'works', label: 'Design Works' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'academy', label: 'Academy' },
    { id: 'speaking', label: 'Speaking' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/55 backdrop-blur-md border-b border-orange-500/25 text-[10px] uppercase tracking-[0.2em] transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Brand / Logo */}
        <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            className="font-black text-base sm:text-lg tracking-tighter text-white uppercase hover:text-white/80 transition-colors flex items-center"
          >
            <span>NIUXVERSE<span className="text-orange-500">.</span></span>
          </a>
          <span className="hidden md:inline text-white/30">/</span>
          <span className="hidden md:inline text-white/60 font-semibold text-[10px] tracking-[0.2em] uppercase">
            King of Intelligence
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-white/60 font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`hover:text-white transition-colors cursor-pointer py-1 relative ${
                activeSection === item.id ? 'text-white font-bold opacity-100' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <span>{item.label}</span>
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500" />
              )}
            </button>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center space-x-1.5 sm:space-x-3 text-white/60 flex-shrink-0">
          <button
            type="button"
            onClick={toggleMusic}
            aria-pressed={musicEnabled}
            aria-label={musicEnabled ? 'Stop background music' : 'Play background music'}
            title={musicEnabled ? 'Stop background music' : 'Play background music'}
            className={`flex items-center space-x-1.5 px-2 sm:px-3 py-1.5 border text-[10px] uppercase tracking-[0.15em] font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
              musicEnabled
                ? 'border-orange-500/70 bg-orange-500/10 text-orange-300'
                : 'border-white/30 hover:border-white text-white'
            }`}
          >
            {musicEnabled ? <Music2 className="w-3.5 h-3.5" aria-hidden="true" /> : <VolumeX className="w-3.5 h-3.5" aria-hidden="true" />}
            <span className="hidden sm:inline">Music {musicEnabled ? 'On' : 'Off'}</span>
          </button>

          {speechSupported && (
            <button
              type="button"
              onClick={toggleSpeech}
              aria-pressed={isSpeaking}
              aria-label={isSpeaking ? 'Pause spoken manifesto' : 'Listen to spoken manifesto'}
              title={isSpeaking ? 'Mute Speech' : 'Listen to Manifesto'}
              className={`flex items-center space-x-1.5 px-2 sm:px-3 py-1.5 border text-[10px] uppercase tracking-[0.15em] font-bold transition-all cursor-pointer ${
                isSpeaking
                  ? 'border-white bg-white text-black'
                  : 'border-white/30 hover:border-white text-white'
              }`}
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-black" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Listen</span>
                </>
              )}
            </button>
          )}

          <div className="hidden sm:block font-mono text-white text-[10px] border border-white/20 px-2.5 py-1 bg-black whitespace-nowrap">
            {timeString || '12:00:00 PM WAT'}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 border border-white/30 text-white hover:bg-white hover:text-black transition-colors flex-shrink-0"
            aria-label="Toggle Navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-b border-white/20 px-6 py-6 space-y-4 text-xs font-sans tracking-widest uppercase">
          <div className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-4">
            [ NAVIGATION INDEX ]
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left py-3 border-b border-white/10 text-white font-bold hover:text-white/80 flex items-center justify-between"
            >
              <span>{item.label}</span>
              <ArrowUpRight className="w-4 h-4 text-white/40" />
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

