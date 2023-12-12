import styles from "./index.module.scss";
import classNames from "classnames";
import { Moon, Sun } from "./svgs";

const toggleId = "themeToggle";

const ThemeToggle = ({ className, onClick }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <input type="checkbox" id={toggleId} />
      <label htmlFor={toggleId} onClick={onClick}>
        <Moon className={styles.moon} />
        <Sun className={styles.sun} />
      </label>
    </div>
  );
};

export default ThemeToggle;
