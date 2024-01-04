"use client";

import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS } from "@/config/index";

import styles from "./styles.module.scss";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { up } from "./anim";
import { Dispatch, SetStateAction } from "react";

const MenuList = ({
  setIsOpen,
}: {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className={styles["menu-list"]}>
      <div className={styles["logo"]}>
        <Logo.branding />
      </div>
      {NAV_ITEMS.map((item, index) => (
        <div className={styles["overflow-container"]} key={`menu_${index}`}>
          <AnimatePresence>
            <motion.div
              className={styles["menu-item"]}
              custom={index}
              variants={up}
              initial="initial"
              animate="animate"
            >
              <Link
                href={item.path}
                className="link-format"
                onClick={() => setIsOpen && setIsOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
