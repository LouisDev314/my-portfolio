import NavbarDrawer from '@/components/NavbarDrawer';
import ExpandableCard from '@/components/ExpandableCard';
import ProjectCard from '@/components/ProjectCard';
import ContactCard from '@/components/ContactCard';
import Footer from '@/components/Footer';
import { projects } from '@/lib/projects';
import { MapPin, Layers } from 'lucide-react';
import Link from 'next/link';

// Tech stack data for the expandable card
const TECH_STACK = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Docker'];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <NavbarDrawer />

      <main className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        {/* ── A) HERO ─────────────────────────────────────────────── */}
        <section className="mt-36 mb-16 flex flex-col items-center">
          <h1 className="text-6xl font-black sm:text-8xl tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
            Louis
          </h1>
          <p className="text-xl sm:text-xl font-medium tracking-widest text-neutral-400 dark:text-neutral-500 uppercase leading-relaxed">
            Technology as a bridge
          </p>
          <br />
          <p className="text-base sm:text-base italic font-medium tracking-widest text-neutral-400 dark:text-neutral-500 uppercase leading-relaxed">
            Connect. Build. Impact.
          </p>
        </section>

        {/* ── EXPANDABLE CARDS ────────────────────────────────────── */}
        <section className="mb-20 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Based in Calgary */}
          <ExpandableCard title="Based in Calgary" icon={<MapPin className="h-4 w-4" />}>
            <dl className="space-y-2.5 text-sm">
              <div className="flex justify-between">
                <dt className="text-neutral-500 dark:text-neutral-400">Location</dt>
                <dd className="font-medium text-neutral-900 dark:text-neutral-100">Calgary, AB, Canada</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500 dark:text-neutral-400">Timezone</dt>
                <dd className="font-medium text-neutral-900 dark:text-neutral-100">MST (UTC−7)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500 dark:text-neutral-400">Availability</dt>
                <dd className="font-medium text-emerald-600 dark:text-emerald-400">Open to work</dd>
              </div>
            </dl>
          </ExpandableCard>

          {/* Tech Stack */}
          <ExpandableCard title="Tech Stack" icon={<Layers className="h-4 w-4" />}>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>
          </ExpandableCard>
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
