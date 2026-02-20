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

const TECH_CATEGORIES = [
  {
    title: 'Frontend',
    techs: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Backend',
    techs: ['Node.js', 'Express', 'Spring Boot'],
  },
  {
    title: 'Database',
    techs: ['PostgreSQL', 'Supabase', 'Prisma'],
  },
  {
    title: 'DevOps / Infra',
    techs: ['AWS', 'Docker', 'CI/CD'],
  },
  {
    title: 'Payments',
    techs: ['Stripe'],
  },
  {
    title: 'AI / Data',
    techs: ['LangChain', 'RAG', 'OpenAI'],
  },
];

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
    description: 'Full Stack Dev',
    // src: 'https://assets.aceternity.com/demos/babbu-maan.jpeg',
    icon: Layers,
    iconColor: 'text-indigo-500',
    content: () => {
      return (
        <div className="relative w-full h-full rounded-3xl bg-white dark:bg-black overflow-y-auto p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-2 pb-4 border-b border-neutral-200 dark:border-neutral-800">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
              My Tech Stack
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I build scalable, production-ready applications with modern technologies.
            </p>
          </motion.div>

          <div className="pt-4 space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {TECH_CATEGORIES.map((category) => (
                <div
                  key={category.title}
                  className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                  <h3 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((tech) => (
                      <Badge key={tech} title={tech} />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <h3 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Scalable systems',
                  'Authentication & RBAC',
                  'Payments (Stripe)',
                  'Performance (SSR, caching)',
                  'CI/CD & Cloud',
                  'AI (RAG, agents)',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      );
    },
  },
];
