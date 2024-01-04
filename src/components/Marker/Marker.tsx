import Icon from "../Icon/Icon";
import styles from "./styles.module.scss";

const Marker = ({ text }: { text: string }) => {
  return (
    <div className={styles.marker}>
      <Icon.indicator className={styles.indicator} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default Marker;
