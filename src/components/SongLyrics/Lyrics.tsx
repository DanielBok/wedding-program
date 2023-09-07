import React from "react";
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
    "Blessings all mine with 10, 000 beside"],
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

const Lyrics = () => (
  <div className={styles.lyricVerticalLayout}>
    <div className={styles.songTitle}>{TITLE}</div>
    <div>
      {LYRICS.map((section, i) => (
        <LyricSection section={section} key={i}/>
      ))}
    </div>
  </div>
);


export default Lyrics;