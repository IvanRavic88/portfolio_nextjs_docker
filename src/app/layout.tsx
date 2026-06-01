import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import 'lenis/dist/lenis.css';
import { Providers } from '@/app/providers';
import HeaderMobile from '@/components/header/header-mobile';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import SmoothScroll from '@/components/SmoothScroll';

const montserrat_display = Open_Sans({
  subsets: ['latin-ext'],
  weight: ['500', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ivanravic.com'),
  title: {
    default: 'Ivan Ravić — Software Developer & AWS Certified',
    template: '%s | Ivan Ravić',
  },
  description: 'Portfolio of Ivan Ravić — Next.js, TypeScript, AWS Cloud, DevOps.',
  openGraph: {
    title: 'Ivan Ravić — Portfolio',
    description: 'Full-Stack, DevOps, AWS Cloud Expertise',
    url: 'https://ivanravic.com',
    siteName: 'Ivan Ravić',
    images: [{ url: '/images/Ivan.webp', width: 800, height: 800 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="relative m-0 box-border p-0"
      suppressHydrationWarning
    >
      <body
        className={`md:text-lg lg:text-2xl ${montserrat_display.className}`}
      >
        <Providers>
          <Header />
          <HeaderMobile />
          <SmoothScroll>{children}</SmoothScroll>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
