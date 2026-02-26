'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

type PictureItem = {
  src: string; // "/photos/1.jpg" or "https://..."
  alt?: string; // accessibility
  href?: string; // optional click-through link
};

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
  imageClassName,
}: {
  items: PictureItem[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
  imageClassName?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addAnimation() {
    if (!containerRef.current || !scrollerRef.current) return;

    // Prevent duplicating again if component re-mounts in dev/hmr
    if (scrollerRef.current.dataset.duplicated === 'true') {
      getDirection();
      getSpeed();
      setStart(true);
      return;
    }

    const scrollerContent = Array.from(scrollerRef.current.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });

    scrollerRef.current.dataset.duplicated = 'true';

    getDirection();
    getSpeed();
    setStart(true);
  }

  const getDirection = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty('--animation-direction', direction === 'left' ? 'forwards' : 'reverse');
  };

  const getSpeed = () => {
    if (!containerRef.current) return;
    const duration = speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s';
    containerRef.current.style.setProperty('--animation-duration', duration);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className,
      )}>
      <ul
        ref={scrollerRef}
        className={cn('flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4', start && 'animate-scroll')}>
        {items.map((item, idx) => {
          const CardInner = (
            <div
              className={cn(
                'relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm',
                'dark:border-white/10',
                // card sizing (tweak as you like)
                'h-40 w-56 md:h-48 md:w-72',
              )}>
              {/* plain img to avoid Next/Image config issues; swap to <Image /> if you want */}
              <img
                src={item.src}
                alt={item.alt ?? `image-${idx}`}
                loading="lazy"
                className={cn(
                  'h-full w-full object-cover',
                  'transition-transform duration-300 ease-out hover:scale-[1.03]',
                  imageClassName,
                )}
              />
            </div>
          );

          return (
            <li key={`${item.src}-${idx}`} className="shrink-0">
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer" className="block">
                  {CardInner}
                </a>
              ) : (
                CardInner
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
