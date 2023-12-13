import { RotatingLines } from "react-loader-spinner";
import styles from "./index.module.scss";
import classNames from "classnames";

const LoadingIndicator = ({ className, style }) => {
  return (
    <div className={classNames(styles.loader, className)} style={style}>
      <RotatingLines
        strokeWidth="5"
        animationDuration="1"
        width="100"
        ariaLabel="loading"
        visible
      />
    </div>
  );
};

export default LoadingIndicator;
