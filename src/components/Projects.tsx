import React from 'react';
import { projects } from '@/projectMenuData';

interface ProjectsProps {
  setActiveMenu: (menu: any) => void;
}
export default function Projects({ setActiveMenu }: ProjectsProps) {
  return (
    <div className="relative z-10 h-screen w-full text-white mix-blend-difference">
      <ul
        onMouseLeave={() => {
          setActiveMenu(null);
        }}
        className=""
      >
        {projects.map((project, i) => {
          return (
            <React.Fragment key={project.title}>
              <li
                onMouseOver={() => {
                  setActiveMenu(i);
                }}
                className={
                  i === 0
                    ? `my-5 justify-between border-b-[1px] border-t-[1px] border-gray-500 p-10 text-[5vw]`
                    : `my-5 justify-between border-b-[1px] border-gray-500 p-10 text-[5vw]`
                }
              >
                <a href={project.href}>{project.title}</a>
                <span className="mt-14 block text-xl opacity-50">
                  {project.description}
                </span>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
