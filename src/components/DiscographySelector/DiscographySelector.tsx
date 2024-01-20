"use client";

import { useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Single } from "@/types/types";
import styles from "./styles.module.scss";
import Release from "./Release";

const DiscographySelector = ({
  singles,
  albums,
  snippets,
}: {
  singles: Single[];
  albums: [];
  snippets: [];
}) => {
  const [active, setActive] = useState<"singles" | "albums" | "snippets">(
    "singles"
  );

  return (
    <>
      <div className={styles["selector"]}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.19, 0.69, 0.29, 1.03],
            },
          }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => setActive("singles")}
          className={clsx(styles["selector__item"], {
            [styles["selector__item--active"]]: active === "singles",
          })}
        >
          Singles
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.1,
              duration: 0.8,
              ease: [0.19, 0.69, 0.29, 1.03],
            },
          }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => setActive("albums")}
          className={clsx(styles["selector__item"], {
            [styles["selector__item--active"]]: active === "albums",
          })}
        >
          Albums
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.2,
              duration: 0.8,
              ease: [0.19, 0.69, 0.29, 1.03],
            },
          }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => setActive("snippets")}
          className={clsx(styles["selector__item"], {
            [styles["selector__item--active"]]: active === "snippets",
          })}
        >
          Snippets
        </motion.div>
      </div>

      <div className={styles["item-container"]}>
        <AnimatePresence mode="popLayout">
          {active === "singles" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, y: 20 }}
            >
              {singles.map((single) => {
                return <Release key={single.id} data={single} />;
              })}
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {/* TODO: Add albums and its data fetching function */}
          {active === "albums" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, y: 20 }}
            >
              {albums.length > 0 ? (
                <p>Albums</p>
              ) : (
                <p className={styles["empty"]}>No albums yet!</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="popLayout">
          {/* TODO: Add Snippets and its data fetching function */}
          {active === "snippets" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, y: 20 }}
            >
              {snippets.length > 0 ? (
                <p>Snippets</p>
              ) : (
                <p className={styles["empty"]}>No Snippets yet!</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default DiscographySelector;
