"use client";

import Link from "next/link";
// Example: using FontAwesome for the hamburger icon
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { NavMenu } from "./NavigationMenu";

export default function Header() {
  return (
    <header className="bg-black">
      <div className="flex items-center justify-between p-4 md:p-4">
        {/* Hamburger Menu for Mobile View */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white">
              Menu
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black text-white">
              <DropdownMenuLabel className="text-custom-yellow">
                Menu
              </DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link href="/projects">Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/Ivan_Ravić_Resume_21_5_2024.pdf" target="_blank">
                  Resume
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/AWS Certified Developer - Associate certificate.pdf"
                  target="_blank"
                >
                  My AWS Certificate
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Navigation Menu for Desktop View */}
        <div className="hidden md:block">
          <NavMenu />
        </div>

        {/* Logo */}
        <div className="flex items-center space-x-4">
          <h1 className="text-xl text-white">
            <Link href="/" className="text-custom-yellow">
              Ivan Ravić
            </Link>
          </h1>
        </div>
      </div>
    </header>
  );
}
