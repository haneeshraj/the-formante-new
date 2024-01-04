"use client";

import { motion } from "framer-motion";

import styles from "./styles.module.scss";
import { scale, slide } from "./anim";

const SubTitle = () => {
  return (
    <div className={styles["sub-title"]}>
      <motion.span
        className={styles["sub-text"]}
        variants={slide}
        initial="initial"
        animate="animate"
        custom={1}
      >
        Artist
      </motion.span>
      <motion.span
        className={styles["circle"]}
        variants={scale}
        initial="initial"
        animate="animate"
        custom={2}
      ></motion.span>
      <motion.span
        className={styles["sub-text"]}
        variants={slide}
        initial="initial"
        animate="animate"
        custom={3}
      >
        Producer
      </motion.span>
      <motion.span
        className={styles["circle"]}
        variants={scale}
        initial="initial"
        animate="animate"
        custom={4}
      ></motion.span>
      <motion.span
        className={styles["sub-text"]}
        variants={slide}
        initial="initial"
        animate="animate"
        custom={5}
      >
        DJ
      </motion.span>
    </div>
  );
};

export default SubTitle;
