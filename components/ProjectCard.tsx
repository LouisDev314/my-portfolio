'use client';

import React from 'react';
import { Project } from '@/lib/projects';
import Badge from 'components/Badge';
import { motion, useAnimationControls } from 'motion/react';
import GitHubIcon from '@/assets/icons/github-icon';
import YoutubeIcon from '@/assets/icons/youtube-icon';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const shouldOpenOnReleaseRef = React.useRef(false);
  const isHoveringRef = React.useRef(false);

  const controls = useAnimationControls();

  const isFromInteractiveChild = (target: EventTarget | null) => {
    const el = target as HTMLElement | null;
    return !!el?.closest('a,button,[role="button"],[data-no-card-nav="true"]');
  };

  const openLive = () => {
    if (!project.liveUrl) return;
    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
  };

  const setRest = React.useCallback(() => {
    controls.start({ y: 0, scale: 1 });
  }, [controls]);

  const setHover = React.useCallback(() => {
    controls.start({ y: -4, scale: 1 });
  }, [controls]);

  const setPressed = React.useCallback(() => {
    controls.start({ y: -4, scale: 0.97 });
  }, [controls]);

  // 🔒 Hard reset when leaving/returning to tab (prevents “stuck hover/pressed”)
  React.useEffect(() => {
    const onBlur = () => {
      isHoveringRef.current = false;
      shouldOpenOnReleaseRef.current = false;
      setRest();
    };

    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        isHoveringRef.current = false;
        shouldOpenOnReleaseRef.current = false;
        setRest();
      }
    };

    window.addEventListener('blur', onBlur);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.removeEventListener('blur', onBlur);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [setRest]);

  const stopCardNav = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    shouldOpenOnReleaseRef.current = false;

    // Ensure we never remain pressed when clicking the link
    // Keep hover if the pointer is still on the card.
    if (isHoveringRef.current) setHover();
    else setRest();
  };

  return (
    <motion.article
      className="
        group cursor-pointer flex flex-col rounded-2xl overflow-hidden
        border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900
        hover:shadow-lg dark:hover:shadow-neutral-900/50
        will-change-transform
      "
      initial={{ y: 0, scale: 1 }}
      animate={controls}
      transition={{
        y: { type: 'tween', ease: 'easeOut', duration: 0.18 },
        scale: { type: 'tween', ease: 'easeOut', duration: 0.08 },
      }}
      onPointerEnter={() => {
        isHoveringRef.current = true;
        setHover();
      }}
      onPointerLeave={() => {
        isHoveringRef.current = false;
        shouldOpenOnReleaseRef.current = false;
        setRest();
      }}
      onPointerDown={(e) => {
        // primary button only (left click)
        if ('button' in e && e.button !== 0) return;

        const fromChild = isFromInteractiveChild(e.target);
        shouldOpenOnReleaseRef.current = !fromChild;

        // only press-animate if it started on the card, not on links/buttons
        if (!fromChild) setPressed();
      }}
      onPointerUp={(e) => {
        const fromChild = isFromInteractiveChild(e.target);

        // return to hover/rest depending on pointer still being in card
        if (isHoveringRef.current) setHover();
        else setRest();

        if (!shouldOpenOnReleaseRef.current) return;
        shouldOpenOnReleaseRef.current = false;

        if (fromChild) return;
        openLive();
      }}
      onPointerCancel={() => {
        shouldOpenOnReleaseRef.current = false;
        if (isHoveringRef.current) setHover();
        else setRest();
      }}
      role="link"
      tabIndex={0}
      aria-label={`${project.name}${project.liveUrl ? ' (opens in new tab)' : ''}`}
      onKeyDown={(e) => {
        if (!project.liveUrl) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          // keyboard shouldn’t leave it “hover lifted”
          setRest();
          openLive();
        }
      }}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.imgUrl}
          alt={project.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
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
        <div className="flex items-center justify-center pt-3 border-t border-neutral-100 dark:border-neutral-800">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onPointerDown={stopCardNav}
              onPointerUp={stopCardNav}
              onClick={stopCardNav}
              className="flex items-center gap-1 hover:underline">
              <p className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-50 transition-colors">
                Demo
              </p>
              <YoutubeIcon className="size-5.5 fill-[#FF0000] ml-0.5" />
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
              className="ml-auto flex hover:underline items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-50 transition-colors">
              <GitHubIcon className="size-5 dark:fill-white mr-0.5" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
