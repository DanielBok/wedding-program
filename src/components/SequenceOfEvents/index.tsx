import { Typography } from "antd";
import React from "react";
import styles from "./styles.module.css";

const {Title, Text} = Typography;

const SequenceOfEvents = () => {
  return (
    <div id="soe" className={styles.body}>
      <Title
        underline
        level={5}
        className={styles.title}
      >
        Sequence of Events
      </Title>
      <Text>
      </Text>
    </div>
  );
};

export default SequenceOfEvents;