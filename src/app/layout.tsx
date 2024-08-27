import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '@/app/providers';
import HeaderMobile from '@/components/header/header-mobile';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import LocomotiveScroll from '@/components/LocomotiveScroll';

const montserrat_display = Open_Sans({
  subsets: ['latin-ext'],
  weight: ['500', '700'],
});

export const metadata: Metadata = {
  title: 'Ivan Ravić @Portfolio_Website',
  description:
    'Ivan Ravić portfolio website. Website was designed and made by software developer and AWS Developer Associate Ivan Ravić.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="relative m-0 box-border h-full max-w-full p-0"
      suppressHydrationWarning
    >
      <body
        className={`md:text-lg lg:text-2xl ${montserrat_display.className}`}
      >
        <Providers>
          <Header />
          <HeaderMobile />
          <LocomotiveScroll>{children}</LocomotiveScroll>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
