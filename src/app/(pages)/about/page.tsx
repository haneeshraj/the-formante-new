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
            My real name is Yedu Renjith and I&#39;m a 22-year-old music
            producer, rapper, lyricist and sound engineer from Kerala, India.
            Currently based in Nova Scotia, Canada, I&#39;ve been into music
            production for close to 7 years. During this time, I&#39;ve dived
            deep into the core concepts of audio recording, mixing and mastering
            in the pursuit of helping new artists establish a solid foundation,
            technically speaking.
          </p>
        </Reveal>
        <Reveal>
          <p className={styles.content}>
            Many of the artists I&#39;ve worked with have never made music
            before, and collectively, their biggest praise for me is my ability
            to truly connect with their vision and bring it to life
            successfully.
          </p>
        </Reveal>
        <Reveal>
          <h3 className={styles.subtitle}>
            I&#39;m good at what I do, that&#39;s because
          </h3>
        </Reveal>
        <Reveal>
          <p className={styles.content}>
            I&#39;ve spent most of my time working on electronic music, however
            as a huge enthusiast of rap music, I&#39;ve found myself spend my
            down time making beats and recording my vocals over it. I believe
            I&#39;m versatile in my ability to work around multiple genres
            instead of being stuck to one. Do send me a message from my website
            if you&#39;d like for me to take a listen to your demo and discuss
            where we can take things! {`:)`}
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
