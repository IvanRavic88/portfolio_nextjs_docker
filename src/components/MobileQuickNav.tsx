'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useReducedMotion } from 'framer-motion';
import { CONTACT_INFO } from '@/constants';

// Reuse the phone number defined in constants instead of hardcoding it.
const phoneHref =
  CONTACT_INFO.find((c) => c.href?.startsWith('tel:'))?.href ?? 'tel:';

// Floating quick actions for mobile: call, contact, and back-to-top. The full
// menu lives in the hamburger; this is for one-tap reach on small screens.
export default function MobileQuickNav() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    });

  const itemClass =
    'flex h-11 w-11 items-center justify-center rounded-full text-foreground/80 transition-colors hover:text-custom-red focus-visible:text-custom-red focus-visible:outline-none';

  return (
    <nav
      aria-label="Quick actions"
      className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border bg-background p-1 shadow-lg md:hidden"
    >
      <a href={phoneHref} aria-label="Call Ivan" className={itemClass}>
        <Icon icon="lucide:phone" width="20" height="20" />
      </a>
      <span className="h-5 w-px bg-border" aria-hidden="true" />
      <Link href="/contact" aria-label="Contact" className={itemClass}>
        <Icon icon="lucide:mail" width="20" height="20" />
      </Link>
      <span className="h-5 w-px bg-border" aria-hidden="true" />
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={itemClass}
      >
        <Icon icon="lucide:arrow-up" width="20" height="20" />
      </button>
    </nav>
  );
}
