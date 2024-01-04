"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import styles from "./styles.module.scss";
import { wordAnim } from "./anim";

const MainTitle = ({ text }: { text: string }) => {
  const ref = useRef<null | HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  const words = text.split(" ");

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView, mainControls]);

  return (
    <h1 className={styles["main-title"]} ref={ref}>
      {words.map((word, index) => (
        <span key={index} className={styles.word}>
          <motion.span
            variants={wordAnim}
            initial="initial"
            animate={mainControls}
            style={{ display: "inline-block" }}
            custom={index}
          >
            {word}
          </motion.span>
          {"\u00A0"}
        </span>
      ))}
    </h1>
  );
};

export default MainTitle;
