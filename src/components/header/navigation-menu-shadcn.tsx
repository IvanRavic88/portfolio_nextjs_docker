'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export const NavMenu: React.FC = () => {
  const pathname = usePathname();
  const isProjects = pathname.startsWith('/projects');
  const isContact = pathname === '/contact';
  const isAbout = pathname === '/about';
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            aria-current={isProjects ? 'page' : undefined}
          >
            <span
              className={cn('text-link-animation', isProjects && 'is-active')}
            >
              Projects
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid gap-1 p-2 md:w-80 lg:min-w-96 lg:grid-cols-[2fr]">
              <ListItem href="/projects/portfolio_v2" title="01 Evolving">
                A collection showcasing my growth, with refined techniques and
                innovative solutions.
              </ListItem>
              <ListItem
                href="/projects/gaginislatkisi"
                title="02 Gagini Slatkiši"
              >
                A client app for homemade sweets, featuring a database and admin
                login.
              </ListItem>
              <ListItem href="/projects/foundations" title="03 Foundations">
                Early projects where I honed my skills and built my software
                development foundation with small twist.
              </ListItem>
              <ListItem href="/projects/e-commerce" title="04 E-Commerce">
                A fully functional e-commerce website, with a cart and payment
                system.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/contact"
              aria-current={isContact ? 'page' : undefined}
              className={cn(
                'text-link-animation hover:text-custom-red',
                navigationMenuTriggerStyle(),
                isContact && 'is-active',
              )}
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/about"
              aria-current={isAbout ? 'page' : undefined}
              className={cn(
                'text-link-animation hover:text-custom-red',
                navigationMenuTriggerStyle(),
                isAbout && 'is-active',
              )}
            >
              About
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/Ivan_Ravić_Resume_30_9_2024.pdf"
              target="_blank"
              className={`bg-inherit text-link-animation hover:bg-inherit hover:text-custom-red ${navigationMenuTriggerStyle()}`}
            >
              Resume
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/AWS Certified Developer - Associate certificate.pdf"
              target="_blank"
              className={`text-link-animation bg-inherit hover:bg-inherit hover:text-custom-red ${navigationMenuTriggerStyle()}`}
            >
              My AWS Certificate
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  // Titles come in as "NN Name"; pull the leading number out for the red accent.
  const [projectNumber, ...rest] = (title ?? '').trim().split(/\s+/);
  const projectName = rest.join(' ');
  const hasNumber = rest.length > 0;
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'group/item block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent focus:bg-accent',
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-3 text-sm font-medium leading-none">
            {hasNumber && (
              <span className="font-display tabular-nums text-custom-red">
                {projectNumber}
              </span>
            )}
            <span className="flex-1">{hasNumber ? projectName : title}</span>
            <span
              aria-hidden="true"
              className="-translate-x-1 text-custom-red opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100"
            >
              &#8594;
            </span>
          </div>
          <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
