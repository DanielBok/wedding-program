import React from "react";
import styles from "./styles.module.css";
import cx from "classnames";
type Props = {
  value: number
  className?: string
}

const Number: React.FC<Props> = ({value, className}) => {
  const result = value.toFixed(0).padStart(2, "0");

  return (
    <div className={cx(styles.digital, className)}>
      <p>88</p>
      <p>{result}</p>
    </div>
  );
};

export default Number;