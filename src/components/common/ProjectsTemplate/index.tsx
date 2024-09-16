'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Rounded from '@/components/common/Button/index';
import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Intro from '@/components/common/ProjectsTemplate/backgroundImageParallax';

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
  githubLink: string;
  liveWebsite: string;
  mobileImages: { src: string; alt: string }[];

  nextProject: { name: string; href: string };
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
  githubLink,
  liveWebsite,
  mobileImages,
  nextProject: { name, href },
}: ProjectsTemplateProps) {
  const container = useRef(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: mounted ? container : undefined,
    offset: ['start end', 'end start'],
    layoutEffect: false,
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const imageSrc = theme === 'dark' ? imageSrcLight : imageSrcDark;

  if (!mounted) {
    return <div className="h-[300px] w-full bg-gray-200 dark:bg-gray-800" />;
  }

  return (
    <div ref={container} className="p-1 sm:p-0">
      <section className="my-24 sm:mb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col flex-wrap items-center justify-between gap-10 sm:flex-row">
            <h1 className="text-center text-5xl font-bold sm:text-left sm:text-8xl md:text-9xl">
              {title}
            </h1>
            <a href={liveWebsite} className="inline-block" target="_blank">
              <Rounded>
                <p className="z-10 m-0 text-base">Live site</p>
              </Rounded>
            </a>
          </div>
        </div>
      </section>

      <section className="pb-12 sm:py-36">
        <div className="flex items-center justify-center sm:container">
          <div className="flex w-full flex-col flex-wrap gap-16 text-center sm:flex-row sm:gap-24">
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

      <Intro background={imageSrc} />

      <section className="py-10 sm:py-36">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col flex-wrap items-center pb-10">
            <motion.h2
              style={{ y: sm }}
              className="text-center text-2xl font-semibold text-gray-800 dark:text-gray-200 sm:text-3xl md:text-4xl"
            >
              {descriptionTitle}
            </motion.h2>
            <motion.p
              style={{ top: lg }}
              className="mb-6 max-w-6xl text-center text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg md:text-xl lg:text-2xl"
            >
              {projectDescription}
            </motion.p>
            <a
              href={githubLink}
              className="inline-block items-center"
              target="_blank"
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
            {mobileImages.map((image, index) => {
              let yTransform;
              if (index === 0) {
                yTransform = sm;
              }
              if (index === 1) {
                yTransform = lg;
              }
              if (index === 2) {
                yTransform = sm;
              }
              return (
                <motion.div
                  key={index}
                  style={{ y: yTransform }}
                  className="min-w-[250px] max-w-[400px] flex-1"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className={`rounded-lg shadow-lg ${theme === 'dark' ? 'border border-white' : ''}`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="border-t-[1px]"></div>
      <section className="container py-24 sm:py-36">
        <div className="px-4">
          <div className="grid grid-cols-1 items-end gap-16 sm:grid-cols-[5fr_7fr]">
            <span className="text-xl opacity-40 sm:text-2xl">
              Next project <span>&#8594;</span>
            </span>
            <a
              className="text-5xl leading-none tracking-tighter blur-sm filter transition duration-500 hover:filter-none sm:text-6xl"
              href={href}
            >
              {name}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
