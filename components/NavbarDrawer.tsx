'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Sun, Moon, Command } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_SECTIONS = [
    {
        items: [
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Work', href: '/projects' },
            { name: 'Blogs', href: '/blogs' },
        ],
    },
    {
        items: [
            { name: 'Links', href: '/links' },
            { name: 'Uses', href: '/uses' },
            { name: 'Guestbook', href: '/guestbook' },
        ],
    },
];

function ThemeToggleButton() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <div className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-700 animate-pulse" />
        );
    }

    const isDark = resolvedTheme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 transition-colors"
        >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
    );
}

export default function NavbarDrawer() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const ref = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        if (open) document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [open]);

    // Close on ESC
    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setOpen(false);
        }
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, []);

    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50" ref={ref}>
            <motion.div
                layout
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={cn(
                    'overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-900',
                    open ? 'w-72' : 'w-56'
                )}
            >
                {/* Pill header — always visible */}
                <div
                    onClick={() => setOpen((v) => !v)}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpen((v) => !v)}
                    role="button"
                    tabIndex={0}
                    className="flex w-full cursor-pointer items-center justify-between px-4 py-2.5 outline-none"
                    aria-expanded={open}
                    aria-label="Toggle navigation menu"
                >
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center">
                            <span className="text-[10px] font-bold text-white dark:text-neutral-900">L</span>
                        </div>
                        <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                            Louis Chan
                        </span>
                    </div>

                    {/* Theme toggle — stop propagation so it doesn't toggle the drawer */}
                    <div onClick={(e) => e.stopPropagation()}>
                        <ThemeToggleButton />
                    </div>
                </div>

                {/* Drawer content */}
                <AnimatePresence initial={false}>
                    {open && (
                        <motion.div
                            key="drawer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="overflow-hidden"
                        >
                            <div className="px-2 pb-3">
                                {NAV_SECTIONS.map((section, si) => (
                                    <div key={si}>
                                        {si > 0 && (
                                            <div className="my-1.5 border-t border-neutral-100 dark:border-neutral-800" />
                                        )}
                                        {section.items.map((item) => {
                                            const isActive =
                                                item.href === '/'
                                                    ? pathname === '/'
                                                    : pathname.startsWith(item.href);
                                            return (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() => setOpen(false)}
                                                    className={cn(
                                                        'flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition-colors',
                                                        isActive
                                                            ? 'bg-neutral-100 font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
                                                            : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100'
                                                    )}
                                                >
                                                    {isActive && (
                                                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                                                    )}
                                                    {!isActive && <span className="h-1.5 w-1.5 flex-shrink-0" />}
                                                    {item.name}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                ))}

                                {/* Spacer + CTA */}
                                <div className="mt-3 space-y-1.5">
                                    <a
                                        href="mailto:louis@example.com"
                                        onClick={() => setOpen(false)}
                                        className="flex w-full items-center justify-center rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors"
                                    >
                                        Book a Call
                                    </a>

                                    <button
                                        className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm text-neutral-500 hover:bg-neutral-50 dark:text-neutral-500 dark:hover:bg-neutral-800 transition-colors"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span>Command Menu</span>
                                        <span className="flex items-center gap-0.5 text-xs text-neutral-400 dark:text-neutral-600">
                                            <Command className="h-3 w-3" />
                                            <span>K</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
