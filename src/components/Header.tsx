"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();
  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all  bg-black`,
        {
          " bg-black/75 backdrop-blur-lg text-white": scrolled,
          "border-b border-gray-200 bg-black text-white": selectedLayout,
        }
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
            href="/"
          >
            <span className="font-bold text-xl flex text-custom-yellow">
              Ivan Ravic
            </span>
          </Link>
          <span className=" hidden md:block font-bold text-2xl text-white">
            Ivan Ravić
          </span>
        </div>
        <div className="text-custom-red  items-center justify-center hidden md:block">
          <span className="font-bold text-2xl">IR</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
