"use client";

import copyToClipboard from "clipboard-copy";

import styles from "./page.module.scss";

const Button = ({
  text,
  clipboardText,
}: {
  text: string;
  clipboardText: string;
}) => {
  return (
    <div
      className={styles["contact-info__item"]}
      onClick={() => copyToClipboard(clipboardText)}
    >
      {text}
    </div>
  );
};

export default Button;
