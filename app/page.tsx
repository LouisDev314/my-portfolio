import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import { projects } from '@/lib/projects';
import Link from 'next/link';
import { ImagesBadge } from '@/components/ui/images-badge';
import RevealOnScroll from '@/components/RevealOnScroll';
import InfinitePicturesCarousel from '@/components/InfinitePicturesCarousel';
import ContactCard from '@/components/ContactCard';
import { HomeHeroMotion } from '@/components/HomeHeroMotion';
import { HomeExpandableCards } from '@/components/HomeExpandableCards';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <main className="mx-auto max-w-7xl px-6 pt-24">
        {/* ── A) HERO ─────────────────────────────────────────────── */}
        <section className="mt-24 sm:mt-48 lg:mt-40 mb-16 flex flex-col items-center text-center">
          <h1 className="mb-8 text-[clamp(6rem,18vw,16rem)] font-black leading-[0.8] tracking-[-0.07em] break-words text-neutral-900 dark:text-neutral-100">
            Louis
          </h1>
          <p className="text-lg font-semibold uppercase tracking-[0.24em] text-neutral-600 dark:text-neutral-300 sm:text-xl">
            Full Stack Developer
          </p>

          <HomeHeroMotion />
        </section>

        {/* ── EXPANDABLE CARDS ────────────────────────────────────── */}
        <RevealOnScroll>
          <section className="mt-12 sm:mt-40 lg:mt-36 mb-10 gap-4">
            <HomeExpandableCards />
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
                I build production-ready systems by turning complex ideas into clear, reliable products. I focus on
                software that feels simple to use, while being thoughtfully designed and robust under the hood.
              </p>

              <p className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
                Beyond code, I value continuous growth through building and problem-solving—applying each experience to
                improve how I design systems, make decisions, and execute in real-world environments.
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
                  images={['/paper-bridge-logo.webp', '/store-logo.jpeg']}
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
          <section className="mb-16"></section>
        </RevealOnScroll>
      </main>

      {/* ── D) FOOTER ───────────────────────────────────────────── */}
      <Footer homeOverlap />
    </div>
  );
}
