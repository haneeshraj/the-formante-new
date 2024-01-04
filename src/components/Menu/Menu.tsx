"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, forwardRef, Ref, SetStateAction } from "react";

import styles from "./styles.module.scss";
import { slide } from "./anim";
import MenuList from "./MenuList";

const Menu = forwardRef(function index(
  props: { setIsOpen?: Dispatch<SetStateAction<boolean>> },
  ref: Ref<HTMLDivElement> | null
) {
  return (
    <motion.div
      ref={ref}
      className={styles["menu"]}
      variants={slide}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <AnimatePresence>
        <MenuList setIsOpen={props.setIsOpen} />
      </AnimatePresence>
    </motion.div>
  );
});

export default Menu;
