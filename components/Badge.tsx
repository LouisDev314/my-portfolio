'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { JSX } from 'react';

export default function Badge({
  title,
  icon,
  titleClassName,
  fillClassName,
  hasAnim = true,
}: {
  title: string;
  icon?: JSX.Element;
  titleClassName?: string;
  fillClassName?: string;
  hasAnim?: boolean;
}) {
  if (!hasAnim) return (
    <div className="flex justify-center items-center">
      {icon ?? <></>}
      <span
        className={cn(
          'px-3 py-1.5 text-xs rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300',
          titleClassName,
        )}>
        {title}
      </span>
    </div>
  );

  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover="hover"
      whileTap={{ scale: 0.96 }}
      variants={{
        hover: {
          y: -3, // lift upward
          transition: {
            y: { delay: 0.15, type: 'spring', stiffness: 300, damping: 20 },
          },
        },
      }}
      className="relative overflow-hidden inline-flex cursor-default rounded-full px-3 py-1 text-sm border
      bg-neutral-100 border-neutral-200 text-neutral-700
      dark:bg-neutral-900/80 dark:border-neutral-700 dark:text-neutral-300
      shadow-sm">
      {/* Fill Layer */}
      <motion.span
        variants={{
          hover: {
            scaleY: 1,
            transition: { duration: 0.25, ease: 'easeOut' },
          },
        }}
        initial={{ scaleY: 0 }}
        className={cn('absolute inset-0 origin-bottom bg-neutral-200 dark:bg-indigo-500', fillClassName)}
        style={{ zIndex: 0 }}
      />

      {/* Content */}
      <div className="flex justify-center items-center">
        {icon ?? <></>}
        <span className="ml-1.5 relative z-10 transition-colors duration-200 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
          {title}
        </span>
      </div>
    </motion.span>
  );
}
