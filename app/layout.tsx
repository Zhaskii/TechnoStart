import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export const metadata: Metadata = {
  title: "Techno Star | Web Development & Digital Marketing Company in Nepal",
  description:
    "Techno Star is a Nepal-based IT solutions company specializing in professional web development, SEO optimization, and digital marketing services. We help businesses establish a strong online presence and achieve sustainable growth.",
  keywords: [
    "Techno Star",
    "IT Company Nepal",
    "Web Development Nepal",
    "Website Design Nepal",
    "Digital Marketing Nepal",
    "SEO Services Nepal",
    "Software Company Nepal",
    "Web Development Company Nepal",
    "Digital Agency Nepal",
    "Online Marketing Nepal",
  ],
  authors: [{ name: "Techno Star" }],
  creator: "Techno Star",
  publisher: "Techno Star",
  openGraph: {
    title: "Techno Star | Web Development & Digital Marketing Company in Nepal",
    description:
      "Professional web development, SEO, and digital marketing solutions for businesses in Nepal.",
    siteName: "Techno Star",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techno Star | Web Development & Digital Marketing Company in Nepal",
    description:
      "Professional web development, SEO, and digital marketing solutions for businesses in Nepal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
