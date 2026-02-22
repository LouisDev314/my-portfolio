'use client';

import { useState } from 'react';
import { Copy, Check, Globe, Linkedin, Github } from 'lucide-react';
import RegularCard from '@/components/RegularCard';

const EMAIL = 'louiscch314@gmail.com';

const SOCIALS = [
  { icon: Globe, href: 'https://louischan.dev', label: 'Website' },
  { icon: Linkedin, href: 'https://linkedin.com/in/louischan', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/louischan', label: 'GitHub' },
];

export default function ContactCard() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback: do nothing
    }
  }

  const content = (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
        Let&apos;s connect and build to change the world.
      </h2>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
        I&apos;m open to new opportunities, collaborations, and interesting conversations.
      </p>

      {/* Email row */}
      <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950 mb-6">
        <span className="flex-1 text-sm font-mono text-neutral-700 dark:text-neutral-300 select-all">{EMAIL}</span>
        <button
          onClick={handleCopy}
          aria-label={copied ? 'Copied!' : 'Copy email address'}
          className="flex h-7 w-7 items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-200 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-300 transition-colors">
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
      </div>

      {/* Social links */}
      <div className="flex items-center gap-3">
        {SOCIALS.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:text-neutral-100 transition-colors">
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </>
  );

  return <RegularCard content={content} />;
}
