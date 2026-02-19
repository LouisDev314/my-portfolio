'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { MapPin, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Globe } from './Globe';

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
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful voice and profound lyrics that resonate
          deeply with his audience. Born in the village of Khant Maanpur in Punjab, India, he has become a cultural icon
          in the Punjabi music industry. <br /> <br /> His songs often reflect the struggles and triumphs of everyday
          life, capturing the essence of Punjabi culture and traditions. With a career spanning over two decades, Babu
          Maan has released numerous hit albums and singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },
];
