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
import { ImagesBadge } from '@/components/ui/images-badge';
import TSIcon from '@/assets/icons/ts-icon';
import NextIcon from '@/assets/icons/next-icon';
import SolidIcon from '@/assets/icons/solid-icon';
import ReactIcon from '@/assets/icons/react-icon';
import NodeIcon from '@/assets/icons/node-icon';
import SpringBootIcon from '@/assets/icons/spring-boot-icon';
import FastAPIIcon from '@/assets/icons/fastapi-icon';
import PostgreSQLIcon from '@/assets/icons/postgresql-icon';
import MongoIcon from '@/assets/icons/mongo-icon';
import RedisIcon from '@/assets/icons/redis-icon';
import RenderIcon from '@/assets/icons/render-icon';
import DockerIcon from '@/assets/icons/docker-icon';
import GitHubActionsIcon from '@/assets/icons/github-actions-icon';
import GitLabIcon from '@/assets/icons/gitlab-icon';
import StripeIcon from '@/assets/icons/stripe-icon';
import LangChainIcon from '@/assets/icons/langchain-icon';
import ExpoIcon from '@/assets/icons/expo-icon';
import GitIcon from '@/assets/icons/git-icon';
import ZodIcon from '@/assets/icons/zod-icon';
import TanStackIcon from '@/assets/icons/tanstack-icon';
import TailwindIcon from '@/assets/icons/tailwind-icon';
import PrismaIcon from '@/assets/icons/prisma-icon';
import UnrealIcon from '@/assets/icons/unreal-icon';
import UnityIcon from '@/assets/icons/unity-icon';

const TECH_CATEGORIES = [
  {
    title: 'Frontend',
    techs: [
      { title: 'Next.js', icon: <NextIcon className="size-4 fill-black dark:fill-white" /> },
      { title: 'Solid.js', icon: <SolidIcon className="size-4 fill-[#2C4F7C]" /> },
      { title: 'React', icon: <ReactIcon className="size-4 fill-[#61DAFB]" /> },
      { title: 'Tailwind CSS', icon: <TailwindIcon className="size-4 fill-[#06B6D4]" /> },
      { title: 'Expo', icon: <ExpoIcon className="size-4 fill-[#1C2024] dark:fill-white" /> },
      { title: 'TanStack', icon: <TanStackIcon className="size-4 fill-black dark:fill-white" /> },
      { title: 'Typescript', icon: <TSIcon className="size-4 fill-[#3178C6]" /> },
    ],
  },
  {
    title: 'Backend',
    techs: [
      { title: 'Node.js', icon: <NodeIcon className="size-4 fill-[#5FA04E]" /> },
      { title: 'Zod', icon: <ZodIcon className="size-4 fill-[#408AFF]" /> },
      { title: 'Prisma', icon: <PrismaIcon className="size-4 fill-[#2D3748] dark:fill-white" /> },
      { title: 'Java Spring Boot', icon: <SpringBootIcon className="size-4 fill-[#6DB33F]" /> },
      { title: 'Python FastAPI', icon: <FastAPIIcon className="size-4 fill-[#009688]" /> },
    ],
  },
  {
    title: 'Database',
    techs: [
      { title: 'PostgreSQL', icon: <PostgreSQLIcon className="size-4 fill-[#4169E1]" /> },
      { title: 'MongoDB', icon: <MongoIcon className="size-4 fill-[#47A248]" /> },
      { title: 'Redis', icon: <RedisIcon className="size-4 fill-[#FF4438]" /> },
    ],
  },
  {
    title: 'DevOps / Infra',
    techs: [
      { title: 'Render', icon: <RenderIcon className="size-4 fill-black dark:fill-white" /> },
      { title: 'Solid.js', icon: <DockerIcon className="size-4 fill-[#2496ED]" /> },
      { title: 'Git', icon: <GitIcon className="size-4 fill-[#F05032]" /> },
      { title: 'GitHub Actions', icon: <GitHubActionsIcon className="size-4 fill-[#2088FF]" /> },
      { title: 'GitLab', icon: <GitLabIcon className="size-4 fill-[#FC6D26]" /> },
    ],
  },
  {
    title: 'Payments',
    techs: [{ title: 'Stripe', icon: <StripeIcon className="size-4 fill-[#635BFF]" /> }],
  },
  {
    title: 'AI / Data',
    techs: [{ title: 'LangChain', icon: <LangChainIcon className="size-4 fill-[#1C3C3C]" /> }],
  },
  {
    title: 'Game Engines',
    techs: [
      { title: 'Unreal', icon: <UnrealIcon className="size-4 fill-[#0E1128] dark:fill-white" /> },
      { title: 'Unity', icon: <UnityIcon className="size-4 fill-black dark:fill-white" /> },
    ],
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
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
              {TECH_CATEGORIES.map((category) => (
                <div
                  key={category.title}
                  className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                  <h3 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((tech) => (
                      <Badge
                        key={tech.title}
                        title={tech.title}
                        icon={tech.icon}
                        fillClassName="bg-neutral-200/60 dark:bg-indigo-500/20"
                      />
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
