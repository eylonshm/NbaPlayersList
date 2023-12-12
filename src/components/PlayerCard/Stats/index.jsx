import styles from "./index.module.scss";

const PlayerStats = ({ label, value }) => {
  if (!value) return;
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default PlayerStats;
