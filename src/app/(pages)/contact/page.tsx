import Link from "next/link";
import copyToClipboard from "clipboard-copy";

import AnimatedText from "@/components/AnimatedText/AnimatedText";
import styles from "./page.module.scss";
import { INFO } from "@/config";
import Logo from "@/components/Logo/Logo";
import Reveal from "@/components/Reveal/Reveal";
import Button from "./Button";
import { addDoc } from "./actions";
import { Form } from "./Form";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <Reveal type="top">
        <h2 className={styles["title"]}>Lets work on something together.</h2>
      </Reveal>
      <AnimatedText
        className={styles.subtitle}
        type="p"
        text="Lorem ipsum dolor sit amet consectetur."
      />

      <Form />

      <Reveal>
        <div className={styles["contact-info"]}>
          <h4 className={styles["contact-info__heading"]}>
            Contact Information
          </h4>
          <div className={styles["contact-info__group"]}>
            <Button text={INFO.email} clipboardText={INFO.email} />
            <Button text={INFO.phoneNumber} clipboardText={INFO.phoneNumber} />
          </div>
          <div className={styles["contact-info__socials"]}>
            <Link
              href={INFO.socials.instagram}
              target="_blank"
              className={styles["link"]}
            >
              <Logo.instagram className={styles["contact-info__icon"]} />
            </Link>
            <Link
              href={INFO.socials.spotify}
              target="_blank"
              className={styles["link"]}
            >
              <Logo.spotify className={styles["contact-info__icon"]} />
            </Link>
            <Link
              href={INFO.socials.twitter}
              target="_blank"
              className={styles["link"]}
            >
              <Logo.twitter className={styles["contact-info__icon"]} />
            </Link>
            <Link
              href={INFO.socials.youtube}
              target="_blank"
              className={styles["link"]}
            >
              <Logo.youtube className={styles["contact-info__icon"]} />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default ContactPage;
