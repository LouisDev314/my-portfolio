import { Project } from '@/lib/projects';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-neutral-200 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:shadow-neutral-900/50">
      {/* Image area — gradient placeholder with project initial */}
      <div className="relative h-48 overflow-hidden bg-linear-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center">
        <span className="text-4xl font-bold text-neutral-300 dark:text-neutral-600 group-hover:scale-110 transition-transform duration-500 select-none">
          {project.name.charAt(0)}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-1.5">{project.name}</h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors">
              View <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} source code`}
              className="ml-auto flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
