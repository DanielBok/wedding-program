import { Image } from "antd";
import React from "react";
import CenterContent from "components/CenterContent";
import GolfCornHoleGif from "./golf-corn-hole.gif";
import styles from "./styles.module.css";
import GameRuleLayout, { BasicRuleList, RuleSection } from "../GameRuleLayout";


const rules: React.ReactNode[] = [
  "Each player and the ball start behind the white line.",
  "Every player takes 6 shots, highest score wins",
  <>
    <div>Every time a shot is goes into one of the holes, a point is scored.</div>
    <ul className={styles.subRuleList}>
      <li>A recommended setup is to have the top-hole score 3 points, the middle hole 1 point and the bottom hole 2.</li>
      <li>Players can agree between themselves how to score the holes and if some holes should have negative points (penalty) before starting.</li>
    </ul>
  </>,
  "Players must be careful not to chip too hard and smash the ball into things that are other people or they’ll be disqualified!",
];


const GolfCornHole = () => (
  <GameRuleLayout
    tagline="Don't throw the club"
  >
    <CenterContent className={styles.imageContainer}>
      <Image src={GolfCornHoleGif} preview={false} alt="Golf Corn Hole"/>
    </CenterContent>
    <RuleSection>
      <BasicRuleList rules={rules}/>
    </RuleSection>
  </GameRuleLayout>
);

export default GolfCornHole;