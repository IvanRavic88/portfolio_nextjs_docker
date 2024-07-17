'use client';
import { useEffect } from 'react';
import LinkAnimated from '@/components/LinkAnimated';
import ProjectsMenu from '@/components/ProjectsMenu';
import { Button } from '@/components/ui/button';

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <main className="mx-auto px-6 sm:px-10">
        <section className="relative flex flex-col bg-center">
          <div className="wrapper mx-auto my-0 max-w-full pb-10 pt-32 md:px-5 md:pt-40 xl:pt-60 2xl:max-w-[90rem]">
            <div className="hero_top mb-14 flex flex-col items-start gap-14 xl:mb-20 xl:grid xl:grid-cols-12 xl:items-end xl:gap-20">
              <div className="hero-title col-span-8 text-left">
                <h1 className="-ml-[0.375rem] text-4xl sm:text-5xl md:text-8xl 2xl:text-9xl">
                  <span className="hidden">Ivan Ravic</span>
                  <span>Software Developer with AWS Certification</span>
                </h1>
              </div>
              <div className="hero-sub mt-[-2.7rem] max-w-60 xl:col-span-4 xl:mx-auto xl:max-w-40">
                <p className="text-lg opacity-50 xl:opacity-100">
                  Full-Stack, DevOps, AWS Cloud Expertise
                </p>
              </div>
            </div>
            <div className="hero_bottom flex flex-col items-start gap-14 lg:grid lg:grid-cols-12 lg:gap-20">
              <div className="hero_text col-span-8 text-left">
                <p className="mb-4 md:text-xl xl:mb-8 xl:text-3xl">
                  Specializing in modern web development frameworks like Next.js
                  and Tailwind CSS, alongside AWS cloud solutions, I assist
                  startups and businesses in creating robust, scalable
                  applications that achieve optimal performance and sustainable
                  growth.
                </p>
                <a href="mailto:ravic.ivan88@gmail.com?subject=Email from Website&body=Hi, I'm interested in...">
                  <Button className="flex cursor-pointer items-center justify-center rounded-full bg-[#1C1D20] p-6 text-white">
                    <p className="font-ligh relative z-10 m-0 text-base">
                      Drop me a line
                    </p>
                  </Button>
                </a>
              </div>
              <ul className="hero-social z-99 col-span-4 mx-auto hidden list-none sm:text-sm lg:block xl:text-xl">
                <li className="mb-4 border-b-2 pb-2 text-center opacity-50">
                  <span>Let&apos;s get connected</span>
                </li>
                <LinkAnimated href="https://www.instagram.com/ivan_ravic_88/">
                  Instagram
                </LinkAnimated>
                <LinkAnimated href="https://linkedin.com/in/ivan-ravić-b3aa36143">
                  LinkedIn
                </LinkAnimated>
                <LinkAnimated href="https://github.com/IvanRavic88?tab=repositories">
                  GitHub
                </LinkAnimated>
              </ul>
            </div>
          </div>
        </section>
        <div className="h-[30vh]"></div>
        <ProjectsMenu />
      </main>
    </>
  );
}
