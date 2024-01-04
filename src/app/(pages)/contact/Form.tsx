"use client";

import { toast } from "sonner";
import { addDoc } from "./actions";
import styles from "./page.module.scss";
import Reveal from "@/components/Reveal/Reveal";

export const Form = () => {
  return (
    <form
      className={styles.form}
      autoComplete="off"
      action={async (formData) => {
        const res = await addDoc(formData);

        if (res?.error) {
          toast.error(res.error);
        } else {
          toast.success(res.message);
        }
      }}
    >
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
            <span>send message</span>
          </button>
        </Reveal>
      </div>
    </form>
  );
};