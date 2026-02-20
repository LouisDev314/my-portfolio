import React from 'react';
import { Project } from '@/lib/projects';
import Badge from 'components/Badge';
import { motion } from 'motion/react';
import GitHubIcon from '@/assets/github-icon';
import YouTubeIcon from '@/assets/youtube-icon';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const shouldOpenOnReleaseRef = React.useRef(false);

  const isFromInteractiveChild = (target: EventTarget | null) => {
    const el = target as HTMLElement | null;
    return !!el?.closest('a,button,[role="button"],[data-no-card-nav="true"]');
  };

  const openLive = () => {
    if (!project.liveUrl) return;
    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
  };

  const stopCardNav = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    // also block the "release-to-open" behavior
    shouldOpenOnReleaseRef.current = false;
  };

  return (
    <motion.article
      className="
        group cursor-pointer flex flex-col rounded-2xl overflow-hidden
        border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900
        hover:shadow-lg dark:hover:shadow-neutral-900/50
        will-change-transform
      "
      // Smooth animations that START immediately (no delay)
      transition={{
        // hover lift: smooth, no delay
        y: { type: 'tween', ease: 'easeOut', duration: 0.18 },
        // press scale: quicker so it feels responsive
        scale: { type: 'tween', ease: 'easeOut', duration: 0.08 },
      }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      onPointerDown={(e) => {
        // primary button only (left click)
        if ('button' in e && e.button !== 0) return;

        // Don't open if press starts on links/buttons inside
        shouldOpenOnReleaseRef.current = !isFromInteractiveChild(e.target);
      }}
      onPointerUp={(e) => {
        if (!shouldOpenOnReleaseRef.current) return;
        shouldOpenOnReleaseRef.current = false;

        // If release happens on an interactive child, ignore
        if (isFromInteractiveChild(e.target)) return;

        openLive();
      }}
      onPointerCancel={() => {
        shouldOpenOnReleaseRef.current = false;
      }}
      onPointerLeave={() => {
        // press + drag out cancels navigation
        shouldOpenOnReleaseRef.current = false;
      }}
      role="link"
      tabIndex={0}
      aria-label={`${project.name}${project.liveUrl ? ' (opens in new tab)' : ''}`}
      onKeyDown={(e) => {
        // keyboard accessibility: Enter/Space triggers open
        if (!project.liveUrl) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLive();
        }
      }}>
      {/* Image */}
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

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techs.map((tech) => (
            <Badge key={tech} title={tech} hasAnim={false} />
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center pt-3 border-t border-neutral-100 dark:border-neutral-800">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onPointerDown={stopCardNav}
              onPointerUp={stopCardNav}
              onClick={stopCardNav}
              className="flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
              Demo <YouTubeIcon className="size-5 fill-red-500 ml-0.5" />
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onPointerDown={stopCardNav}
              onPointerUp={stopCardNav}
              onClick={stopCardNav}
              className="ml-auto flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
              <GitHubIcon className="size-5 dark:fill-white mr-0.5" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
