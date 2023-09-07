import { createContext, useContext } from "react";

type GameMode = "simple" | "default"

type GameRulesContextType = {
  spikeBallRuleMode: GameMode;
  setSpikeBallRuleMode: (v: GameMode) => void;
  pickleBallRuleMode: GameMode;
  setPickleBallRuleMode: (v: GameMode) => void;
}

export const GameRulesContext = createContext<GameRulesContextType>({
  spikeBallRuleMode: "simple",
  setSpikeBallRuleMode: () => {
  },
  pickleBallRuleMode: "simple",
  setPickleBallRuleMode: () => {
  },
});

export const useGameRulesContext = () => useContext(GameRulesContext);
