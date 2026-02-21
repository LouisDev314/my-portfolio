'use client';

import NavbarDrawer from '@/components/NavbarDrawer';
import ProjectCard from '@/components/ProjectCard';
import ContactCard from '@/components/ContactCard';
import Footer from '@/components/Footer';
import { projects } from '@/lib/projects';
import Link from 'next/link';
import { ExpandableCard, CardItem } from '@/components/ExpandableCard';
import { MapPin, Layers } from 'lucide-react';
import { Globe } from '@/components/Globe';
import { ImagesBadge } from '@/components/ui/images-badge';
import TechStack from '@/components/TechStack';

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
    title: 'My Tech Stack',
    description: 'Full Stack Dev',
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
      <NavbarDrawer />

      <main className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        {/* ── A) HERO ─────────────────────────────────────────────── */}
        <section className="mt-36 mb-16 flex flex-col items-center">
          <h1 className="text-8xl font-black tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">Louis</h1>
          <p className="text-xl sm:text-xl font-medium tracking-widest text-neutral-400 dark:text-neutral-500 uppercase leading-relaxed">
            Technology as a bridge
          </p>
          <br />
          <p className="text-base italic font-medium tracking-widest text-neutral-400 dark:text-neutral-500 uppercase leading-relaxed">
            Connect. Build. Impact.
          </p>
        </section>

        {/* ── EXPANDABLE CARDS ────────────────────────────────────── */}
        <section className="mt-48 mb-20 gap-4">
          <ExpandableCard cards={cards} />
        </section>

        {/* ── B) SELECTED WORK ────────────────────────────────────── */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">Selected Work</h2>
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

        {/* ── C) About Me ─────────────────────────────────────── */}
        <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">About Me</h2>
        <section className="mb-16">
          <ContactCard />
        </section>
      </main>

      {/* ── D) FOOTER ───────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
