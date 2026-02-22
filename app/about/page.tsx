'use client';

import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import TechStackChips from '@/components/TechStackChips';

// export const metadata: Metadata = {
//   title: 'About Me',
//   description: 'Learn more about Louis Chan — full-stack developer based in Calgary.',
// };

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <main className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <section className="mb-12">
          <h1
            className="text-center
              text-[clamp(3.5rem,8vw,7rem)]
              font-black
              tracking-[-0.03em]
              leading-[0.9]
              break-words
              text-neutral-900 dark:text-neutral-100
              mb-6">
            About Me
          </h1>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
            <p>
              Hi, I&apos;m Louis — a full-stack developer based in Calgary, AB. I love building products that sit at the
              intersection of great engineering and thoughtful design.
            </p>
            <p>
              I specialize in React, Next.js, Node.js, and TypeScript. I care deeply about performance, accessibility,
              and developer experience.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source, or
              sharing what I&apos;ve learned with the community.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Skills
          </h2>
          <TechStackChips />
        </section>
      </main>

      <Footer />
    </div>
  );
}
