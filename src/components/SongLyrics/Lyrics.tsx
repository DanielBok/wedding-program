import { CaretDownOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import React, { useState } from "react";
import styles from "./styles.module.css";

const TITLE = "Great is Thy Faithfulness";
const LYRICS = [
  [
    "Great is Thy faithfulness, O God my Father",
    "There is no shadow of turning with Thee",
    "Thou changest not, Thy compassions, they fail not",
    "As Thou hast been, Thou forever will be"
  ],
  [
    "Great is Thy faithfulness",
    "Great is Thy faithfulness",
    "Morning by morning new mercies I see",
    "All I have needed Thy hand hath provided",
    "Great is Thy faithfulness, Lord, unto me"
  ],
  [
    "Summer and winter and springtime and harvest",
    "Sun, moon and stars in their courses above",
    "Join with all nature in manifold witness",
    "To Thy great faithfulness, mercy and love"
  ],
  [
    "Great is Thy faithfulness",
    "Great is Thy faithfulness",
    "Morning by morning new mercies I see",
    "All I have needed Thy hand hath provided",
    "Great is Thy faithfulness, Lord, unto me"],
  [
    "Pardon for sin and a peace that endureth",
    "Thine own dear presence to cheer and to guide",
    "Strength for today and bright hope for tomorrow",
    "Blessings all mine with 10,000 beside"],
  [
    "Great is Thy faithfulness",
    "Great is Thy faithfulness",
    "Morning by morning new mercies I see",
    "All I have needed Thy hand hath provided",
    "Great is Thy faithfulness",
    "Great is Thy faithfulness",
    "Great is Thy faithfulness, Lord, unto me"
  ]
];


type SectionProps = {
  section: string[];
}

const LyricSection: React.FC<SectionProps> = ({section}) => (
  <>
    <div className={styles.lyricVerticalLayout}>
      {section.map((sentence, i) => (
        <div className={styles.lyricSentence} key={i}>{sentence}</div>
      ))}
    </div>
    <br/>
  </>
);

const SongLyrics = () => (
  <div>
    {LYRICS.map((section, i) => (
      <LyricSection section={section} key={i}/>
    ))}
  </div>
);

const Lyrics = () => {
  const masterKey = "song-lyrics";
  const [activeKey, setActiveKey] = useState(masterKey);

  return (
    <div className={styles.lyricVerticalLayout}>
      <Collapse
        accordion
        bordered={false}
        activeKey={activeKey}
        size="small"
        className={styles.lyricCollapse}
        onChange={onCollapseChange}
        items={[
          {
            key: masterKey,
            forceRender: true,
            showArrow: false,
            label: (
              <div className={styles.lyricCollapseLabel}>
                {activeKey === masterKey ? <CaretDownOutlined/> : <CaretRightOutlined/>}
                <span style={{marginLeft: 4}}>
                    <span className={styles.songTitle}>{TITLE}</span>
                </span>
              </div>
            ),
            children: <SongLyrics/>,
            className: styles.tabPanel,
          }
        ]}
      />
    </div>
  );

  function onCollapseChange(keys: string | string[]) {
    setActiveKey(Array.isArray(keys) ? keys[0] : keys);
  }
};


export default Lyrics;