import Link from 'next/link';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-24">
            <div className="mx-auto max-w-4xl px-6 py-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    {/* Left column */}
                    <div className="flex flex-col gap-2">
                        <Link
                            href="/"
                            className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/projects"
                            className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
                        >
                            Projects
                        </Link>
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col gap-2 sm:items-end">
                        <Link
                            href="/about"
                            className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
                        >
                            About Me
                        </Link>
                        <a
                            href="mailto:louis@example.com"
                            className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-neutral-100 dark:border-neutral-800 pt-6">
                    <p className="text-xs text-neutral-400 dark:text-neutral-600">
                        © {year} Louis Chan. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
