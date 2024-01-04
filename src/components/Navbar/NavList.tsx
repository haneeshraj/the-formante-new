"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";
import { NAV_ITEMS } from "@/config/index";
import { navItemsAnim } from "./anim";

const NavList = () => {
  const [selectedItem, setSelectedItem] = useState<(typeof NAV_ITEMS)[number]>(
    NAV_ITEMS[0]
  );

  return (
    <div className={styles["nav-list"]}>
      {NAV_ITEMS.map((item, index) => (
        <motion.div
          key={`nav_${index}`}
          variants={navItemsAnim}
          initial="initial"
          animate="animate"
          custom={index}
        >
          <Link
            href={item.path}
            className={styles["nav-item"]}
            onMouseOver={() => setSelectedItem(item)}
            onMouseLeave={() => setSelectedItem(NAV_ITEMS[0])}
            onFocus={() => setSelectedItem(item)}
            onBlur={() => setSelectedItem(NAV_ITEMS[0])}
          >
            <span className={styles["text"]}>{item.name}</span>
            {selectedItem === item && (
              <motion.div className={styles["active"]} layoutId="active" />
            )}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default NavList;
