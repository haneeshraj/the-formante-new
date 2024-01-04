"use client";

import copyToClipboard from "clipboard-copy";

import styles from "./page.module.scss";
import { toast } from "sonner";

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
      onClick={() => {
        toast.success("Copied to clipboard");
        copyToClipboard(clipboardText);
      }}
    >
      {text}
    </div>
  );
};

export default Button;
