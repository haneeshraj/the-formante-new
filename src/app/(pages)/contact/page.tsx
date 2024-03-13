import Link from "next/link";
import copyToClipboard from "clipboard-copy";

import AnimatedText from "@/components/AnimatedText/AnimatedText";
import styles from "./page.module.scss";
import { INFO } from "@/config";
import Logo from "@/components/Logo/Logo";
import Reveal from "@/components/Reveal/Reveal";
import Button from "./Button";
import { Form } from "./Form";
import { getInfo } from "@/functions/data";
import { revalidatePath } from "next/cache";

const ContactPage = async () => {
  const socials = await getInfo();

  revalidatePath("/contact");

  return (
    <div className={styles.container}>
      <Reveal type="top">
        <h2 className={styles["title"]}>Lets work on something together.</h2>
      </Reveal>
      <Reveal>
        <p className={styles["subtitle"]}>
          or if you have any questions, fill out the form below and I&apos;ll
          get back to you as soon as possible.
        </p>
      </Reveal>
      <Form />

      <Reveal>
        <div className={styles["contact-info"]}>
          <h4 className={styles["contact-info__heading"]}>
            Contact Information
          </h4>
          <div className={styles["contact-info__group"]}>
            <Button
              text={
                socials?.email
                  ? !socials.email
                    ? INFO.email
                    : socials.email
                  : INFO.email
              }
              clipboardText={
                socials?.email
                  ? !socials.email
                    ? INFO.email
                    : socials.email
                  : INFO.email
              }
            />
            <Button
              text={
                socials?.phone
                  ? !socials.phone
                    ? INFO.phoneNumber
                    : socials.phone
                  : INFO.phoneNumber
              }
              clipboardText={
                socials?.phone
                  ? !socials.phone
                    ? INFO.phoneNumber
                    : socials.phone
                  : INFO.phoneNumber
              }
            />
          </div>
          <div className={styles["contact-info__socials"]}>
            <Link
              href={
                socials?.instagram
                  ? !socials.instagram
                    ? INFO.socials.instagram
                    : socials.instagram
                  : INFO.socials.instagram
              }
              target="_blank"
              className={styles["link"]}
            >
              <Logo.instagram className={styles["contact-info__icon"]} />
            </Link>
            <Link
              href={
                socials?.spotify
                  ? !socials.spotify
                    ? INFO.socials.spotify
                    : socials.spotify
                  : INFO.socials.spotify
              }
              target="_blank"
              className={styles["link"]}
            >
              <Logo.spotify className={styles["contact-info__icon"]} />
            </Link>
            <Link
              href={
                socials?.twitter
                  ? !socials.twitter
                    ? INFO.socials.twitter
                    : socials.twitter
                  : INFO.socials.twitter
              }
              target="_blank"
              className={styles["link"]}
            >
              <Logo.twitter className={styles["contact-info__icon"]} />
            </Link>
            <Link
              href={
                socials?.youtube
                  ? !socials.youtube
                    ? INFO.socials.youtube
                    : socials.youtube
                  : INFO.socials.youtube
              }
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
