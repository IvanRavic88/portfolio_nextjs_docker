import React, { useState } from 'react';
import Scene from '@/components/Scene';
import Projects from '@/components/Projects';
function ProjectsMenu() {
  const [activeMenu, setActiveMenu] = useState(null);
  return (
    <section className="relative mx-auto h-screen w-full 2xl:max-w-[90rem]">
      <div className="absolute left-0 top-0 h-screen w-full">
        <Projects setActiveMenu={setActiveMenu} />
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-screen w-full">
        <Scene activeMenu={activeMenu} />
      </div>
    </section>
  );
}

export default ProjectsMenu;
