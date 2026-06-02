'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { projects } from '@/projectMenuData';
import Projects from './Projects';

const Modal = dynamic(() => import('@/components/projectsMenu/Modal'), {
  ssr: false,
});

function ProjectsMenu() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  // The cursor-follow Modal pulls in gsap + framer-motion purely for a hover
  // effect. Touch devices can't trigger it (they get the inline preview in
  // Projects instead), so only mount it on hover-capable pointers — this keeps
  // gsap out of the mobile bundle entirely.
  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    setCanHover(
      window.matchMedia('(hover: hover) and (pointer: fine)').matches
    );
  }, []);
  return (
    <section className="min-h-screen w-full justify-center p-0 sm:container sm:items-center 2xl:max-w-[90rem]">
      <div>
        {projects.map((project, index) => {
          return (
            <Link
              key={index}
              href={project.href}
              className="flex w-full flex-col justify-between"
            >
              <Projects
                description={project.description}
                index={index}
                title={project.title}
                src={project.src}
                setModal={setModal}
              />
            </Link>
          );
        })}
      </div>
      <div>
        {canHover && <Modal modal={modal} projects={projects} />}
      </div>
    </section>
  );
}

export default ProjectsMenu;
