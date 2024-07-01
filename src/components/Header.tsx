"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { NavMenu } from "./navigation-menu-shadcn";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();
  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all  bg-black`,
        {
          " bg-black/75 backdrop-blur-lg text-white": scrolled,
          " bg-black text-white": selectedLayout,
        }
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            className="flex flex-row space-x-3 items-center justify-center "
            href="/"
          >
            <span className="font-bold text-xl flex text-custom-yellow">
              Ivan Ravić
            </span>
          </Link>
        </div>
        <div className="hidden md:block">
          <NavMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
