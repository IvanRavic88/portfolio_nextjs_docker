import type { Metadata } from 'next';
import ContactAnimations from './ContactAnimations';
import { CONTACT_INFO } from '@/constants';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ivan Ravić to start a project together - Next.js, TypeScript, AWS Cloud, and DevOps.',
  openGraph: {
    title: 'Contact | Ivan Ravić',
    description: 'Get in touch to start a project together.',
    url: 'https://ivanravic.com/contact',
    siteName: 'Ivan Ravić',
    images: [{ url: '/images/Ivan.webp', width: 800, height: 800 }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <section className="flex min-h-screen flex-col bg-cover bg-right bg-no-repeat p-6 md:bg-center md:p-6 lg:p-12 xl:p-28">
      <div className="max-w-[90rem] py-24 sm:py-32 md:py-40">
        <div className="flex flex-wrap">
          <div className="relative order-2 block w-full">
            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl">
              <span className="block">Let&rsquo;s start a</span>
              <span>project together</span>
            </h1>
          </div>
        </div>
      </div>

      <ContactAnimations>
        <div className="w-full p-4 text-base sm:p-6 md:p-8 lg:p-10">
          <h2 className="my-6 text-2xl font-bold md:my-8 md:text-3xl lg:my-10 lg:text-4xl">
            Let&apos;s talk
          </h2>

          <ul className="flex w-full flex-col gap-1 sm:gap-2">
            {CONTACT_INFO.map((info) => {
              const external = info.href?.startsWith('http') ?? false;
              return (
                <li key={info.id}>
                  <a
                    href={info.href || ''}
                    {...(external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="group inline-flex items-center gap-4 py-1 focus-visible:outline-none"
                  >
                    {info.icon && (
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-foreground/55 transition-all duration-300 ease-out [&_svg]:h-7 [&_svg]:w-7 group-hover:-translate-y-0.5 group-hover:scale-125 group-hover:text-custom-red group-focus-visible:scale-125 group-focus-visible:text-custom-red"
                      >
                        {info.icon}
                      </span>
                    )}
                    <span className="relative inline-block text-foreground/90 transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-custom-red after:transition-transform after:duration-300 after:ease-out group-hover:text-custom-red group-hover:after:origin-left group-hover:after:scale-x-100 group-focus-visible:text-custom-red group-focus-visible:after:origin-left group-focus-visible:after:scale-x-100">
                      {info.text}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </ContactAnimations>
    </section>
  );
}
