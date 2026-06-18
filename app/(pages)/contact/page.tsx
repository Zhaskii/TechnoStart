import type { Metadata } from "next";
import Contact from "@/app/components/Contact";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | Techno Star",
  description:
    "Get in touch with Techno Star for professional web development and digital marketing services. Contact our team to discuss your project, request a quote, or explore digital solutions for your business.",

  keywords: [
    "Contact Techno Star",
    "Techno Star Nepal",
    "Web Development Company Contact",
    "Digital Marketing Agency Contact",
    "Website Development Services",
    "SEO Services Nepal",
    "Digital Marketing Nepal",
    "Web Design Company",
    "Business Website Development",
    "Marketing Consultation",
    "IT Company Nepal",
    "Software Development Company",
    "Get a Quote",
    "Contact Web Developers",
    "Digital Solutions Nepal",
  ],

  authors: [{ name: "Techno Star" }],
  creator: "Techno Star",
  publisher: "Techno Star",

  openGraph: {
    title: "Contact Us | Techno Star",
    description:
      "Reach out to Techno Star for expert web development and digital marketing solutions. Let's build your digital success together.",
    url: "https://technostar.com.np/contact",
    siteName: "Techno Star",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Techno Star",
    description:
      "Connect with Techno Star for web development, SEO, digital marketing, and business growth solutions.",
  },

  alternates: {
    canonical: "https://technostar.com.np/contact",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
