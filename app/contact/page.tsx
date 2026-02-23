import ContactCard from '@/components/ContactCard';
import React from 'react';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <main className="mx-auto max-w-4xl px-6 pt-28 md:pb-16">
        <h1
          className="text-center
            text-[clamp(4.5rem,10vw,9rem)]
            font-black
            tracking-[-0.04em]
            leading-[0.85]
            break-words
            text-neutral-900 dark:text-neutral-100
            mb-12">
          Contact
        </h1>
        <ContactCard />
      </main>
      <Footer />
    </div>
  );
}
