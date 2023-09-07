import { Image } from "antd";
import CenterContent from "components/CenterContent";
import React from "react";
import GameRuleLayout, { BasicRuleList, RuleSection } from "../GameRuleLayout";
import BattlePuttImage from "./golf-putt.jpg";
import styles from "./styles.module.css";

const rules = [
  "Every player takes turn to putt a ball from the hill to the opponent’s end.",
  "If the ball falls into the opponent’s hole, the opponent must do a forfeit (minimum forfeit is a drink).",
  "If a hole is made, it is “covered” and cannot be scored again till the next game.",
  "The player which scores continues their turn.",
  "If the ball falls into a hole which was already scored, it doesn’t count.",

];

const BattlePutt = () => {
  return (
    <GameRuleLayout
      tagline="Like beer pong, but with golf balls"
    >
      <CenterContent className={styles.imageContainer}>
        <Image src={BattlePuttImage} preview={false} alt="Battle Putt" className={styles.image}/>
      </CenterContent>
      <RuleSection>
        <BasicRuleList rules={rules}/>
      </RuleSection>
    </GameRuleLayout>
  );
};

export default BattlePutt;