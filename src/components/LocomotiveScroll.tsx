'use client';
import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LocomotiveScroll from 'locomotive-scroll';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;
    let locomotiveScroll: LocomotiveScroll | null = null;

    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const instance = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]') as HTMLElement,
        smooth: true,
      });

      // If the effect was already cleaned up before the import resolved,
      // destroy the late-created instance immediately.
      if (!isMounted) {
        instance.destroy();
        return;
      }

      locomotiveScroll = instance;
    })();

    return () => {
      isMounted = false;
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, [pathname]);

  return <div data-scroll-container>{children}</div>;
}
