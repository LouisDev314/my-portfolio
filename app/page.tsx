import Hero from '@/components/Hero';
import { ResizableNavbar } from '@/components/ResizableNavbar';

export default function Home() {
  return (
    <div>
      <nav>
        <ResizableNavbar />
      </nav>
      <main className="flex min-h-screen w-full flex-col items-center bg-black sm:items-start">
        <section>
          <Hero />
        </section>
      </main>
    </div>
  );
}
