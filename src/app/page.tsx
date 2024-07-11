import SocialLink from '@/components/SocialLink';

function Home() {
  return (
    <>
      <main className="mx-auto px-6 sm:px-10">
        <section className="relative flex flex-col bg-center">
          <div className="wrapper mx-auto my-0 max-w-full pb-10 pt-32 md:px-5 md:pt-40 xl:pt-60 2xl:max-w-[90rem]">
            <div className="hero_top mb-14 flex flex-col items-start gap-14 xl:mb-20 xl:grid xl:grid-cols-12 xl:items-end xl:gap-20">
              <div className="hero-title col-span-8 text-left">
                <h1 className="-ml-[0.375rem] text-4xl sm:text-5xl md:text-8xl 2xl:text-9xl">
                  <span className="hidden">Ivan Ravic</span>
                  <span>Software Developer with AWS Certification</span>
                </h1>
              </div>
              <div className="hero-sub mt-[-2.7rem] max-w-60 xl:col-span-4 xl:mx-auto xl:max-w-40">
                <p className="text-lg opacity-50 xl:opacity-100">
                  Full-Stack, DevOps, AWS Cloud Expertise
                </p>
              </div>
            </div>
            <div className="hero_bottom flex flex-col items-start gap-14 lg:grid lg:grid-cols-12 lg:gap-20">
              <div className="hero_text col-span-8 text-left">
                <p className="mb-4 md:text-xl xl:mb-8 xl:text-3xl">
                  I help startups and businesses build robust and scalable web
                  applications using full-stack development and AWS cloud
                  solutions, ensuring optimal performance and growth.
                </p>
                <a
                  href="mailto:ravic.ivan88@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-custom-dark p-1 text-custom-light sm:justify-start"
                >
                  <span className="md:text-sm">Drop me a line</span>
                  <div className="button_icon relative flex h-10 w-10 items-center justify-center rounded-full md:px-4 md:py-2 md:pl-4">
                    <div className="button_icon_bg scale-25 absolute h-full w-full rounded-full bg-custom-light"></div>
                    <svg
                      className="h-6 w-6 opacity-0 mix-blend-difference"
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
              <ul className="hero-social col-span-4 mx-auto hidden list-none sm:text-sm lg:block xl:text-xl">
                <li className="mb-4 border-b-2 pb-2 text-center opacity-50">
                  <span>Let&apos;s get connected</span>
                </li>
                <SocialLink href="https://www.instagram.com/ivan_ravic_88/">
                  Instagram
                </SocialLink>
                <SocialLink href="https://linkedin.com/in/ivan-ravić-b3aa36143">
                  LinkedIn
                </SocialLink>
                <SocialLink href="https://github.com/IvanRavic88?tab=repositories">
                  GitHub
                </SocialLink>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Home;
