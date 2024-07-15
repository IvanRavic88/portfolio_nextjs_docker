import React from 'react';
import { projects } from './data';

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
        className="border-b"
      >
        {projects.map((project, i) => {
          return (
            <li
              onMouseOver={() => {
                setActiveMenu(i);
              }}
              key={project.title}
              className="border-t p-5 text-[4vw]"
            >
              <p>{project.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
