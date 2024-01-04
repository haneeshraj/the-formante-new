import styles from "./styles.module.scss";

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default ContentWrapper;
