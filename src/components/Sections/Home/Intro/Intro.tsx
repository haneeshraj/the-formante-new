"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/Navbar/Navbar";
import styles from "./styles.module.scss";
import { videoAnim } from "./anim";
import Title from "@/components/Title/Title";
import SubTitle from "@/components/SubTitle/SubTitle";

const Intro = () => {
  return (
    <motion.section
      className={styles.intro}
      variants={videoAnim}
      initial="initial"
      animate="animate"
    >
      <Navbar />
      <div className={styles["video-overlay"]}></div>
      <video className={styles.video} autoPlay muted loop playsInline>
        <source src="/intro.mp4" type="video/mp4" />
      </video>
      <div className={styles["text-container"]}>
        <Title text="The Formante" />
        <SubTitle />
      </div>
    </motion.section>
  );
};

export default Intro;
