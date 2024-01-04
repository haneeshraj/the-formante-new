"use client";

import { Ref, forwardRef, useState } from "react";
import { AnimatePresence, animate, motion } from "framer-motion";

import styles from "./styles.module.scss";
import { cross, lineAnim, scale } from "./anim";
import clsx from "clsx";

const Hamburger = forwardRef(function Hamburger(
  props: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    className?: string;
    style?: React.CSSProperties;
  },
  ref: Ref<HTMLDivElement> | null
) {
  return (
    <div
      className={clsx(styles["hamburger"], props.className)}
      onClick={() => props.setIsOpen(!props.isOpen)}
      ref={ref}
      style={props.style}
    >
      <AnimatePresence>
        {!props.isOpen && (
          <div className={styles["bars"]}>
            <motion.div
              className={styles["bar"]}
              variants={lineAnim}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: [0.5, 0, 0, 1],
              }}
            />
            <motion.div
              className={styles["bar"]}
              variants={lineAnim}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: [0.5, 0, 0, 1],
                delay: 0.2,
              }}
            />
            <motion.div
              className={styles["bar"]}
              variants={lineAnim}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: [0.5, 0, 0, 1],
                delay: 0.4,
              }}
            />
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {props.isOpen && (
          <div className={styles["cross"]}>
            <motion.div
              className={styles["cross-bar"]}
              variants={cross}
              custom={2}
              initial="initial"
              animate="animate"
              exit="exit"
            />
            <motion.div
              className={styles["cross-bar"]}
              variants={cross}
              custom={1}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default Hamburger;
