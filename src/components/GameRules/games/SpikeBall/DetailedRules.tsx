import React from "react";
import { BasicRuleList, RuleSection } from "../GameRuleLayout";


const rules = {
  "SERVING": [
    "Server must toss the ball upward for at least 4 inches (10cm) before hitting the ball at the net with any amount of force.",
    "If the server tosses the ball, they must hit it. Not hitting it, (i.e. dropping, catching, etc) counts as a fault.",
    "If the serve hits the rim, it counts as a fault.",
    "2 faults and the serving team loses the point.",
    "The team which won the previous point serves. If the team serving previously won, the serve must be transferred to the next player in the team. Otherwise, the serve must be given to the player who didn’t previously serve. In other words, serves must alternate between players.",
  ],
  "RALLY": [
    "Each team has a maximum of 3 touches, by the end of which, the ball must touch the net.",
    "Players must contact the ball cleanly and not catch, lift, or throw the ball. Players may only contact the ball with 1 hand.",
    "Players can use any parts of the body to hit the ball.",
    "Points are scored when the ball hits the rim, the ground or bounces more than once on the net.",
    "Players can move in any direction. However, defending team must not obstruct the attacking team from reaching the ball.",
    "If teams cannot decide the legality of the point, replay the point.",
  ]
};

const DetailedRules = () => (
  <>
    {Object.entries(rules).map(([title, instructions]) => (
      <RuleSection title={title} key={title}>
        <BasicRuleList rules={instructions}/>
      </RuleSection>
    ))}
  </>
);

export default DetailedRules;