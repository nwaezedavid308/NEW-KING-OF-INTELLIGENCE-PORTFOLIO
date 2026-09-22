import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhoIsSection } from './components/WhoIsSection';
import { DesignWorks } from './components/DesignWorks';
import { NiuxversePhilosophy } from './components/NiuxversePhilosophy';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AmbientSoundtrack } from './components/AmbientSoundtrack';
import { CinematicLoader } from './components/CinematicLoader';
import { CinematicReveal } from './components/CinematicReveal';
import { SpeakingSection } from './components/SpeakingSection';
import { NiuxverseAcademy } from './components/NiuxverseAcademy';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [speechSupported, setSpeechSupported] = useState<boolean>(false);
  const [musicEnabled, setMusicEnabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const finishLoading = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSupported(true);
    }
  }, []);

  // Speech synthesizer toggle
  const toggleSpeech = () => {
    if (!speechSupported) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel(); // clear previous
      const textToRead = `
        Hello and welcome. My name is Nwaeze David. People know me as The King of Intelligence.
        I am a designer with roots in pharmacy and public health.
        I created The Niuxverse to prove that powerful technologies like AI can be simple, gentle, and deeply empowering for everyday people.
        Take a look around at my design projects, read my philosophy, and feel free to reach out anytime.
      `;

      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  // Intersection observer for current active section highlight
  useEffect(() => {
    const sectionIds = ['hero', 'who-is', 'works', 'philosophy', 'academy', 'speaking', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      <CinematicLoader visible={isLoading} onComplete={finishLoading} />
      <AmbientSoundtrack ducked={isSpeaking} enabled={musicEnabled} />
      {/* Fixed Minimalist Header */}
      <Header
        activeSection={activeSection}
        isSpeaking={isSpeaking}
        toggleSpeech={toggleSpeech}
        speechSupported={speechSupported}
        musicEnabled={musicEnabled}
        toggleMusic={() => setMusicEnabled((current) => !current)}
      />

      {/* Main Portfolio Sections */}
      <main>
        {/* Hero Section (No video/canvas animation, clean authentic photo & typography) */}
        <Hero />
        <CinematicReveal><WhoIsSection /></CinematicReveal>
        <CinematicReveal><DesignWorks /></CinematicReveal>
        {/* Single authoritative Niuxverse Philosophy section (Zero repetition) */}
        <CinematicReveal><NiuxversePhilosophy /></CinematicReveal>
        <CinematicReveal><NiuxverseAcademy /></CinematicReveal>
        <CinematicReveal><SpeakingSection /></CinematicReveal>
        <CinematicReveal><ContactSection /></CinematicReveal>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
