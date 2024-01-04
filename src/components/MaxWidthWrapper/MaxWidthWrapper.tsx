import styles from "./styles.module.scss";

const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.widthWrapper}>{children}</div>;
};

export default MaxWidthWrapper;
