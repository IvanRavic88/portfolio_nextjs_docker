'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Rounded from '@/components/common/Button/index';
import { useEffect, useState } from 'react';

interface ProjectsTemplateProps {
  id: number;
  title: string;
  services: string;
  year: number;
  location: string;
  descriptionTitle: string;
  projectDescription: string;
  imageSrcLight: string;
  imageSrcDark: string;
}

export default function ProjectsTemplate({
  title,
  services,
  year,
  location,
  descriptionTitle,
  projectDescription,
  imageSrcLight,
  imageSrcDark,
}: ProjectsTemplateProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const imageSrc = theme === 'dark' ? imageSrcLight : imageSrcDark;

  if (!mounted) {
    return <div className="h-[300px] w-full bg-gray-200 dark:bg-gray-800" />;
  }

  return (
    <div className="p-4 sm:p-0">
      <section className="my-24 sm:mb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col flex-wrap items-center justify-between gap-10 sm:flex-row">
            <h1 className="text-center text-6xl font-bold sm:text-left sm:text-8xl md:text-9xl">
              {title}
            </h1>
            <a href="https://ivanravic.com" className="inline-block">
              <Rounded>
                <p className="z-10 m-0 text-base">Live site</p>
              </Rounded>
            </a>
          </div>
        </div>
      </section>

      <section className="pb-12 sm:py-36">
        <div className="flex items-center justify-center sm:container">
          <div className="flex w-full flex-col flex-wrap gap-16 sm:flex-row sm:gap-24">
            <div className="flex flex-1 flex-col gap-2">
              <h5 className="mb-4 text-base uppercase text-gray-600 dark:text-gray-400">
                Role / Services
              </h5>
              <div className="h-[1px] w-full bg-gray-300 dark:bg-gray-600"></div>
              <li className="list-none">
                <p className="text-lg">{services}</p>
              </li>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <h5 className="mb-4 text-base uppercase text-gray-600 dark:text-gray-400">
                Year
              </h5>
              <div className="h-[1px] w-full bg-gray-300 dark:bg-gray-600"></div>
              <li className="list-none">
                <p className="text-lg">{year}</p>
              </li>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <h5 className="mb-4 text-base uppercase text-gray-600 dark:text-gray-400">
                Location
              </h5>
              <div className="h-[1px] w-full bg-gray-300 dark:bg-gray-600"></div>
              <li className="list-none">
                <p className="text-lg">{location}</p>
              </li>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex h-auto w-full justify-center sm:container">
        <div className="relative h-0 w-full pb-[56.25%]">
          <Image
            src={imageSrc}
            alt="Evolve - Portfolio v02"
            width={1920}
            height={1080}
          />
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col flex-wrap items-center pb-10">
            <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800 dark:text-gray-200 sm:text-3xl md:text-4xl">
              {descriptionTitle}
            </h2>
            <p className="mb-6 max-w-6xl text-center text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
              {projectDescription}
            </p>
            <a
              href="https://github.com/IvanRavic88/portfolio_nextjs_docker"
              className="inline-block items-center"
            >
              <Rounded>
                <p className="z-10 m-0 text-base">Github Code</p>
              </Rounded>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto sm:container">
          <div className="flex flex-wrap justify-center gap-14 sm:gap-24">
            <div className="min-w-[250px] max-w-[400px] flex-1">
              <Image
                src="/images/mobile_portfolio_v02_dark.png"
                alt="Dark mobile version of main page"
                width={800}
                height={600}
                className={`rounded-lg shadow-lg ${theme === 'dark' ? 'border border-white' : ''}`}
              />
            </div>
            <div className="min-w-[250px] max-w-[400px] flex-1">
              <Image
                src="/images/mobile_portfolio_v02.png"
                alt="Light mobile version of main page"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="min-w-[250px] max-w-[400px] flex-1">
              <Image
                src="/images/mobile_menu_portfolio_v02.png"
                alt="Light mobile version of main page"
                width={800}
                height={600}
                className={`rounded-lg shadow-xl ${theme === 'dark' ? 'border border-white' : ''}`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
