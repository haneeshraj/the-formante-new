"use client";

import copyToClipboard from "clipboard-copy";

import styles from "./styles.module.scss";

const Button: React.FC<{ text: string; clipboardText: string }> = ({
  text,
  clipboardText,
}) => {
  return (
    <div
      className={styles["btn-contact"]}
      onClick={() => copyToClipboard(clipboardText)}
    >
      {text}
    </div>
  );
};

export default Button;
