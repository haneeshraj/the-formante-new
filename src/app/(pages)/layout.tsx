"use client";

import Hamburger from "@/components/Hamburger/Hamburger";
import styles from "./layout.module.scss";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Menu from "@/components/Menu/Menu";
import { AnimatePresence } from "framer-motion";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hamburgerStyling, setHamburgerStyling] = useState<React.CSSProperties>(
    {}
  );
  const menuRef = useRef<null | HTMLDivElement>(null);
  const hamburgerRef = useRef<null | HTMLDivElement>(null);

  useOnClickOutside(menuRef, () => setIsOpen(false), [hamburgerRef]);

  useEffect(() => {
    setHamburgerStyling({
      display: "block",
      position: "fixed",
      top: "2rem",
      right: "4rem",
      zIndex: "1000",
    });
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  return (
    <MaxWidthWrapper>
      <Hamburger
        ref={hamburgerRef}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        className={styles["hamburger"]}
        style={hamburgerStyling}
      />
      <AnimatePresence>
        {isOpen && <Menu setIsOpen={setIsOpen} ref={menuRef} />}
      </AnimatePresence>
      <div className={styles["container"]}>
        <Link href={"/"}>
          <Logo.branding />
        </Link>
        {children}
      </div>
    </MaxWidthWrapper>
  );
};

export default PageLayout;
