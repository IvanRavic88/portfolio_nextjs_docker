'use client';

import ProjectsMenu from '@/components/projectsMenu/ProjectsMenu';
import CTA from '@/components/cta/CTA';
import MyServices from '@/components/services/MyServices';
import Rounded from '@/components/common/Button/index';
import Socials from '@/components/socials/Socials';

export default function Home() {
  return (
    <>
      <main className="mx-auto px-6 sm:px-10">
        <section className="relative flex flex-col bg-center">
          <div className="mx-auto my-0 max-w-full pb-40 pt-32 md:px-5 md:pt-40 xl:pt-60 2xl:max-w-[90rem]">
            <div className="mb-14 flex flex-col items-start gap-14 xl:mb-20 xl:grid xl:grid-cols-12 xl:items-end xl:gap-20">
              <div className="col-span-8 text-left">
                <h1 className="-ml-[0.375rem] text-4xl sm:text-5xl md:text-8xl 2xl:text-9xl">
                  <span className="hidden">Ivan Ravic</span>
                  <span>Software Developer with AWS Certification</span>
                </h1>
              </div>
              <div className="mt-[-2.7rem] max-w-60 xl:col-span-4 xl:mx-auto xl:max-w-40">
                <p className="text-lg opacity-50 xl:opacity-100">
                  Full-Stack, DevOps, AWS Cloud Expertise
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-14 lg:grid lg:grid-cols-12 lg:gap-20">
              <div className="col-span-8 text-left">
                <p className="mb-10 md:text-xl xl:mb-10 xl:text-3xl">
                  Specializing in modern web development frameworks like Next.js
                  and Tailwind CSS, alongside AWS cloud solutions, I assist
                  startups and businesses in creating robust, scalable
                  applications that achieve optimal performance and sustainable
                  growth.
                </p>
                <a href="/contact" className="inline-block">
                  <Rounded>
                    <p className="z-10 m-0 text-base">Drop me a line</p>
                  </Rounded>
                </a>
              </div>
              <Socials />
            </div>
          </div>
        </section>

        <MyServices />

        <div className="items-left mx-auto my-10 flex flex-col justify-between gap-4 pt-20 text-base opacity-70 sm:container sm:mb-20 sm:flex-row sm:items-center">
          <h3 className="text-left text-2xl sm:text-4xl">
            Portfolio Highlights
          </h3>
          <span className="">A selection of favorites</span>
        </div>
        <ProjectsMenu />
        <CTA />
      </main>
    </>
  );
}
