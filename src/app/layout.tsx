import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const playfair_display = Playfair_Display({
  subsets: ["latin-ext"],
  weight: ["400", "700"],
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
    <html lang="en">
      <body className={` w-full min-h-screen  ${playfair_display.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
