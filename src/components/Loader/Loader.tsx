import clsx from "clsx";
import styles from "./styles.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={clsx(styles["circle"], styles["circle--1"])}></div>
      <div className={clsx(styles["circle"], styles["circle--2"])}></div>
      <div className={clsx(styles["circle"], styles["circle--3"])}></div>
    </div>
  );
};

export default Loader;
