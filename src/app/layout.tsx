import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import './globals.css';
import 'lenis/dist/lenis.css';
import { Providers } from '@/app/providers';
import HeaderMobile from '@/components/header/header-mobile';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import SmoothScroll from '@/components/SmoothScroll';

// Display font for headings (characterful grotesque); body font for prose (neutral, legible).
// latin-ext is required for Serbian diacritics (š, ć, č, ž) used in names/copy.
const bricolage = Bricolage_Grotesque({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ivanravic.com'),
  title: {
    default: 'Ivan Ravić - Software Developer & AWS Certified',
    template: '%s | Ivan Ravić',
  },
  description: 'Portfolio of Ivan Ravić - Next.js, TypeScript, AWS Cloud, DevOps.',
  openGraph: {
    title: 'Ivan Ravić - Portfolio',
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
      className={`relative m-0 box-border p-0 ${bricolage.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`font-sans md:text-lg lg:text-2xl`}
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
