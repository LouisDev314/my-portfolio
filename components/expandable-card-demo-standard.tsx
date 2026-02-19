'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { MapPin, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Globe } from './Globe';
import Badge from '@/components/Badge';
import { TimeChip } from '@/components/TimeChip';

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-3/4 bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden">
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-4 px-4 h-full">
                {typeof active.content === 'function' ? active.content() : active.content}
              </motion.div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto flex justify-around gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 size-36 flex flex-col md:flex-row justify-center items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-3xl cursor-pointer">
            <div className="flex gap-4 flex-col md:flex-row items-center">
              <motion.div layoutId={`image-${card.title}-${id}`} className="flex justify-center">
                <card.icon className={cn('size-6', card.iconColor)} />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-sm font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-sm text-neutral-600 dark:text-neutral-400 text-center md:text-left">
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

const MY_TECHS = ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'];

const cards = [
  {
    title: 'Based in Canada',
    description: 'Remote',
    // src: 'https://assets.aceternity.com/demos/lana-del-rey.jpeg',
    icon: MapPin,
    iconColor: 'text-red-600',
    content: () => {
      return <Globe />;
    },
  },
  {
    title: 'My Tech Stack',
    description: '',
    // src: 'https://assets.aceternity.com/demos/babbu-maan.jpeg',
    icon: Layers,
    iconColor: 'text-indigo-500',
    content: () => {
      return (
        <div className="relative w-full h-full rounded-3xl bg-white dark:bg-black overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-2 px-6 pt-8 pb-6">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
              My Tech Stack
            </h2>
            <span className="text-sm md:text-base text-neutral-600 dark:text-neutral-400">
              I build scalable, production-ready applications with modern technologies.
            </span>
          </motion.div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {MY_TECHS.map((tech) => (
              <Badge key={tech} title={tech} />
            ))}
          </div>
        </div>
      );
    },
  },
];
