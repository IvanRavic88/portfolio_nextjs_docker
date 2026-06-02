import Link from 'next/link';
import LinkAnimated from '../LinkAnimated';
import CurrentTime from '@/components/footer/CurentTime';
import { CONTACT_INFO } from '@/constants';

// Split contact methods (email/phone) from social profiles so we can show the
// methods as labelled links and the socials as a compact icon row.
const contactMethods = CONTACT_INFO.filter(
  (c) => c.href && /^(mailto:|tel:)/.test(c.href),
);
const socials = CONTACT_INFO.filter(
  (c) => c.href && /instagram|linkedin|github/i.test(c.href),
);

export default function Content() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-custom-dark px-5 py-8 text-custom-light sm:px-12">
      <FooterNav />
      <Section2 />
    </div>
  );
}

const FooterNav = () => {
  return (
    <div className="flex flex-wrap gap-10 md:gap-24">
      <div>
        <LinkAnimated href="/contact">
          <h2 className="pb-3 text-2xl font-bold">Let&apos;s talk</h2>
        </LinkAnimated>
        <ul className="flex w-full flex-col gap-2 lg:text-xl">
          {contactMethods.map((info) => (
            <li
              key={info.id}
              className="flex flex-row items-center gap-2 md:gap-3"
            >
              {info.icon && (
                <span className="text-xl text-custom-light/80">
                  {info.icon}
                </span>
              )}
              <LinkAnimated
                href={info.href || ''}
                external={info.href?.startsWith('http') ?? false}
              >
                <span>{info.text}</span>
              </LinkAnimated>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col">
        <h2 className="pb-3 text-2xl font-bold">Explore</h2>
        <ul className="flex flex-col gap-2 lg:text-xl">
          <li>
            <LinkAnimated href="/about">About</LinkAnimated>
          </li>
          <li>
            <LinkAnimated href="/projects">Projects</LinkAnimated>
          </li>
          <li>
            <LinkAnimated href="/contact">Contact</LinkAnimated>
          </li>
          <li>
            <LinkAnimated href="/Ivan_Ravić_Resume_30_9_2024.pdf" external>
              Resume
            </LinkAnimated>
          </li>
          <li>
            <LinkAnimated
              href="/AWS Certified Developer - Associate certificate.pdf"
              external
            >
              AWS Certificate
            </LinkAnimated>
          </li>
        </ul>

        <div className="mt-6 flex items-center gap-5">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.description}
              className="text-2xl text-custom-light/80 transition-colors hover:text-custom-red"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Section2 = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-10">
      <Link
        href="/"
        aria-label="Back to home"
        className="block font-display text-[13vw] font-semibold leading-[0.85] tracking-tight transition-colors hover:text-custom-red sm:text-[10vw]"
      >
        Ivan Ravić
      </Link>
      <div className="mt-6 flex flex-col gap-3 border-t border-white/15 pt-5 text-sm text-custom-light/70 sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} Ivan Ravić · Belgrade, Serbia · Available for work</span>
        <span className="flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full bg-custom-red"
            aria-hidden="true"
          />
          Belgrade&nbsp;
          <CurrentTime />
        </span>
      </div>
    </div>
  );
};
