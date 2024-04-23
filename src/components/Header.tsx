import { NavMenu } from "./NavigationMenu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black">
      <div className="flex items-center justify-between p-4 md:p-4">
        <NavMenu />
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
