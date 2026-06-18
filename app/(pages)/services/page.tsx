import type { Metadata } from "next";
import ServiceDetails from "@/app/components/ServiceDetails";
import React from "react";

export const metadata: Metadata = {
  title: "Our Services | Web Development & Digital Marketing | Techno Star",
  description:
    "Explore Techno Star's professional services including custom web development, responsive website design, SEO, social media marketing, content marketing, and digital growth solutions for businesses.",

  keywords: [
    "Techno Star Services",
    "Web Development Services",
    "Website Development Nepal",
    "Custom Website Development",
    "Responsive Web Design",
    "Ecommerce Website Development",
    "Business Website Development",
    "Digital Marketing Services",
    "SEO Services Nepal",
    "Search Engine Optimization",
    "Social Media Marketing",
    "Content Marketing",
    "Online Marketing",
    "Lead Generation",
    "Brand Growth",
    "IT Services Nepal",
    "Technology Solutions",
    "Digital Transformation",
  ],

  authors: [{ name: "Techno Star" }],
  creator: "Techno Star",
  publisher: "Techno Star",

  openGraph: {
    title: "Our Services | Techno Star",
    description:
      "Discover our web development and digital marketing services designed to help businesses establish a strong online presence and achieve sustainable growth.",
    url: "https://technostar.com.np/services",
    siteName: "Techno Star",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Services | Techno Star",
    description:
      "Professional web development and digital marketing services tailored to grow your business online.",
  },

  alternates: {
    canonical: "https://technostar.com.np/services",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const ServicesPage = () => {
  return <ServiceDetails />;
};

export default ServicesPage;
