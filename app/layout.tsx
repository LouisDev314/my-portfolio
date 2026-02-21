import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { ThemeRippleProvider } from '@/components/ThemeRippleProvider';
import NavbarDrawer from '@/components/NavbarDrawer';
import SmoothScroll from '@/components/SmoothScroll';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Louis Chan — Full Stack Developer',
    template: '%s | Louis Chan',
  },
  description: 'Full-stack developer based in Calgary. Technology as a bridge — connect, build, change.',
  keywords: ['Louis Chan', 'Full Stack Developer', 'Next.js', 'React', 'TypeScript'],
  authors: [{ name: 'Louis Chan' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Louis Chan',
    title: 'Louis Chan — Full Stack Developer',
    description: 'Full-stack developer based in Calgary. Technology as a bridge — connect, build, change.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SmoothScroll />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeRippleProvider>
            <NavbarDrawer />
            {children}
          </ThemeRippleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
