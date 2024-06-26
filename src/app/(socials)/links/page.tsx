import Image from "next/image";
import styles from "./page.module.scss";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import Reveal from "@/components/Reveal/Reveal";
import { INFO } from "@/config";
import { getInfo } from "@/functions/data";

const Page = async () => {
  const dbInfo = await getInfo();

  return (
    <div className={styles["container"]}>
      <div className={styles["info"]}>
        <Image
          src="/link-picture.png"
          alt={"user"}
          width={250}
          height={250}
          className={styles["info__image"]}
        />
        <div className={styles["info__text"]}>
          <AnimatedText
            text="The Formante"
            type="h2"
            className={styles["info__title"]}
          />
          <Reveal>
            <p className={styles["info__description"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              soluta, consectetur ipsam molestias minima architecto qui earum
              sit ex, rem fugit accusamus, beatae vitae in cum reprehenderit!
              Impedit, saepe praesentium?
            </p>
          </Reveal>
        </div>
      </div>

      <div className={styles["links"]}>
        <div className={styles["links__socials"]}>
          <Link
            href={dbInfo?.instagram || INFO.socials.instagram}
            className={styles["links__social"]}
          >
            <Logo.instagram className={styles["links__icon"]} />
            <span className={styles["links__tag"]}>
              {`@${dbInfo?.instagram
                .replace("https://www.instagram.com/", "")
                .replace("/", "")}` || "@theformante"}
            </span>
          </Link>
          <Link
            href={dbInfo?.youtube || INFO.socials.youtube}
            className={styles["links__social"]}
          >
            <Logo.youtube className={styles["links__icon"]} />
            <span className={styles["links__tag"]}>The Formante</span>
          </Link>
          <Link
            href={dbInfo?.spotify || INFO.socials.spotify}
            className={styles["links__social"]}
          >
            <Logo.spotify className={styles["links__icon"]} />
            <span className={styles["links__tag"]}>The Formante</span>
          </Link>
          <Link
            href={dbInfo?.twitter || INFO.socials.twitter}
            className={styles["links__social"]}
          >
            <Logo.twitter className={styles["links__icon"]} />
            <span className={styles["links__tag"]}>
              {`@${dbInfo?.twitter.replace("https://twitter.com/", "")}` ||
                "@candy_heist"}
            </span>
          </Link>
          <Link
            href={dbInfo?.apple || INFO.socials.apple}
            className={styles["links__social"]}
          >
            <Logo.apple className={styles["links__icon"]} />
            <span className={styles["links__tag"]}>The Formante</span>
          </Link>
          <Link href={INFO.socials.website} className={styles["links__social"]}>
            <Logo.branding className={styles["links__icon"]} />
            <span className={styles["links__tag"]}>Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
