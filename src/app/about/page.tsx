'use client';
import MyServices from '@/components/services/MyServices';
import IvanRavic from '@/public/images/Ivan.png';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function AboutPage() {
  const container = useRef(null);
  const element = useRef(null);
  const { scrollYProgress: scrollYProgressElement } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25'],
  });

  const { scrollYProgress: scrollYProgressContainer } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const sm = useTransform(scrollYProgressContainer, [0, 1], [0, -150]);
  const md = useTransform(scrollYProgressContainer, [0, 1], [0, -250]);
  const lg = useTransform(scrollYProgressContainer, [0, 1], [0, -350]);

  return (
    <div
      ref={container}
      className="flex min-h-screen flex-col px-3 sm:container sm:px-6"
    >
      <div>
        <div className="max-w-[90rem] py-24 sm:py-40 md:py-52">
          <div className="flex flex-wrap">
            <div className="relative order-2 block w-full">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
                <motion.span className="block" style={{ top: lg }}>
                  Empowering Your{' '}
                </motion.span>
                <motion.span style={{ top: sm }}>Digital Journey</motion.span>
              </h1>
            </div>
          </div>
        </div>
        <motion.div
          style={{ y: lg }}
          className="flex flex-col items-center border-b-2 border-t-2 p-0 py-20 md:container lg:flex-row"
        >
          <Image
            src={IvanRavic}
            alt="Ivan Ravić profile picture"
            width={300}
            height={300}
            className="mb-5 mr-3 w-full max-w-xs rounded-sm sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
          <motion.div
            ref={element}
            style={{ opacity: scrollYProgressElement }}
            className="flex flex-col gap-10 p-0 text-base md:container sm:text-xl"
          >
            <div className="rounded-lg">
              <h3 className="text-2xl font-bold">Professional Journey</h3>
              <p className="mt-2 opacity-80">
                I&apos;m a dynamic software developer with a background in
                Electrical and Computer Engineering, holding a Master&apos;s
                degree from VISER in Belgrade. My journey began in a mining
                company, where I specialized in automatic control systems and
                software development.
              </p>
            </div>

            <div className="rounded-lg">
              <h3 className="text-2xl font-bold">Career Evolution</h3>
              <p className="mt-2 opacity-80">
                Transitioning from my initial role, I pursued my passion for
                programming and expanded my expertise in Next.js, TypeScript,
                and Tailwind CSS. Driven by a desire to innovate and make
                meaningful contributions to the software development industry, I
                am committed to continuous growth and learning.
              </p>
            </div>
            <div className="rounded-lg">
              <h3 className="text-2xl font-bold">Cloud & DevOps Expertise</h3>
              <p className="mt-2 opacity-80">
                Recently, I earned the AWS Associate Developer certification,
                demonstrating my proficiency in cloud computing and AWS
                services. My enthusiasm for Cloud & DevOps has driven me to
                explore automation with tools such as Ansible, Bash, and
                Terraform. These skills allow me to streamline processes and
                enhance operational efficiency.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <MyServices />
    </div>
  );
}
