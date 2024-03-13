import styles from "./styles.module.scss";
import { INFO } from "@/config";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import Reveal from "@/components/Reveal/Reveal";
import { revalidatePath } from "next/cache";
import { getInfo } from "@/functions/data";

export const Footer = async () => {
  const socials = await getInfo();

  revalidatePath("/");

  return (
    <Reveal>
      <div className={styles.footer}>
        <div className={styles["content"]}>
          <div className={styles["left"]}>
            <Reveal>
              <p className={styles["copyright"]}>
                The Formante &copy; {new Date().getFullYear()}
              </p>
            </Reveal>
            <Reveal>
              <p className={styles["copyright"]}>
                Designed by {INFO.designedBy}
              </p>
            </Reveal>
          </div>
          <div className={styles["right"]}>
            <div className={styles["contact-info"]}>
              <Reveal>
                <div className={styles["contact-group"]}>
                  <p className={styles["title"]}>Email</p>
                  <p className={styles["label"]}>
                    {socials?.email
                      ? !socials.email
                        ? INFO.email
                        : socials.email
                      : INFO.email}
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className={styles["contact-group"]}>
                  <p className={styles["title"]}>Phone Number</p>
                  <p className={styles["label"]}>
                    {socials?.phone
                      ? !socials.phone
                        ? INFO.phoneNumber
                        : socials.phone
                      : INFO.phoneNumber}
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <div className={styles["icons"]}>
                <Link
                  href={
                    socials?.instagram
                      ? !socials.instagram
                        ? INFO.socials.instagram
                        : socials.instagram
                      : INFO.socials.instagram
                  }
                  target="_blank"
                >
                  <Logo.instagram className={styles["icon"]} />
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
                >
                  <Logo.twitter className={styles["icon"]} />
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
                >
                  <Logo.youtube className={styles["icon"]} />
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
                >
                  <Logo.spotify className={styles["icon"]} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Footer;
