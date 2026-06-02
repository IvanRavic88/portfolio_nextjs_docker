'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { projects } from '@/projectMenuData';

// Thumbnails for the Projects dropdown, looked up by route so the paths stay
// in one place (projectMenuData).
const projectThumb = (href?: string) =>
  projects.find((p) => p.href === href)?.src ?? '';

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
            <ul className="grid gap-1 p-2 md:w-96 lg:min-w-[28rem] lg:grid-cols-[2fr]">
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
  const thumb = projectThumb(props.href);
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'group/item flex select-none items-center gap-3 rounded-md p-2 no-underline outline-none transition-colors hover:bg-accent focus:bg-accent',
            className,
          )}
          {...props}
        >
          {thumb && (
            <span className="relative h-12 w-16 shrink-0 overflow-hidden rounded border">
              <Image
                src={thumb}
                alt=""
                fill
                sizes="64px"
                className="object-cover grayscale transition duration-300 group-hover/item:grayscale-0"
              />
            </span>
          )}
          <span className="min-w-0 flex-1">
            <span className="flex items-center gap-3 text-sm font-medium leading-none">
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
            </span>
            <span className="mt-1.5 line-clamp-2 block text-sm leading-snug text-muted-foreground">
              {children}
            </span>
          </span>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
