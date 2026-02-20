'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { cn } from '@/lib/utils';

export type CardItem = {
  id?: string;
  title: string;
  description: string;
  icon: React.ElementType<any>;
  iconColor?: string;
  content: React.ReactNode | (() => React.ReactNode);
};

export interface ExpandableCardsProps {
  cards: CardItem[];
  className?: string;
}

export function ExpandableCard({ cards, className }: ExpandableCardsProps) {
  const [active, setActive] = useState<CardItem | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const baseId = useId();

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

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/5 dark:bg-black/20"
            />
            <motion.div
              layoutId={`card-${active.title}-${active.id || baseId}`}
              ref={ref as React.RefObject<HTMLDivElement>}
              className="w-full max-w-[500px] h-3/4 bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden z-10">
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
      <ul className={cn('w-full mx-auto flex justify-around gap-4', className)}>
        {cards.map((card) => {
          const cardId = card.id || baseId;
          const Icon = card.icon as any;
          return (
            <motion.div
              layoutId={`card-${card.title}-${cardId}`}
              key={`card-${card.title}-${cardId}`}
              onClick={() => setActive(card)}
              className="p-4 size-36 flex flex-col md:flex-row justify-center items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-3xl cursor-pointer relative z-0">
              <div className="flex gap-4 flex-col md:flex-row items-center">
                <motion.div layoutId={`image-${card.title}-${cardId}`} className="flex justify-center">
                  <Icon className={cn('size-6', card.iconColor)} />
                </motion.div>
                <div>
                  <motion.h3
                    layoutId={`title-${card.title}-${cardId}`}
                    className="text-sm font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${cardId}`}
                    className="text-sm text-neutral-600 dark:text-neutral-400 text-center md:text-left">
                    {card.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </ul>
    </>
  );
}
