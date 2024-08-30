export default function ProjectsTemplate() {
  return (
    <div>
      <section className="py-12">
        <div className="container">
          <div className="flex flex-row flex-wrap">
            <div>
              <h1 className="custom-font-size">Evolving</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container flex items-center justify-center">
          <div className="flex w-full flex-row flex-wrap gap-24">
            <div className="flex flex-1 flex-col gap-2">
              <h5 className="mb-4 text-base uppercase opacity-50">
                Role / Services
              </h5>
              <div className="h-[1px] w-full bg-current opacity-30"></div>
              <li className="list-none">
                <p>Development & DevOps</p>
              </li>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <h5 className="mb-4 text-base uppercase opacity-50">Year</h5>
              <div className="h-[1px] w-full bg-current opacity-30"></div>
              <li className="list-none">
                <p>2024</p>
              </li>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <h5 className="mb-4 text-base uppercase opacity-50">Location</h5>
              <div className="h-[1px] w-full bg-current opacity-30"></div>
              <li className="list-none">
                <p>Serbia</p>
              </li>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
