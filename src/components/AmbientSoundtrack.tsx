import React, { useEffect, useRef } from 'react';

interface AmbientSoundtrackProps {
  ducked?: boolean;
  enabled: boolean;
}

const BASE_VOLUME = 0.48;
const DUCKED_VOLUME = 0.12;
const FADE_START = 0.72;

export const AmbientSoundtrack: React.FC<AmbientSoundtrackProps> = ({ ducked = false, enabled }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const duckedRef = useRef(ducked);
  const enabledRef = useRef(enabled);

  useEffect(() => {
    duckedRef.current = ducked;
  }, [ducked]);

  useEffect(() => {
    enabledRef.current = enabled;
    const audio = audioRef.current;
    if (!audio) return;

    if (!enabled) {
      audio.pause();
      return;
    }

    void audio.play().catch(() => {
      // The first pointer, keyboard, touch, or scroll gesture retries playback.
    });
  }, [enabled]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let animationFrame = 0;
    let playbackUnlocked = false;

    const getPageProgress = () => {
      const scrollRange = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      return Math.min(Math.max(window.scrollY / scrollRange, 0), 1);
    };

    const updateVolume = () => {
      const progress = getPageProgress();
      const fade = progress <= FADE_START
        ? 1
        : Math.max(0, 1 - (progress - FADE_START) / (1 - FADE_START));
      const targetVolume = duckedRef.current ? DUCKED_VOLUME : BASE_VOLUME;

      audio.volume = targetVolume * fade;
      animationFrame = 0;
    };

    const requestVolumeUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateVolume);
    };

    const beginPlayback = async () => {
      if (!enabledRef.current) return;
      updateVolume();
      try {
        await audio.play();
        playbackUnlocked = true;
        removeUnlockListeners();
      } catch {
        // Audible autoplay is browser-controlled; the first visitor gesture retries it.
      }
    };

    const unlockPlayback = () => {
      if (!playbackUnlocked) void beginPlayback();
    };

    const removeUnlockListeners = () => {
      window.removeEventListener('pointerdown', unlockPlayback);
      window.removeEventListener('keydown', unlockPlayback);
      window.removeEventListener('touchstart', unlockPlayback);
      window.removeEventListener('scroll', unlockPlayback);
    };

    window.addEventListener('scroll', requestVolumeUpdate, { passive: true });
    window.addEventListener('resize', requestVolumeUpdate, { passive: true });
    window.addEventListener('pointerdown', unlockPlayback, { passive: true });
    window.addEventListener('keydown', unlockPlayback);
    window.addEventListener('touchstart', unlockPlayback, { passive: true });
    window.addEventListener('scroll', unlockPlayback, { passive: true });

    void beginPlayback();

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', requestVolumeUpdate);
      window.removeEventListener('resize', requestVolumeUpdate);
      removeUnlockListeners();
      audio.pause();
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const scrollRange = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);
    const fade = progress <= FADE_START
      ? 1
      : Math.max(0, 1 - (progress - FADE_START) / (1 - FADE_START));
    audio.volume = (ducked ? DUCKED_VOLUME : BASE_VOLUME) * fade;
  }, [ducked]);

  return (
    <audio ref={audioRef} src="/audio/vector-pulse.mp3" preload="auto" loop aria-hidden="true" />
  );
};
