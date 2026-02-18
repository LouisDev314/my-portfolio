'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExpandableCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

export default function ExpandableCard({ title, icon, children, className, defaultOpen = false }: ExpandableCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={cn(
        'rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900 overflow-hidden',
        className,
      )}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
        aria-expanded={open}>
        <div className="flex items-center gap-3">
          <span className="text-neutral-500 dark:text-neutral-400">{icon}</span>
          <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{title}</span>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-4 w-4 text-neutral-400 dark:text-neutral-600" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="overflow-hidden">
            <div className="border-t border-neutral-100 px-5 py-4 dark:border-neutral-800">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
