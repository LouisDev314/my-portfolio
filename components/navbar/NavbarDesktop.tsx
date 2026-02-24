'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useThemeRipple } from '@/components/ThemeRippleProvider';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Sun, Moon, ChevronDown } from 'lucide-react';
import { Navbar, NavBody } from '@/components/ui/resizable-navbar';
import { cn } from '@/lib/utils';

function ThemeToggleButton() {
  const { resolvedTheme } = useTheme();
  const { toggleThemeWithRipple } = useThemeRipple();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-700 animate-pulse" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={toggleThemeWithRipple}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex size-8 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 transition-colors">
      {isDark ? <Sun className="size-5 text-amber-400" /> : <Moon className="size-5" />}
    </button>
  );
}

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blogs', href: '/blogs' },
];

const SECONDARY_NAV_ITEMS = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms & Conditions', href: '/terms' },
];

export function NavbarDesktop() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="hidden lg:block w-full">
      <Navbar className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100%-2rem)] max-w-6xl pointer-events-none">
        <NavBody
          className={cn(
            // glass background
            'bg-white/70 backdrop-blur-xl border border-white/30 shadow-sm',
            'dark:bg-neutral-900/60 dark:border-white/10',
            // layout
            'text-neutral-900 dark:text-neutral-100 flex items-center justify-between px-4 py-2 pointer-events-auto',
          )}>
          <div className="flex items-center space-x-3 shrink-0">
            <Image
              src="/portfolio-logo.webp"
              alt="My PNG image"
              width={32}
              height={32}
              className="rounded-full size-8 border border-amber-400 dark:border-0"
            />
            <span className="text-sm font-semibold whitespace-nowrap">Louis Chan</span>
          </div>

          <div className="flex items-center gap-1 xl:gap-2 mx-auto justify-center">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(item.href);
                  }}
                  className={cn(
                    'px-3 py-1.5 text-sm rounded-full transition-colors font-medium whitespace-nowrap relative',
                    isActive
                      ? 'bg-neutral-900/5 text-amber-400 dark:bg-white/10'
                      : 'hover:bg-neutral-900/5 dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-300',
                  )}>
                  {item.name}
                </Link>
              );
            })}

            <div className="relative group inline-block">
              <button className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-full transition-colors font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-900/5 dark:hover:bg-white/10">
                More <ChevronDown className="size-3.5 opacity-60" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                <div className="flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-lg p-1.5 min-w-[160px]">
                  {SECONDARY_NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(item.href);
                      }}
                      className="px-3 py-2 text-sm rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 whitespace-nowrap transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 shrink-0">
            <ThemeToggleButton />
            <a
              href="https://www.linkedin.com/in/lcch/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors whitespace-nowrap">
              <span>Connect Now</span>
              <ExternalLink className="size-4 ml-2" />
            </a>
          </div>
        </NavBody>
      </Navbar>
    </div>
  );
}
