"use client";

import copyToClipboard from "clipboard-copy";

import styles from "./styles.module.scss";
import { toast } from "sonner";

const Button: React.FC<{ text: string; clipboardText: string }> = ({
  text,
  clipboardText,
}) => {
  return (
    <div
      className={styles["btn-contact"]}
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
