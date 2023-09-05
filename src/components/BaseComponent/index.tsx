import { Typography } from "antd";
import React from "react";
import styles from "./styles.module.css";


type Prop = {
  id: string
  title: string
  children?: React.ReactNode
}


const BaseComponent: React.FC<Prop> = ({id, title, children}) => {
  return (
    <div id={id} className={styles.body}>
      <Typography.Title
        underline
        level={5}
        className={styles.title}
      >
        Registry
      </Typography.Title>
      {children}
    </div>
  );
};

export default BaseComponent;