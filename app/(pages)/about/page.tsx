import type { Metadata } from "next";
import About from "@/app/components/About";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | Techno Star",
  description:
    "Techno Star is a leading IT startup specializing in web development and digital marketing services. We help businesses build powerful digital experiences, improve online visibility, and accelerate growth through innovative technology solutions.",

  keywords: [
    "Techno Star",
    "IT Company Nepal",
    "Web Development",
    "Website Development",
    "Custom Web Applications",
    "Digital Marketing",
    "SEO Services",
    "Social Media Marketing",
    "Search Engine Optimization",
    "Business Growth",
    "Software Development",
    "Web Design",
    "Technology Solutions",
    "Startup IT Company",
    "Digital Transformation",
  ],

  authors: [{ name: "Techno Star" }],
  creator: "Techno Star",
  publisher: "Techno Star",

  openGraph: {
    title: "About Us | Techno Star",
    description:
      "Discover Techno Star, an innovative IT company providing professional web development and digital marketing services to help businesses grow online.",
    url: "https://technostar.com.np/about",
    siteName: "Techno Star",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | Techno Star",
    description:
      "Techno Star delivers web development and digital marketing solutions that help businesses succeed in the digital world.",
  },

  alternates: {
    canonical: "https://technostar.com.np/about",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
