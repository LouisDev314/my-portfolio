import NavbarDrawer from '@/components/NavbarDrawer';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Blogs' };

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <NavbarDrawer />
      <main className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">Blogs</h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          Coming soon — writing about tech, design, and building things.
        </p>
      </main>
      <Footer />
    </div>
  );
}
