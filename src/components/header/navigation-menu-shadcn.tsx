'use client';

import * as React from 'react';
import Link from 'next/link';

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
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-link-animation">
            <a href="/projects">Projects</a>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid gap-1 p-2 md:w-80 lg:min-w-96 lg:grid-cols-[2fr]">
              <ListItem
                href="/projects/portfoliov02"
                title="01 Evolving"
              >
                A collection showcasing my growth, with refined techniques and
                innovative solutions.
              </ListItem>
              <ListItem
                href="/projects/gaginislatkisi"
                title="02 GaginiSlatkisi.com"
              >
                A client app for homemade sweets, featuring a database and admin
                login.
              </ListItem>
              <ListItem
                href="/projects/portfoliov01"
                title="03 Fundations"
              >
                Early projects where I honed my skills and built my software
                development foundation.
              </ListItem>
              <ListItem href="/projects/e-commerce" title="04 E-Commerce">
                A fully functional e-commerce website, with a cart and payment
                system.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={`text-link-animation`}>
            Contact
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="md:w-30 grid w-40 gap-3 p-4 md:grid-cols-1 lg:w-80">
              <ListItem title="Contact me" href="/contact">
                Questions? Reach out anytime. I&apos;m here to help!
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={`text-link-animation hover:text-custom-red ${navigationMenuTriggerStyle()}`}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/Ivan_Ravić_Resume_21_5_2024.pdf" legacyBehavior passHref>
            <NavigationMenuLink
              className={`bg-inherit} text-link-animation hover:bg-inherit hover:text-custom-red ${navigationMenuTriggerStyle()}`}
              target="_blank"
            >
              Resume
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/AWS Certified Developer - Associate certificate.pdf"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink
              className={`text-link-animation bg-inherit hover:bg-inherit hover:text-custom-red ${navigationMenuTriggerStyle()}`}
              target="_blank"
            >
              My AWS Certificate
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
