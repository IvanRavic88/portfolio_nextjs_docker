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
    let locomotiveScroll: LocomotiveScroll | null = null;

    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]') as HTMLElement,
        smooth: true,
      });
    })();

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, [pathname]);

  return <div data-scroll-container>{children}</div>;
}
