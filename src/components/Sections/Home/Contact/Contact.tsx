import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import styles from "./styles.module.scss";
import Marker from "@/components/Marker/Marker";
import Reveal from "@/components/Reveal/Reveal";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import LocalButton from "./Button";
import Button from "@/components/Button/Button";
import { INFO } from "@/config";

const Contact = () => {
  return (
    <ContentWrapper>
      <div className={styles["contact"]}>
        <div className={styles["wrapper"]}>
          <Reveal type="left">
            <Marker text="Contact" />
          </Reveal>
          <div className={styles["container"]}>
            <div className={styles["left"]}>
              <AnimatedText
                text="Got a question?"
                className={styles.heading}
                type="h3"
              />
              <Reveal>
                <p className={styles["sub-text"]}>
                  {"React out to me and let's talk :)"}
                </p>
              </Reveal>
              <div className={styles["btn-container"]}>
                <Reveal>
                  <LocalButton text={INFO.email} clipboardText={INFO.email} />
                </Reveal>
                <Reveal>
                  <LocalButton
                    text={INFO.phoneNumber}
                    clipboardText={INFO.phoneNumber}
                  />
                </Reveal>
              </div>
            </div>
            <div className={styles["right"]}>
              <div></div>
              <Reveal>
                <Button path="/contact" text="Contact" />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Contact;
