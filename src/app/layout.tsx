import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import HeaderMobile from "../components/header-mobile";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";

const montserrat_display = Montserrat({
  subsets: ["latin-ext"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Ivan Ravić @Portfolio_Website",
  description:
    "Ivan Ravić portfolio website. Website was designed and made by software developer and AWS Developer Associate Ivan Ravić.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`flex flex-col min-h-screen ${montserrat_display.className}`}
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
