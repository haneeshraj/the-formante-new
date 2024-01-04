"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import styles from "./styles.module.scss";
import { INFO } from "@/config";
import Logo from "@/components/Logo/Logo";
import clsx from "clsx";
import Link from "next/link";
import Reveal from "@/components/Reveal/Reveal";

const Footer = () => {
  const firstText = useRef<null | HTMLParagraphElement>(null);
  const secondText = useRef<null | HTMLParagraphElement>(null);
  const slider = useRef<null | HTMLDivElement>(null);

  let xPercent = 0;
  let direction = -1;

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }

    gsap.set(firstText.current, {
      xPercent: xPercent,
    });

    gsap.set(secondText.current, {
      xPercent: xPercent,
    });

    xPercent += direction * 0.1;

    requestAnimationFrame(animation);
  };

  useEffect(() => {
    requestAnimationFrame(animation);
  });

  return (
    <Reveal>
      <div className={styles.footer}>
        <div className={styles["slider-container"]}>
          <div ref={slider} className={styles["slider"]}>
            <p className={styles["slide-text"]} ref={firstText}>
              <span className={styles["text"]}>The Formante -&nbsp;</span>
            </p>
            <p className={styles["slide-text"]} ref={secondText}>
              <span className={styles["text"]}>The Formante -&nbsp;</span>
            </p>
          </div>
        </div>

        <div className={styles["content"]}>
          <div className={styles["left"]}>
            <Reveal>
              <p className={styles["copyright"]}>
                The Formante &copy; {new Date().getFullYear()}
              </p>
            </Reveal>
            <Reveal>
              <p className={styles["copyright"]}>
                Designed by {INFO.designedBy}
              </p>
            </Reveal>
          </div>
          <div className={styles["right"]}>
            <div className={styles["contact-info"]}>
              <Reveal>
                <div className={styles["contact-group"]}>
                  <p className={styles["title"]}>Email</p>
                  <p className={styles["label"]}>{INFO.email}</p>
                </div>
              </Reveal>
              <Reveal>
                <div className={styles["contact-group"]}>
                  <p className={styles["title"]}>Phone Number</p>
                  <p className={styles["label"]}>{INFO.phoneNumber}</p>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <div className={styles["icons"]}>
                <Link href={INFO.socials.instagram} target="_blank">
                  <Logo.instagram className={styles["icon"]} />
                </Link>
                <Link href={INFO.socials.twitter} target="_blank">
                  <Logo.twitter className={styles["icon"]} />
                </Link>
                <Link href={INFO.socials.youtube} target="_blank">
                  <Logo.youtube className={styles["icon"]} />
                </Link>
                <Link href={INFO.socials.spotify} target="_blank">
                  <Logo.spotify className={styles["icon"]} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Footer;
