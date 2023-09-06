import React from "react";
import styles from "./styles.module.css";
import cx from "classnames";

type Props = {
  value: string
  hidden?: boolean
  className?: string
}

const Word: React.FC<Props> = ({value, className, hidden = false}) => (
  <div className={cx(styles.digital, className)}>
    <p>{value}</p>
    <p style={{visibility: hidden ? "hidden" : "visible"}}>{value}</p>
  </div>
);

export default Word;