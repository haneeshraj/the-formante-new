import Reveal from "@/components/Reveal/Reveal";
import styles from "./styles.module.scss";
import Marker from "@/components/Marker/Marker";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import MainTitle from "./MainTitle";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.about}>
      <ContentWrapper>
        <Reveal type="left">
          <Marker text="Intro" />
        </Reveal>
        <div className={styles.content}>
          <div className={styles["left"]}>
            <MainTitle text="Hello! I'm a music producer with almost 6 years of experience designing sounds, mixing and mastering. As an artist, I produce a variety of electronic music, with more focus on tech house and psychedelic trance recently." />
          </div>
          <div className={styles.right}>
            <Reveal>
              <p className={styles.text}>
                However, I&apos;m very passionate about hip-hop, RnB and Pop
                music production and over the years, I&apos;ve helped artists of
                various styles achieve a professional sounding mix and master.
              </p>
            </Reveal>
            <Reveal>
              <Button path="/about" text="About me" />
            </Reveal>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default About;
