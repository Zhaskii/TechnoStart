import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techno Start | Web Development & Digital Marketing Company in Nepal",
  description:
    "Techno Start is a Nepal-based IT solutions company specializing in professional web development, SEO optimization, and digital marketing services. We help businesses establish a strong online presence and achieve sustainable growth.",
  keywords: [
    "Techno Start",
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
  authors: [{ name: "Techno Start" }],
  creator: "Techno Start",
  publisher: "Techno Start",
  openGraph: {
    title:
      "Techno Start | Web Development & Digital Marketing Company in Nepal",
    description:
      "Professional web development, SEO, and digital marketing solutions for businesses in Nepal.",
    siteName: "Techno Start",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Techno Start | Web Development & Digital Marketing Company in Nepal",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Navbar />
      <body className="min-h-full flex flex-col">{children}</body>
      <BackToTop />
      <Footer />
    </html>
  );
}
