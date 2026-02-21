import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import { projects } from '@/lib/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Work',
  description: 'Projects and work by Louis Chan.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <main className="mx-auto max-w-4xl px-6 pt-28">
        <div className="mb-6">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-3">
            Selected Work
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-xl">Crafting modern experience.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
