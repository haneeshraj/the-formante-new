"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

import styles from "./styles.module.scss";
import { letterAnim } from "./anim";

const Title = ({ text, className }: { text: string; className?: string }) => {
  const letters = text.split("");

  return (
    <h1 className={clsx(styles["title"], className)}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterAnim}
          custom={index}
          initial="initial"
          animate="animate"
          className={styles.letter}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h1>
  );
};

export default Title;
