import React, { useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

interface CinematicLoaderProps {
  visible: boolean;
  onComplete: () => void;
}

export const CinematicLoader: React.FC<CinematicLoaderProps> = ({ visible, onComplete }) => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!visible) return;
    document.body.style.overflow = 'hidden';
    const timeout = window.setTimeout(onComplete, reduceMotion ? 150 : 850);

    return () => {
      window.clearTimeout(timeout);
      document.body.style.overflow = '';
    };
  }, [onComplete, reduceMotion, visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="cinematic-loader cursor-pointer"
          onClick={onComplete}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: reduceMotion ? 0.1 : 0.4, ease: 'easeInOut' } }}
          role="status"
          aria-live="polite"
          aria-label="Loading King of Intelligence portfolio"
        >
          <div className="cinematic-loader__content">
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              NIUXVERSE / PRESENTS
            </motion.span>
            <motion.strong
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              KING OF<br /><em>INTELLIGENCE</em>
            </motion.strong>
            <div className="cinematic-loader__track" aria-hidden="true">
              <motion.i
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: reduceMotion ? 0.1 : 0.75, ease: [0.76, 0, 0.24, 1] }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
