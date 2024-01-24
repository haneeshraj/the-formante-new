import AnimatedText from "@/components/AnimatedText/AnimatedText";
import styles from "./page.module.scss";
import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <AnimatedText
          type="h2"
          text="Who am I?"
          className={`${styles.title} ${styles["title-desktop"]}`}
        />
        <Reveal>
          <p className={styles.content}>
            Lorem ipsum dolor sit amet consectetur. Tortor lectus dui at
            faucibus velit luctus. Orci at eros amet urna. Egestas facilisis sit
            ac vulputate. Vitae ridiculus sodales enim aliquet feugiat quis
            pretium. Mattis amet pellentesque duis malesuada magna id. Nibh
            tempor nec aliquet elit volutpat aliquam eget fringilla. Vitae
            tortor hendrerit pharetra ut aliquam tortor lorem. Elit nisi enim
            lacus ac id. Ut turpis pretium praesent congue.
          </p>
        </Reveal>
        <Reveal>
          <p className={styles.content}>
            Netus lacus ut diam accumsan interdum aenean elit. Nec sit eu id
            quisque arcu etiam nisi. Fames enim orci lacus lobortis iaculis
            urna. Quisque diam morbi dictumst eu bibendum. Aliquet nibh
            adipiscing interdum enim auctor vulputate convallis. Odio nibh.
          </p>
        </Reveal>
        <Reveal>
          <h3 className={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </Reveal>
        <Reveal>
          <p className={styles.content}>
            Netus lacus ut diam accumsan interdum aenean elit. Nec sit eu id
            quisque arcu etiam nisi. Fames enim orci lacus lobortis iaculis
            urna. Quisque diam morbi dictumst eu bibendum. Aliquet nibh
            adipiscing interdum enim auctor vulputate convallis. Odio nibh.
          </p>
        </Reveal>
      </div>
      <div className={styles.right}>
        <AnimatedText
          type="h2"
          text="Who am I?"
          className={`${styles.title} ${styles["title-mob"]}`}
        />
        <div className={styles["image-container"]}>
          <Image
            src="/about.JPG"
            fill
            alt="About"
            priority
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
