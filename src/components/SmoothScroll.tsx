'use client';
import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    // Skip lenis on touch / coarse-pointer devices: native mobile scrolling is
    // already smooth, and lenis' per-frame layout reads add main-thread work
    // and forced reflows on the very devices Lighthouse throttles hardest.
    const isCoarsePointer = !window.matchMedia('(pointer: fine)').matches;
    if (prefersReduced || isCoarsePointer) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
