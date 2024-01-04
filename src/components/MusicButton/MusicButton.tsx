"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";
import clsx from "clsx";
import { scale, up } from "./anim";

const MusicButton = () => {
  const [isPlaying, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setPlaying(!isPlaying);
    }
  };

  return (
    <>
      <motion.div
        className={styles["music-button"]}
        onClick={handlePlay}
        variants={scale}
        initial="initial"
        animate="animate"
      >
        <motion.span
          variants={up}
          initial="initial"
          animate="animate"
          custom={1}
          className={clsx(styles["line"], {
            [styles["line--line-1"]]: isPlaying,
          })}
        ></motion.span>
        <motion.span
          variants={up}
          initial="initial"
          animate="animate"
          custom={2}
          className={clsx(styles["line"], {
            [styles["line--line-2"]]: isPlaying,
          })}
        ></motion.span>
        <motion.span
          variants={up}
          initial="initial"
          animate="animate"
          custom={3}
          className={clsx(styles["line"], {
            [styles["line--line-3"]]: isPlaying,
          })}
        ></motion.span>
        <motion.span
          variants={up}
          initial="initial"
          animate="animate"
          custom={4}
          className={clsx(styles["line"], {
            [styles["line--line-4"]]: isPlaying,
          })}
        ></motion.span>
      </motion.div>
      <span className={styles["status"]}></span>
      <audio ref={audioRef} src="/bg.mp3" loop />
    </>
  );
};

export default MusicButton;
