"use client";

import Link from "next/link";

import { NavMenu } from "./navigation-menu-shadcn";

export default function Header() {
  return (
    <nav className="bg-black z-10">
      <div className="flex items-center justify-between p-4 md:p-4">
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
    </nav>
  );
}
