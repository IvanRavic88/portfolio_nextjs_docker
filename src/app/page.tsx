import { Button } from "@/components/ui/button";
import { NavMenu } from "./components/Navbar";
export default function Home() {
  return (
    <>
      <main>
        <section
          style={{ backgroundImage: `url('/hero-img 1.png')` }}
          className="bg-cover bg-center bg-no-repeat h-screen relative "
        >
          <NavMenu />
          <div className="flex flex-col items-start justify-center h-screen p-10 md:p-20 space-y-6">
            <h1 className="text-6xl font-bold text-left text-custom-red">
              Software Developer
            </h1>
            <p className="text-4xl text-left text-custom-yellow">
              Hello, I&apos;m Ivan. 👋
            </p>
            <p className="text-2xl text-left text-white">
              I&apos;m a dedicated software developer with AWS Developer
              Associate certification.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
