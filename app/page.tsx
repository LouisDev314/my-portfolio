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
import { Inter } from 'next/font/google';
import { motion } from 'motion/react';
import { FlipWords } from '@/components/ui/flip-words';
import { cn } from '@/lib/utils';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { DraggableCard } from '@/components/DraggableCard';
import { Space_Grotesk } from 'next/font/google';

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
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <main className="mx-auto max-w-4xl px-6 pt-28">
        {/* ── A) HERO ─────────────────────────────────────────────── */}
        <section className="mt-48 mb-16 flex flex-col items-center text-center">
          <h1 className="text-[clamp(6rem,18vw,16rem)] font-blacktracking-[-0.07em] leading-[0.8] break-words text-neutral-900 dark:text-neutral-100 mb-6 font-black">
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
              <div className="uppercase tracking-[0.4em] text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-500/80 dark:text-neutral-400/70">
                Technology as a<FlipWords words={['bridge', 'string', 'knot']} duration={2000} />
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
          </motion.div>
        </section>

        {/* ── EXPANDABLE CARDS ────────────────────────────────────── */}
        <RevealOnScroll>
          <section className="mt-40 lg:mt-34 mb-10 gap-4">
            <ExpandableCard cards={cards} />
          </section>
        </RevealOnScroll>

        {/* ── B) Projects ────────────────────────────────────── */}
        <RevealOnScroll>
          <section className="mb-16">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-24">
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
