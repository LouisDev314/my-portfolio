'use client';

import NavbarDrawer from '@/components/NavbarDrawer';
import ProjectCard from '@/components/ProjectCard';
import ContactCard from '@/components/ContactCard';
import Footer from '@/components/Footer';
import { projects } from '@/lib/projects';
import Link from 'next/link';
import { ExpandableCard, CardItem } from '@/components/ExpandableCard';
import { MapPin, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import Badge from '@/components/Badge';
import { Globe } from '@/components/Globe';

const TECH_CATEGORIES = [
  {
    title: 'Frontend',
    techs: ['Next.js', 'Solid.js', 'React', 'TypeScript'],
  },
  {
    title: 'Backend',
    techs: ['Node.js', 'Java Spring Boot', 'Python FastAPI'],
  },
  {
    title: 'Database',
    techs: ['PostgreSQL', 'MongoDB'],
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
              transition={{ duration: 0.35, delay: 0.2, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {TECH_CATEGORIES.map((category) => (
                <div
                  key={category.title}
                  className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                  <h3 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((tech) => (
                      <Badge key={tech} title={tech} fillClassName="bg-neutral-200/60 dark:bg-indigo-500" />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <h3 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-4">How I Work</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'System thinking',
                  'Performance & scalability focus',
                  'Clear communication',
                  'Ownership & execution',
                  'Continuous learning',
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
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">Selected Work</h2>
            <Link
              href="/projects"
              className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* ── C) CONTACT CARD ─────────────────────────────────────── */}
        <section className="mb-16">
          <ContactCard />
        </section>
      </main>

      {/* ── D) FOOTER ───────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
