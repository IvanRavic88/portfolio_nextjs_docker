import ProjectsMenu from '@/components/projectsMenu/ProjectsMenu';

const projects = () => {
  return (
    <section className="relative flex h-full flex-col p-4">
      <div className="max-w-[90rem] py-10 sm:container sm:px-10 sm:py-40 md:py-52">
        <div className="flex flex-wrap">
          <div className="relative order-2 block w-full">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
              <span className="block"> Crafting Innovative</span>
              <span>Digital Experiences</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="items-left my-10 flex flex-col justify-between gap-4 pt-20 text-base opacity-70 sm:container sm:mx-auto sm:mb-20 sm:flex-row sm:items-center">
        <h3 className="text-left text-2xl sm:text-4xl">Portfolio Highlights</h3>
        <span className="">A selection of favorites</span>
      </div>
      <ProjectsMenu />
    </section>
  );
};

export default projects;
