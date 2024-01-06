"use client";

import Image from "next/image";
import {
  useTransform,
  useScroll,
  MotionValue,
  motion,
  useInView,
  useAnimation,
} from "framer-motion";
import { useEffect, useRef } from "react";

import useDimensions from "@/hooks/use-dimension";
import Marker from "@/components/Marker/Marker";
import styles from "./styles.module.scss";
import Reveal from "@/components/Reveal/Reveal";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import { ALL_SINGLES } from "@/config/index";
import clsx from "clsx";
import { slide } from "./anim";
import Button from "@/components/Button/Button";

const DiscographyGrid = () => {
  const container = useRef(null);
  const { height } = useDimensions();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const heading = "The plethora of tracks I've worked on over the years";

  const words = heading.split(" ");

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.75]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 1.7]);

  const ref = useRef<null | HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView, mainControls]);

  return (
    <ContentWrapper>
      <div className={styles["container"]}>
        <Reveal type="left">
          <Marker text="Discography" />
        </Reveal>
        <Reveal type="bottom">
          <div ref={container} className={styles["grid"]}>
            <h2 className={styles["heading"]} ref={ref}>
              {words.map((word, index) => (
                <span key={index} className={styles["word-container"]}>
                  <motion.span
                    className={styles.word}
                    variants={slide}
                    initial="initial"
                    animate={mainControls}
                    ref={ref}
                    custom={index}
                  >
                    {word}
                    {index !== words.length - 1 && "\u00A0"}
                  </motion.span>
                </span>
              ))}
            </h2>
            <div className={styles["discography-grid"]}>
              <Column
                images={[ALL_SINGLES[0], ALL_SINGLES[1], ALL_SINGLES[2]]}
                y={y}
              />
              <Column
                images={[ALL_SINGLES[3], ALL_SINGLES[4], ALL_SINGLES[5]]}
                y={y2}
              />
              <Column
                images={[ALL_SINGLES[6], ALL_SINGLES[7], ALL_SINGLES[8]]}
                y={y3}
                mobile
              />
              <Column
                images={[ALL_SINGLES[9], ALL_SINGLES[10], ALL_SINGLES[3]]}
                y={y4}
                tab
              />
              <Column
                images={[ALL_SINGLES[2], ALL_SINGLES[6], ALL_SINGLES[0]]}
                y={y5}
                tab
              />
            </div>
            <Reveal>
              <div className={styles["btn-container"]}>
                <Button path="/discography" text="Discography" />
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </ContentWrapper>
  );
};

export default DiscographyGrid;

const Column = ({
  images,
  y,
  tab,
  mobile,
}: {
  images: typeof ALL_SINGLES;
  y?: MotionValue<number>;
  tab?: boolean;
  mobile?: boolean;
}) => {
  return (
    <motion.div
      className={clsx(styles.column, {
        [styles["tab"]]: tab,
        [styles["mobile"]]: mobile,
      })}
      style={{ y }}
    >
      {images.map((song, index) => {
        return (
          <div key={`song-art_${index}`} className={styles["image-container"]}>
            <Image
              src={song.coverart}
              fill
              alt="image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        );
      })}
    </motion.div>
  );
};
