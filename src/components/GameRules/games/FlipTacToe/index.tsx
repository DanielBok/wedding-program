import { Image } from "antd";
import CenterContent from "components/CenterContent";
import React from "react";
import GameRuleLayout, { BasicRuleList, RuleSection } from "../GameRuleLayout";
import FlipTacToeImage from "./FlipTacToe.jpg";
import styles from "./styles.module.css";

const rules = [
  "Each player will be given different coloured cups.",
  "Each player starts by placing their cups on the playing surface (away from the board).",
  "Before the game can commence, all players must acknowledge they are ready, do a customary bow, and down a drink.",
  "Players will try to flip their cup upside down using their fingers. Once their cup has successfully been flipped upside down, they can now place that cup anywhere on the tic-tac-toe board.",
  "Players who make a successful flip can place their cup on top of other players’ cup. When that happens, they are the new owner of that tile and other players cannot use cups below to form a row.",
  "The first player to have three cups of their colour in a row wins!",
  "You can choose to play it turn-based (play moves clockwise) or in real-time (fastest flipper)",
];

const FlipTacToe = () =>
  (
    <GameRuleLayout
      tagline="Tic-Tac-Toe for adults"
    >
      <CenterContent className={styles.imageContainer}>
        <Image src={FlipTacToeImage} preview={false}/>
      </CenterContent>
      <RuleSection>
        <BasicRuleList rules={rules}/>
      </RuleSection>
    </GameRuleLayout>
  );

export default FlipTacToe;