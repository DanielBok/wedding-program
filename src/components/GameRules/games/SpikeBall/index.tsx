import React from "react";
import { useGameRulesContext } from "../../hooks";
import GameRuleLayout from "../GameRuleLayout";
import DetailedRules from "./DetailedRules";
import SimplifiedRules from "./SimplifiedRules";


const SpikeBall = () => {
  const {spikeBallRuleMode} = useGameRulesContext();

  return (
    <GameRuleLayout
      tagline="Like volleyball and handball had a baby"
    >
      {spikeBallRuleMode === "simple" ? <SimplifiedRules/> : <DetailedRules/>}
    </GameRuleLayout>
  );
};

export default SpikeBall;