import { Col, Image, Row } from "antd";
import React from "react";

import SpikeBall1 from "./images/SpikeBall1.webp";
import SpikeBall2 from "./images/SpikeBall2.webp";
import SpikeBall3 from "./images/SpikeBall3.webp";
import SpikeBall4 from "./images/SpikeBall4.webp";
import styles from "./styles.module.css";

const rules = [
  {
    title: "2 VS 2",
    instruction: "Team 1 serves to Team 2 to start a point",
    image: SpikeBall1
  },
  {
    title: "3 TOUCH",
    instruction: "Players have up to three alternating touches to return the ball to the net",
    image: SpikeBall2
  },
  {
    title: "360 PLAY",
    instruction: "After the serve, players can move or hit in any direction",
    image: SpikeBall3
  },
  {
    title: "SCORING",
    instruction: "Points are scored when the ball hits the rim (fault), the ground, or bounces more than once on the net",
    image: SpikeBall4
  },
];

const SimplifiedRules = () => (
  <Row gutter={[16, 8]}>
    {rules.map(({instruction, title, image}, i) => (
      <Col key={i} md={6} sm={12} className={styles.simpleRuleWrapper}>
        <div><Image src={image} wrapperClassName={styles.image}/></div>
        <div className={styles.centerText}><b>{title}</b></div>
        <div className={styles.justifyText}>{instruction}</div>
      </Col>
    ))}
  </Row>
);

export default SimplifiedRules;