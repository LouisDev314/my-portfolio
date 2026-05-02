'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

export function ProjectCardMotionShell({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900 dark:hover:shadow-neutral-900/50 motion-safe:hover:shadow-lg cursor-pointer"
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.18 }}
      onClick={() => console.log('hello')}>
      {children}
    </motion.article>
  );
}
