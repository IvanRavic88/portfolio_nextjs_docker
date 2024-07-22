import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Providers } from '@/app/providers';
import HeaderMobile from '@/components/header/header-mobile';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const montserrat_display = Montserrat({
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
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`md:text-lg lg:text-2xl ${montserrat_display.className}`}
      >
        <Providers>
          <Header />
          <HeaderMobile />

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
