'use client';
import Link from 'next/link';

import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { NavMenu } from './navigation-menu-shadcn';
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';
import IvanRavic from '@/public/Ivan.png';
import FramerMagnetic from './FramerMagnetic';

const Header = () => {
  const scrolled = useScroll(5);

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full bg-inherit p-2 transition-all`,

        scrolled ? 'shadow-md' : '',
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            className="flex flex-row items-center justify-center space-x-3"
            href="/"
          >
            <FramerMagnetic>
              <Image
                src={IvanRavic}
                alt="Ivan Ravić profile picture"
                width={40}
                height={40}
                className="rounded-full"
              />
            </FramerMagnetic>
            <span className={`flex} text-xl font-bold`}>Ivan Ravić</span>
          </Link>
        </div>

        <div className="hidden md:block">
          <NavMenu />
        </div>

        <div className="hidden md:block">
          <FramerMagnetic>
            <ThemeSwitch />
          </FramerMagnetic>
        </div>
      </div>
    </div>
  );
};

export default Header;
