"use client";
import Link from "next/link";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { NavMenu } from "./navigation-menu-shadcn";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "next-themes";

const Header = () => {
  const scrolled = useScroll(5);

  // const { theme } = useTheme();

  // const backgroundColor =
  //   theme === "dark" ? "bg-custom-dark" : "bg-custom-light";
  // const textColor = theme === "dark" ? "text-custom-dark" : "text-custom-light";

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all  p-2`,

        scrolled ? "shadow-md" : ""
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            className="flex flex-row space-x-3 items-center justify-center "
            href="/"
          >
            <span className={`font-bold text-xl flex} `}>Ivan Ravić</span>
          </Link>
        </div>
        <div className="hidden md:block">
          <NavMenu />
        </div>
        <div className="hidden md:block">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Header;
