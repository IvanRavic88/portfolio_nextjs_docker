'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Rounded from '@/components/common/Button/index';

interface ProjectsTemplateProps {
  id: number;
  title: string;
  services: string;
  year: number;
  location: string;
}

export default function ProjectsTemplate({
  title,
  services,
  year,
  location,
}: ProjectsTemplateProps) {
  const { theme } = useTheme();

  const imageSrc =
    theme === 'dark'
      ? '/images/portfolio_v02_light.png'
      : '/images/portfolio_v02_dark.png';

  return (
    <div className="p-4 sm:p-0">
      <section className="mt-24">
        <div className="sm:container">
          <div className="flex flex-row flex-wrap justify-between gap-10">
            <h1 className="text-9xl font-bold">{title}</h1>
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

      <section className="py-12">
        <div className="sm:container">
          <div className="mb-8 flex flex-col flex-wrap items-center pb-10 text-center">
            <h2 className="mb-6 text-4xl font-semibold text-gray-800 dark:text-gray-200">
              Portfolio v02
            </h2>
            <p className="mb-6 max-w-6xl text-3xl leading-relaxed text-gray-700 dark:text-gray-300">
              This portfolio is a testament to my expertise in modern web
              development. It features a robust tech stack that includes Docker
              for containerization, Next.js for efficient server-side rendering,
              Tailwind CSS for adaptive and responsive designs, and TypeScript
              for enhanced type safety. Hosted on AWS for scalability, it also
              showcases dynamic animations powered by Framer Motion. The
              development pipeline is streamlined with Git workflows for version
              control, Terraform for infrastructure as code, and Ansible for
              automated configuration management, ensuring a smooth and
              efficient deployment process.
            </p>
            <a
              href="https://github.com/IvanRavic88/portfolio_nextjs_docker"
              className="inline-block"
            >
              <Rounded>
                <p className="z-10 m-0 text-base">Github Code</p>
              </Rounded>
            </a>
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
            layout="responsive"
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
}
