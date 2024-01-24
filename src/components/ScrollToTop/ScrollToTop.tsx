"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
      scrollTo: {
        y: 0,
        autoKill: false,
      },
      duration: 1.5,
      ease: "cubic-bezier(0.24, 0.28, 0, 0.94)",
    });
  });

  return <>{children}</>;
};

export default ScrollToTop;
