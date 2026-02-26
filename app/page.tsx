'use client';

import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import { projects } from '@/lib/projects';
import Link from 'next/link';
import { ExpandableCard, CardItem } from '@/components/ExpandableCard';
import { MapPin, Layers } from 'lucide-react';
import { Globe } from '@/components/Globe';
import { ImagesBadge } from '@/components/ui/images-badge';
import TechStack from '@/components/TechStack';
import RevealOnScroll from '@/components/RevealOnScroll';
import { Inter, Space_Grotesk } from 'next/font/google';
import { motion } from 'motion/react';
import { FlipWords } from '@/components/ui/flip-words';
import { cn } from '@/lib/utils';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { DraggableCard } from '@/components/DraggableCard';
import { useTailwindBreakpoint } from '@/hooks/use-tailwind-breakpoint';
import { Cover } from '@/components/ui/cover';
import InfinitePicturesCarousel from '@/components/InfinitePicturesCarousel';
import ContactCard from '@/components/ContactCard';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });
const space = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const cards: CardItem[] = [
  {
    id: 'canada',
    title: 'Based in Canada',
    description: 'Remote',
    icon: MapPin,
    iconColor: 'text-red-600',
    content: () => {
      return <Globe />;
    },
  },
  {
    id: 'tech-stack',
    title: 'Tech Stack',
    description: 'Skill set',
    icon: Layers,
    iconColor: 'text-indigo-500',
    content: () => {
      return <TechStack />;
    },
  },
];

export default function Home() {
  const { isSm } = useTailwindBreakpoint();

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <main className="mx-auto max-w-7xl px-6 pt-28">
        {/* ── A) HERO ─────────────────────────────────────────────── */}
        <section className="mt-24 sm:mt-48 lg:mt-40 mb-16 flex flex-col items-center text-center">
          <h1 className="text-[clamp(6rem,18vw,16rem)] font-blacktracking-[-0.07em] leading-[0.8] wrap-break-word text-neutral-900 dark:text-neutral-100 mb-6 font-black">
            Louis
          </h1>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { delayChildren: 0.15 } },
            }}
            className="flex flex-col items-center text-center">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
              }}
              className={cn(
                'text-xl sm:text-xl font-medium tracking-widest text-neutral-400 dark:text-neutral-500 uppercase leading-relaxed mt-8',
                inter.className,
              )}>
              <div className="uppercase mx-auto tracking-[0.4em] text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-500/80 dark:text-neutral-400/70">
                Technology as a{isSm ? <></> : <br />}
                <FlipWords words={['bridge', 'string', 'knot']} duration={2500} />
              </div>
            </motion.div>
            <br />
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
              }}
              className={cn(
                'text-base italic font-medium tracking-widest text-neutral-400 dark:text-neutral-500 uppercase leading-relaxed',
                inter.className,
              )}>
              <TextGenerateEffect
                words={'Connect. Build. Impact.'}
                duration={1}
                textClassName={`${space.className} text-lg sm:text-xl font-medium tracking-[0.08em]`}
              />
            </motion.div>

            <div className="mt-6">
              <Cover className="text-amber-400 uppercase italic text-lg sm:text-xl">sic itur ad astra</Cover>
            </div>
          </motion.div>
        </section>

        {/* ── EXPANDABLE CARDS ────────────────────────────────────── */}
        <RevealOnScroll>
          <section className="mt-12 sm:mt-40 lg:mt-36 mb-10 gap-4">
            <ExpandableCard cards={cards} />
          </section>
        </RevealOnScroll>

        {/* ── Infinite Pictures ────────────────────────────────────── */}
        <RevealOnScroll>
          <section className="mt-16 mb-12 space-y-8 sm:mt-28 lg:mt-36">
            {/* Title row */}
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl md:text-5xl">
              Quick Glance
            </h2>

            {/* Copy */}
            <div className="space-y-4">
              <p className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
                Building the bridge between ideas and systems, I’m driven by the process of turning complexity into
                something clear and usable. I enjoy creating solutions that feel intuitive on the surface, while
                grounded in thoughtful design underneath.
              </p>

              <p className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
                Outside of code, the journey continues — through experiences, challenges, and growth. Each step shapes
                how I think, build, and move forward.
              </p>
            </div>

            {/* Carousel */}
            <div className="pt-2">
              <InfinitePicturesCarousel />
            </div>

            {/* Soft divider + compact CTA */}
            <div className="pt-4">
              <div className="h-px w-full bg-linear-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />
              <div className="pt-6 mx-auto max-w-4xl">
                <ContactCard />
              </div>
            </div>
          </section>
        </RevealOnScroll>
        {/*<RevealOnScroll>*/}
        {/*  <section className="mt-16 sm:mt-28 lg:mt-36 mb-12 space-y-6">*/}
        {/*    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">*/}
        {/*      Quick Glance*/}
        {/*    </h2>*/}

        {/*    <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">*/}
        {/*      Building the bridge between ideas and systems, I’m a developer who enjoys turning complexity into clarity.*/}
        {/*      I work across full-stack development and AI, creating tools that are practical, reliable, and built for*/}
        {/*      real-world use.*/}
        {/*      <br />*/}
        {/*      <br />*/}
        {/*      Outside of code, the journey continues — through experiences, challenges, and growth. Each step shapes how*/}
        {/*      I think, build, and move forward.*/}
        {/*    </p>*/}

        {/*    <InfinitePicturesCarousel />*/}

        {/*    <ContactCard />*/}
        {/*  </section>*/}
        {/*</RevealOnScroll>*/}

        {/* ── B) Projects ────────────────────────────────────── */}
        <RevealOnScroll>
          <section className="my-16">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                Projects
              </h2>
              <Link href="/projects" className="self-end">
                <ImagesBadge
                  text="View all →"
                  className="hover:underline"
                  images={[
                    'https://assets.aceternity.com/pro/agenforce-1.webp',
                    'https://assets.aceternity.com/pro/agenforce-2.webp',
                    'https://assets.aceternity.com/pro/agenforce-3.webp',
                  ]}
                  folderSize={{ width: 24, height: 18 }}
                  teaserImageSize={{ width: 14, height: 10 }}
                  hoverImageSize={{ width: 36, height: 24 }}
                  hoverTranslateY={-28}
                  hoverSpread={14}
                />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        </RevealOnScroll>

        {/* ── C) About Me ─────────────────────────────────────── */}
        <RevealOnScroll>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-0">
            About Me
          </h2>
          <section className="mb-16">
            <DraggableCard />
          </section>
        </RevealOnScroll>
      </main>

      {/* ── D) FOOTER ───────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
