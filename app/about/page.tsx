'use client';

import Footer from '@/components/Footer';
import TechStackChips from '@/components/TechStackChips';
import { WorkTimeline } from '@/components/WorkTimeline';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <main className="mx-auto max-w-4xl px-6 pt-28 md:pb-16">
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
          <div className="text-center space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed md:mt-12">
            <p>
              Hi, I’m Louis — a full-stack developer based in Calgary, AB, building products that solve real-world
              problems and create meaningful impact.
            </p>
            <p>
              I work across the stack with React, Next.js, Node.js, and TypeScript, crafting scalable systems, intuitive
              interfaces, and increasingly, AI-driven workflows.
            </p>
            <p>
              I believe technology is more than code — it’s a way to connect ideas, empower people, and shape the
              future. I’m driven to turn ideas into production-ready solutions that are thoughtful, fast, and built to
              last.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Skills
          </h2>
          <TechStackChips />
          <WorkTimeline />
        </section>
      </main>

      <Footer />
    </div>
  );
}
