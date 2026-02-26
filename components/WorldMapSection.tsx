'use client';

import WorldMap from '@/components/ui/world-map';
import { motion } from 'motion/react';

export function WorldMapSection() {
  return (
    <div className="py-6 w-full">
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
      <div className="max-w-7xl mx-auto text-center mt-6">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Stay <span className="text-neutral-400">Connected</span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Hi, I’m Louis — a full-stack developer based in Calgary, focused on building scalable, real-world
          applications.
          <br />
          <br />
          I work across modern web technologies, from React and Next.js to backend systems and AI-driven workflows. My
          focus is on designing systems that are reliable, maintainable, and built with long-term clarity in mind.
          <br />
          <br />
          I’m particularly interested in how software can move beyond functionality — creating tools that are efficient,
          meaningful, and capable of delivering real impact.
        </p>
      </div>
    </div>
  );
}
