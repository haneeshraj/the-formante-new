"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import Icon from "../Icon/Icon";

const Button = ({
  path,
  text,
}: {
  path: string;
  text: string;
}): JSX.Element => {
  return (
    <Link href={path} className={styles.button}>
      <span className={styles.text}>{text}</span>
      <span className={styles.icon}>
        <Icon.navigate color="#61d291" className={styles["icon-svg"]} />
      </span>
    </Link>
  );
};

export default Button;
