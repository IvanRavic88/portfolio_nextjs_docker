export default function Home() {
  return (
    <>
      <main className="flex-grow ">
        <section className="bg-cover bg-no-repeat h-screen relative md:bg-center bg-right min-h-screen flex">
          <div className="wrapper pt-60 pb-28 2xl:max-w-7xl m-auto">
            <div className="hero_top grid items-end mb-20 grid-cols-12 gap-20">
              <div className="hero-title col-span-10">
                <h1 className="text-9xl">
                  <span className="hidden">Ivan Ravic</span>
                  <span>Software Developer with AWS Certification</span>
                </h1>
              </div>
              <div className="hero-sub col-span-2 mt-[-2.7rem] max-w-56">
                <p>Full-Stack, DevOps, AWS Cloud Expertise</p>
              </div>
            </div>
            <div className="hero_bottom grid gap-20 grid-cols-12">
              <div className="hero_text  col-span-8">
                <p className="text-4xl mb-4  ">
                  I help startups and businesses build robust and scalable web
                  applications using full-stack development and AWS cloud
                  solutions, ensuring optimal performance and growth.
                </p>
                <a
                  href="mailto:ravic.ivan88@gmail.com"
                  className="max-w-48 inline-flex items-center p-1 bg-custom-dark text-custom-light rounded-full"
                >
                  <span>Drop me a line</span>
                  <div className="button_icon relative flex justify-center items-center w-10 h-10 rounded-full">
                    <div className="button_icon_bg absolute w-full h-full rounded-full scale-25 bg-custom-light"></div>
                    <svg
                      className="w-6 h-6 opacity-0 mix-blend-difference"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m7.012 18.069 9.702-9.702v7.298l1.499.028-.014-8.81-1.132-1.132-8.81-.014.028 1.499h7.298L5.88 16.937l1.131 1.132Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <ul className="hero-social list-none col-span-2 col-start-11">
                <li className="pb-2 border-b-[1px] opacity-50 mb-4">
                  <span>Let&apos;s get connected</span>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.instagram.com/ivan_ravic_88/"
                    target="_blank"
                    className="text-link-animation"
                  >
                    Instagram
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://linkedin.com/in/ivan-ravić-b3aa36143"
                    target="_blank"
                    className="text-link-animation"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/IvanRavic88?tab=repositories"
                    target="_blank"
                    className="text-link-animation"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
