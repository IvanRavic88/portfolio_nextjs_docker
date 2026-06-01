import type { Metadata } from 'next';
import ContactAnimations from './ContactAnimations';
import { CONTACT_INFO } from '@/constants';
import LinkAnimated from '@/components/LinkAnimated';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ivan Ravić to start a project together — Next.js, TypeScript, AWS Cloud, and DevOps.',
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
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
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

          <ul className="flex w-full flex-col gap-2">
            {CONTACT_INFO.map((info) => (
              <li
                key={info.id}
                className="flex flex-row items-center gap-2 md:gap-3"
              >
                {info.icon && (
                  <div className="h-6 w-6 md:h-8 md:w-8">{info.icon}</div>
                )}
                <LinkAnimated
                  href={info.href || ''}
                  external={info.href?.startsWith('http') ?? false}
                >
                  <p>{info.text}</p>
                </LinkAnimated>
              </li>
            ))}
          </ul>
        </div>
      </ContactAnimations>
    </section>
  );
}
