import React, { useState } from 'react';
import Modal from '@/components/projectsMenu/Modal';
import { projects } from '@/projectMenuData';
import Projects from './Projects';

function ProjectsMenu() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <section className="s container h-screen w-full items-center justify-center 2xl:max-w-[90rem]">
      <div>
        {projects.map((project, index) => {
          return (
            <a
              key={index}
              href={project.href}
              target="_blank"
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
      <div className="">
        <Modal modal={modal} projects={projects} />
      </div>
    </section>
  );
}

export default ProjectsMenu;
