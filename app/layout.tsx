import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { ThemeRippleProvider } from '@/components/ThemeRippleProvider';
import Navbar from '@/components/navbar/Navbar';
import SmoothScroll from '@/components/SmoothScroll';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

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
      <body>
        <SmoothScroll />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeRippleProvider>
            <Navbar />
            {children}
            <Analytics />
          </ThemeRippleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
