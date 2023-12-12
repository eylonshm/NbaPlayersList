import styles from "./index.module.scss";
import { noop } from "../../../utils";
import classNames from "classnames";

const Button = ({ text, onClick = noop, className, children }) => {
  return (
    <button className={classNames("button", className)} onClick={onClick}>
      {text || children}
    </button>
  );
};

export default Button;
