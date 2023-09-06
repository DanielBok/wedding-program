import { Typography } from "antd";
import React from "react";
import styles from "./styles.module.css";


type Prop = {
  id: string
  title: string
  children?: React.ReactNode
}


const BaseComponent: React.FC<Prop> = ({id, title, children}) =>
  (
    <div id={id} className={styles.body}>
      <Typography.Title
        underline
        level={4}
        className={styles.title}
      >
        {title}
      </Typography.Title>
      {children}
    </div>
  );

export const TextHolder: React.FC<{ children: React.ReactNode }> = ({children}) => (
  <div className={styles.textBox}>
    {children}
  </div>
);

export default BaseComponent;