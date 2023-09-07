import React from "react";
import { BasicRuleList, RuleSection } from "../GameRuleLayout";


const rules = {
  "SERVING": [
    "The server's arm must be moving in an upward arc when the ball is struck.",
    "Paddle contact with the ball must not be made above the waist level.",
    "The head of the paddle must not be above the highest part of the wrist at contact.",
    `A "drop serve" is also permitted in which case none of the elements above apply.`,
    "At the time the ball is struck, the server's feet may not touch the court or outside the imaginary extension of the sideline or centerline and at least one foot must be behind the baseline on the playing surface or the ground behind the baseline.",
    "The serve is made diagonally crosscourt and must land within the confines of the opposite diagonal court.",
    "Only one serve attempt is allowed per server.",

  ],
  "SERVING SEQUENCE": [
    "Both players on the serving doubles team can serve and score points until they commit a fault *(except for the first service sequence of each new game).",
    "The first serve of each side-out is made from the right/even court.",
    "If a point is scored, the server switches sides and initiates the next serve from the left/odd court.",
    "As subsequent points are scored, the server continues switching back and forth until a fault is committed, and the first server loses the serve.",
    "When the first server loses the serve the partner then serves from their correct side of the court (except for the first service sequence of the game*).",
    "The second server continues serving until his team commits a fault and loses the serve to the opposing team.",
    "Once the service goes to the opposition (at side out), the first serve is from the right/even court and both players on that team can serve and score points until their team commits two faults.",
    "In singles the server serves from the right/even court when his or her score is even and from the left/odd when the score is odd.",
  ],
  "SCORING": [
    "Points are scored only by the serving team.",
    "Games are normally played to 11 points, win by 2.",
  ],
  "RALLYING": [
    "When the ball is served, the receiving team must let it bounce before returning, and then the serving team must let it bounce before returning, thus two bounces.",
    "After the ball has bounced once in each team's court, both teams may either volley the ball (hit the ball before it bounces) or play it off a bounce (ground stroke).",
    `A ball contacting any part of any line is considered "in."`,
    "The non-volley zone is the court area within 7 feet on both sides of the net.",
    "Volleying is prohibited within the non-volley zone. This rule prevents players from executing smashes from a position within the zone.",
    "It is a fault if, when volleying a ball, the player steps on the non-volley zone, including the line and/or when the player's momentum causes them or anything they are wearing or carrying to touch the non-volley zone including the associated lines.",
    "It is a fault if, after volleying, a player is carried by momentum into or touches the non-volley zone, even if the volleyed ball is declared dead before this happens.",
    "A player may legally be in the non-volley zone any time other than when volleying a ball.",
    `The non-volley zone is commonly referred to as "the kitchen."`,
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