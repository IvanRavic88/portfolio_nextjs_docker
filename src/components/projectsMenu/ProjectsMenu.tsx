'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { projects } from '@/projectMenuData';
import Projects from './Projects';

const Modal = dynamic(() => import('@/components/projectsMenu/Modal'), {
  ssr: false,
});

function ProjectsMenu() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <section className="h-screen w-full justify-center p-0 sm:container sm:items-center 2xl:max-w-[90rem]">
      <div>
        {projects.map((project, index) => {
          return (
            <a
              key={index}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full flex-col justify-between"
            >
              <Projects
                description={project.description}
                index={index}
                title={project.title}
                setModal={setModal}
              />
            </a>
          );
        })}
      </div>
      <div>
        <Modal modal={modal} projects={projects} />
      </div>
    </section>
  );
}

export default ProjectsMenu;
