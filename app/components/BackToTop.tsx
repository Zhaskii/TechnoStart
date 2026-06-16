"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Optional but recommended: Only show the button after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // If you want it always visible like your original code, remove the `isVisible` check
  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-11 h-11 flex items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg hover:bg-blue-500 hover:-translate-y-0.5 active:scale-95 transition-all z-50 animate-in fade-in duration-200"
      title="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
