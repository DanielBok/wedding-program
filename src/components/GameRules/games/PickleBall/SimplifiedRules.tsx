import { Image, Typography } from "antd";
import React, { useState } from "react";
import CenterContent from "../../../CenterContent";
import CenterDivider from "../../../CenterDivider";
import RuleImg1 from "./images/Rule1.png";
import RuleImg2 from "./images/Rule2.jpeg";
import RuleImg3 from "./images/Rule3.png";
import RuleImg4 from "./images/Rule4.png";
import RuleImg5 from "./images/Rule5.png";
import RuleImg6 from "./images/Rule6.png";
import RuleImg8 from "./images/Rule8.png";
import styles from "./styles.module.css";


const rules = [
  {
    title: "Each point begins with a serve",
    img: RuleImg1,
    more: (
      <div className={styles.ruleParagraph}>
        The pickleball game – and each point – starts with the serve.
        The player on the right side of the court, facing their opponents, starts the serve.
        You serve diagonally to your opponent, into the right or left service area.
      </div>
    ),
  },
  {
    title: "Your serve must be underhand",
    img: RuleImg2,
    more: (
      <div className={styles.ruleParagraph}>
        A pickleball serve must be hit with an underhand stroke with contact
        below the waist. Your arm must move in an upward arc when you strike the ball.
        You can hit the ball out of the air (as most players do).
        Or you can drop the ball on the ground and hit.
      </div>
    ),
  },
  {
    title: "Each point continues until a fault",
    img: RuleImg3,
    more: (
      <>
        <div className={styles.ruleParagraph}>
          After the serve, gameplay continues until a "fault" is committed. A fault ends a point.
          In pickleball, there are basically 3 types of faults:
        </div>
        <ol>
          <li>The serve does not clear the kitchen (including the line)</li>
          <li>A shot is hit out of bounds - landing behind the baseline or outside the sideline</li>
          <li>A shot is hit into the net</li>
        </ol>
        <div className={styles.ruleParagraph}>
          Note there is no <i>"let"</i> in pickleball – meaning if a serve hits the net,
          there's no redo. The ball is played as it lands.
        </div>
      </>
    ),
  },
  {
    title: "You can't volley in the kitchen",
    img: RuleImg4,
    more: (
      <>
        <div className={styles.ruleParagraph}>
          The 7 ft zone on each side marks the "non-volley zone," or kitchen
        </div>
        <div className={styles.ruleParagraph}>
          This means you can never hit a volley—which is a shot hit out of the air—while having
          any part of your body in the Kitchen. Or even on the Kitchen line. And you can't
          let your momentum carry you into the kitchen after a volley either.
        </div>
      </>
    ),
  },
  {
    title: "You can hit groundstrokes in the kitchen",
    img: RuleImg5,
    more: (
      <div className={styles.ruleParagraph}>
        If your opponent hits a short shot landing in the kitchen, what's called a dink,
        you <b>can</b> enter and hit from the kitchen.
      </div>
    ),
  },
  {
    title: "The ball must bounce on both sides before either team can volley",
    img: RuleImg6,
    more: (
      <div className={styles.ruleParagraph}>
        Before any player can hit a shot out of the air (a volley), the ball must bounce
        at least once on each side. This means that the serve must bounce on the
        receiving team's side at least once and the return (from the serve) must bounce
        on the serving team's side at least once.
      </div>
    ),
  },
  {
    title: "You only win points on your serve",
    more: (
      <div className={styles.ruleParagraph}>
        In Pickleball, you only win points on your serve, and you continue serving
        until you lose a point. After winning each point on your serve, you switch
        sides with your partner and serve to the other opponent.
      </div>
    ),
  },
  {
    title: "Both partners serve in a turn",
    img: RuleImg8,
    more: (
      <>
        <div className={styles.ruleParagraph}>
          In each turn, both players (in doubles) get the opportunity to serve.
          And in pickleball scoring, you'll hear players announce three numbers,
          "Zero, zero... <i>two</i>." The third number tracks which of the two
          players on a team has the serve.
        </div>
        <div className={styles.ruleParagraph}>
          Let's say the game is tied at 3-3. If you start the serve (from the right side remember),
          you'll announce "3-3-1", so everyone knows you are the first player in rotation serving.
        </div>
        <div className={styles.ruleParagraph}>
          If you lose the point, the ball doesn't go to your opponents. It goes to your teammate
          who will announce "3-3-2."
        </div>
        <div className={styles.ruleParagraph}>
          Then if you're partner loses their serve, the ball goes back to your opponents who will
          announce, again, "3-3-1." And your team will now have win points on both opponent's
          serves to get the ball back.
        </div>
      </>
    ),
  },
  {
    title: "First team to 11 points wins—but you must win by 2",
    more: (
      <div className={styles.ruleParagraph}>
        Or whatever score you guys one. However, assuming the game is played to 11 and it is
        currently tied at 10-10, <b>the next score doesn’t win</b>. A deuce is played and the
        first team to lead with 2 points win.
      </div>
    ),
  },
];


type SimpleRuleProps = {
  title: React.ReactNode,
  img?: string
  more?: React.ReactNode
}

const SimpleRule: React.FC<SimpleRuleProps> = ({title, img, more}) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className={styles.simpleRuleLayout}>
      <div className={styles.title}>{title}</div>
      {expanded ? <Content/> : (
        <Typography.Link onClick={() => setExpanded(true)}>Read more</Typography.Link>
      )}
    </div>
  );

  function Content() {
    return (
      <>
        {img &&
          <CenterContent>
            <Image src={img} alt="Rule Image" preview={false} className={styles.ruleImage}/>
          </CenterContent>
        }
        <div>
          {more}
          <Typography.Link onClick={() => setExpanded(false)}>Hide</Typography.Link>
        </div>
      </>
    );
  }
};

const SimplifiedRules = () => (
  <>
    {rules.map(({title, img, more}, i) => (
      <>
        <SimpleRule title={`Rule ${i + 1}: ${title}`} img={img} more={more}/>
        {i !== rules.length - 1 && <CenterDivider/>}
      </>
    ))}
  </>
);

export default SimplifiedRules;