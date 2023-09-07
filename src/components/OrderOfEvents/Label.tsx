import { CaretDownOutlined, CaretRightOutlined } from "@ant-design/icons";
import React from "react";
import styles from "./styles.module.css";

type Props = {
  label: string
  selected: boolean
}


const Label: React.FC<Props> = ({label, selected}) => (
  <div className={styles.label}>
    {selected ? <CaretDownOutlined/> : <CaretRightOutlined/>}
    <span style={{marginLeft: 4}}>
      {label}
    </span>
  </div>
);

export default Label;