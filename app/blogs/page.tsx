import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Blogs' };

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <main className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <h1
          className="text-center
            text-[clamp(4.5rem,10vw,9rem)]
            font-black
            tracking-[-0.04em]
            leading-[0.85]
            break-words
            text-neutral-900 dark:text-neutral-100
            mb-12">
          My Blogs
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          Coming soon — writing about tech, design, and building things.
        </p>
      </main>
      <Footer />
    </div>
  );
}
