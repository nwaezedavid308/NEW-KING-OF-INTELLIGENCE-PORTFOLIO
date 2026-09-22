import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface CinematicRevealProps {
  children: React.ReactNode;
}

export const CinematicReveal: React.FC<CinematicRevealProps> = ({ children }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="cinematic-reveal"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '120px 0px 0px 0px' }}
      transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="cinematic-reveal__signal"
        aria-hidden="true"
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '120px 0px 0px 0px' }}
        transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.76, 0, 0.24, 1] }}
      />
      {children}
    </motion.div>
  );
};
