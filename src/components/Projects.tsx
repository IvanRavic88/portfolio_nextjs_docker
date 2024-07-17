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
            <li
              onMouseOver={() => {
                setActiveMenu(i);
              }}
              key={project.title}
              className="mb-5 border-b-[1px] p-10 text-[4vw]"
            >
              <a href={project.href}>{project.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
