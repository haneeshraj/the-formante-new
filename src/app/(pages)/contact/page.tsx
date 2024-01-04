import Link from "next/link";
import copyToClipboard from "clipboard-copy";

import AnimatedText from "@/components/AnimatedText/AnimatedText";
import styles from "./page.module.scss";
import { INFO } from "@/config";
import Logo from "@/components/Logo/Logo";
import Reveal from "@/components/Reveal/Reveal";
import Button from "./Button";
import { addData } from "@/actions/actions";

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

      <div className={styles["contact-info"]}>
        <h4 className={styles["contact-info__heading"]}>Contact Information</h4>

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
    </div>
  );
};

export default ContactPage;

const Form = () => {
  return (
    <form className={styles.form} autoComplete="off" action={addData}>
      <div className={styles["input-group"]}>
        <Reveal>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            placeholder=""
            autoComplete="off"
          />
          <label className={styles.label} htmlFor="name">
            Name
          </label>
        </Reveal>
      </div>
      <div className={styles["input-group"]}>
        <Reveal>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder=""
            autoComplete="off"
          />
          <label className={styles.label} htmlFor="email">
            Email
          </label>
        </Reveal>
      </div>
      <div className={styles["input-group"]}>
        <Reveal>
          <input
            className={styles.input}
            type="text"
            id="pno"
            name="pno"
            pattern="^[0-9]{10}$|^$"
            title="Please enter a valid 10-digit phone number"
            placeholder=""
            autoComplete="off"
          />
          <label htmlFor="pno" className={styles.label}>
            Phone Number
          </label>
        </Reveal>
      </div>
      <div className={styles["input-group"]}>
        <Reveal>
          <input
            type="text"
            id="subject"
            name="subject"
            className={styles.input}
            placeholder=""
            autoComplete="off"
          />
          <label htmlFor="subject" className={styles.label}>
            Subject
          </label>
        </Reveal>
      </div>
      <div className={styles["input-group"]}>
        <Reveal>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            placeholder=""
            autoComplete="off"
          />
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
        </Reveal>
      </div>
      <div className={styles["btn"]}>
        <Reveal>
          <button type="submit" className={styles.button}>
            send message
          </button>
        </Reveal>
      </div>
    </form>
  );
};
