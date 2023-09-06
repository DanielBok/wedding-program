import { createContext, useContext } from "react";

type GameRulesContextType = {
  spikeBallRuleMode: "simple" | "default";
  setSpikeBallRuleMode: (v: "simple" | "default") => void;
}

export const GameRulesContext = createContext<GameRulesContextType>({
  spikeBallRuleMode: "simple",
  setSpikeBallRuleMode: () => {
  }
});

export const useGameRulesContext = () => useContext(GameRulesContext);
