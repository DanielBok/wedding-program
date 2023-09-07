import React from "react";
import { useGameRulesContext } from "../../hooks";
import GameRuleLayout from "../GameRuleLayout";
import DetailedRules from "./DetailedRules";
import SimplifiedRules from "./SimplifiedRules";


const PickleBall = () => {
  const {pickleBallRuleMode} = useGameRulesContext();

  return (
    <GameRuleLayout
      tagline="When you’re getting too old for tennis"
    >
      {
        pickleBallRuleMode === "simple"
          ? <SimplifiedRules/>
          : <DetailedRules/>
      }
    </GameRuleLayout>
  );
};

export default PickleBall;