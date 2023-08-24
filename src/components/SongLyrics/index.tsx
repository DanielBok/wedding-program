import { Typography } from "antd";
import React from "react";
import styles from "./styles.module.css";

const {Title, Text} = Typography;

const SongLyrics = () => {
  return (
    <div id="song-lyrics" className={styles.body}>
      <Title
        underline
        level={5}
        className={styles.title}
      >
        Song Lyrics
      </Title>
      <Text>
      </Text>
    </div>
  );
};

export default SongLyrics;