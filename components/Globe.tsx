'use client';
import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import dynamic from 'next/dynamic';
import { useLocalTime } from '@/hooks/use-local-time';
import { TimeChip } from './TimeChip';

const World = dynamic(() => import('../components/ui/globe').then((m) => m.World), {
  ssr: false,
});

export function Globe() {
  const time = useLocalTime('America/Edmonton'); // Calgary timezone

  const ARC_COLORS = {
    primary: '#3b82f6',
    accent: '#06b6d4',
    indigo: '#6366f1',
  } as const;

  type Arc = {
    order: number;
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    arcAlt: number;
    color: string;
  };

  const CALGARY = { lat: 51.0447, lng: -114.0719 };
  const HONG_KONG = { lat: 22.3193, lng: 114.1694 };
  const SAN_FRANCISCO = { lat: 37.7749, lng: -122.4194 };
  const NEW_YORK = { lat: 40.7128, lng: -74.006 };
  const LONDON = { lat: 51.5072, lng: -0.1276 };
  const TOKYO = { lat: 35.6762, lng: 139.6503 };
  const SINGAPORE = { lat: 1.3521, lng: 103.8198 };
  const VANCOUVER = { lat: 49.2827, lng: -123.1207 };

  function makeArc(
    order: number,
    from: { lat: number; lng: number },
    to: { lat: number; lng: number },
    arcAlt: number,
    color: string,
  ): Arc {
    return {
      order,
      startLat: from.lat,
      startLng: from.lng,
      endLat: to.lat,
      endLng: to.lng,
      arcAlt,
      color,
    };
  }

  const sampleArcs = useMemo<Arc[]>(() => {
    return [
      makeArc(1, CALGARY, HONG_KONG, 0.32, ARC_COLORS.primary),
      makeArc(2, CALGARY, SAN_FRANCISCO, 0.18, ARC_COLORS.accent),
      makeArc(3, CALGARY, NEW_YORK, 0.16, ARC_COLORS.indigo),
      makeArc(4, CALGARY, LONDON, 0.3, ARC_COLORS.primary),
      makeArc(5, CALGARY, TOKYO, 0.36, ARC_COLORS.indigo),
      makeArc(6, CALGARY, SINGAPORE, 0.34, ARC_COLORS.accent),

      // optional “local network” arc (smaller altitude)
      makeArc(7, CALGARY, VANCOUVER, 0.1, ARC_COLORS.accent),
    ];
  }, []);

  const globeConfig = {
    pointSize: 4,
    globeColor: '#3e454c',
    showAtmosphere: true,
    atmosphereColor: '#FFFFFF',
    atmosphereAltitude: 0.1,
    emissive: '#062056',
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: 'rgba(255,255,255,0.7)',
    ambientLight: '#38bdf8',
    directionalLeftLight: '#ffffff',
    directionalTopLight: '#ffffff',
    pointLight: '#ffffff',
    arcTime: 1500,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 51.0447, lng: -114.0719 },
    autoRotate: true,
    autoRotateSpeed: 0.35,
  };

  return (
    <div className="no-scrollbar relative w-full h-full rounded-3xl bg-white border border-amber-400 dark:bg-black overflow-hidden">
      {/* subtle frame glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5 dark:ring-white/10" />

      {/* top gradient for readability */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/90 to-transparent dark:from-black/90 z-20" />

      {/* content */}
      <div className="relative z-30 h-full w-full px-6 pt-8 pb-6 flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-2">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            Building without borders
          </h2>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm md:text-base text-neutral-600 dark:text-neutral-400">
              Working across time zones
            </span>
            <TimeChip label={`Calgary · ${time} (MT)`} />
          </div>
        </motion.div>

        {/* Globe stage (fills remaining space) */}
        <div className="relative flex-1 min-h-[360px] md:min-h-[420px]">
          {/* bottom fade so arcs don't look cut off */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-black z-20" />

          <div className="absolute inset-0 z-10">
            <div className="h-full w-full flex items-center justify-center">
              <div className="h-full w-full max-w-[720px]">
                <World data={sampleArcs} globeConfig={globeConfig} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
