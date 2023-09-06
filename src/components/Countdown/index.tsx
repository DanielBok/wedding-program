import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import CenterContent from "../CenterContent";
import CenterDivider from "../CenterDivider";
import Number from "./Number";
import styles from "./styles.module.css";
import Word from "./Word";

type Props = {
  targetTime: string
  addDivider?: boolean
}


const Countdown: React.FC<Props> = ({targetTime, addDivider = false}) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(1);

  const target = dayjs(targetTime);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      if (now >= target) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        let delta = (target.unix() - now.unix());
        const numDays = Math.floor(delta / 3600 / 24);
        delta -= numDays * 3600 * 24;
        const numHours = Math.floor(delta / 3600);
        delta -= numHours * 3600;
        const numMinutes = Math.floor(delta / 60);
        const numSeconds = delta - numMinutes * 60;

        setDays(numDays);
        setHours(numHours);
        setMinutes(numMinutes);
        setSeconds(numSeconds);
      }

    }, 500);

    return () => clearInterval(interval);
  }, [target]);

  const now = dayjs();

  // don't render if event has passed
  if (now >= target) {
    return null;
  }

  const values = {
    "DAYS": days,
    "HOURS": hours,
    "MINUTES": minutes,
    "SECONDS": seconds,
  };

  return (
    <>
      <CenterContent>
        <div className={styles.clock}>
          <div className={styles.countdown}>
            {Object.entries(values).map(([period, value]) => (
              <span key={period}>
            <div className={styles.itemGroup}>
              <Word value={period} className={styles.minorDescriptor}/>
              <div style={{display: "flex"}}>
                <Number value={value}/>
                {period !== "SECONDS" && <Word value={":"}/>}
              </div>
            </div>
          </span>
            ))}
          </div>
        </div>
      </CenterContent>
      {addDivider && <CenterDivider/>}
    </>
  );
};

export default Countdown;