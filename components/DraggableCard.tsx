import React from 'react';
import { DraggableCardBody, DraggableCardContainer } from '@/components/ui/draggable-card';
import Image from 'next/image';
import { WorldMapSection } from '@/components/WorldMapSection';

export function DraggableCard() {
  const items = [
    {
      title: 'Connect. Build. Impact.',
      image: '/connect.webp',
      className: 'absolute top-5 left-[10%] rotate-[8deg] sm:left-[25%]',
    },
    {
      title: 'Working Across\nTime Zones',
      image: '/timezones.webp',
      className: 'absolute top-40 right-[35%] rotate-[-12deg] sm:left-[2%]',
    },
    {
      title: 'RAG · Agents · Automation',
      image: '/AI.webp',
      className: 'absolute top-15 right-[10%] rotate-[12deg] sm:right-[2%] md:top-25',
    },
    {
      title: 'Full Stack Developer',
      image: '/Microsoft_Atlanta.webp',
      className: 'absolute top-24 right-[25%] rotate-[-8deg] sm:left-[8%]',
    },
    {
      title: 'Graduated from\nGeorgia Tech',
      image: '/GT.webp',
      className: 'absolute top-25 left-[30%] rotate-[4deg] lg:rotate-[4deg] sm:left-[20%] md:left-[25%] lg:left-[50%]',
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-[48rem] w-full items-center justify-center overflow-hidden sm:min-h-screen">
      <WorldMapSection />
      {items.map((item, index) => (
        <DraggableCardBody className={item.className} key={index}>
          <Image
            src={item.image}
            alt={item.title}
            width={320}
            height={320}
            sizes="(max-width: 640px) 256px, 320px"
            loading="lazy"
            className="pointer-events-none relative z-10 size-64 object-cover sm:size-80"
          />
          <h3 className="mt-4 text-center text-xl font-bold text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
