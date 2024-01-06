"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./styles.module.scss";
import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";
import { Single } from "@/types/types";

const Release = ({ data }: { data: Single }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      className={styles["release"]}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className={styles["release__image-container"]}>
        <Image
          src={data.coverart}
          fill
          alt={data.title}
          priority
          className={styles["release__image"]}
        />
      </div>
      <div className={styles["release__text-container"]}>
        <p className={styles["release__title"]}>{data.title}</p>
        <p className={styles["release__artists"]}>
          {data.artists.map((artist, index) => (
            <React.Fragment key={index}>
              <Link
                href={artist.href}
                className={styles["release__artist"]}
                key={index}
              >
                {artist.name}
              </Link>{" "}
              <span>
                {index !== data.artists.length - 1 && ",\u00A0\u00A0"}
              </span>
            </React.Fragment>
          ))}
        </p>
      </div>
      <div className={styles["release__socials"]}>
        <AnimatePresence>
          {onHover && (
            <>
              {data.spotify && (
                <motion.div
                  className={styles["release__social-container"]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.19, 0.69, 0.29, 1.03],
                    },
                  }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <Link href={data.spotify}>
                    <Logo.spotify className={styles["release__social"]} />
                  </Link>
                </motion.div>
              )}
              {data.youtube && (
                <motion.div
                  className={styles["release__social-container"]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.1,
                      duration: 0.8,
                      ease: [0.19, 0.69, 0.29, 1.03],
                    },
                  }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <Link href={data.youtube}>
                    <Logo.youtube className={styles["release__social"]} />
                  </Link>
                </motion.div>
              )}
              {data.apple && (
                <motion.div
                  className={styles["release__social-container"]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.8,
                      ease: [0.19, 0.69, 0.29, 1.03],
                    },
                  }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <Link href={data.apple}>
                    <Logo.apple className={styles["release__social"]} />
                  </Link>
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Release;
