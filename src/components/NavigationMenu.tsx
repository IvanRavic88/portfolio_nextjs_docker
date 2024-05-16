"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className=" bg-black grid gap-1 p-2 md:w-80 lg:min-w-96 lg:grid-cols-[2fr] text-custom-red">
              <ListItem href="/docs/installation" title="My store">
                My Store is e-commerce website for selling men&apos;s clothes,
                It was created as an online store for selling clothes, but it is
                very easily adaptable for other products as well.
              </ListItem>
              <ListItem href="/docs/installation" title="Chat-App">
                Chat-App is a small project application built with ReactJS,
                NextJS, Mui, and Tailwind. It is customizable in terms of
                purpose and appearance.
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="GaginiSlatkisi.com"
              >
                GaginiSlatkiši is an application made for a client who makes
                homemade sweets. It includes a database and administrator login
                functionality.
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Follower cheacker"
              >
                Follower checker is an application that enables automatic
                collection and comparison of followers and users being followed.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-40 gap-3 p-4 md:w-30 md:grid-cols-1 lg:w-80">
              <ListItem title="Contact me" href="/contact">
                Questions? Reach out anytime. I&apos;m here to help!
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={`bg-inherit text-white hover:bg-inherit hover:text-custom-red ${navigationMenuTriggerStyle()}`}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/Ivan_Ravić_Resume_19_4_2024.pdf"
            legacyBehavior
            passHref
            target="_blank"
          >
            <NavigationMenuLink
              className={`bg-inherit text-white hover:bg-inherit hover:text-custom-red ${navigationMenuTriggerStyle()}`}
            >
              Resume
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
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
ListItem.displayName = "ListItem";
