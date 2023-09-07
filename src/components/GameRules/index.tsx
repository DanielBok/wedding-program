import { Collapse, Switch } from "antd";
import React, { useState } from "react";
import BaseComponent from "../BaseComponent";
import BattlePutt from "./games/BattlePutt";
import FlipTacToe from "./games/FlipTacToe";
import GolfCornHole from "./games/GolfCornHole";
import SpikeBall from "./games/SpikeBall";
import { GameRulesContext } from "./hooks";

type Props = {
  id: string
};
const GameRules: React.FC<Props> = ({id}) => {
  const [spikeBallRuleMode, setSpikeBallRuleMode] = useState<"simple" | "default">("simple");

  return (
    <GameRulesContext.Provider value={{
      setSpikeBallRuleMode,
      spikeBallRuleMode,
    }}>
      <BaseComponent
        id={id}
        title="Game Rules"
      >
        <Collapse
          accordion
          items={[
            {
              key: "Battle-Putt",
              label: <b>Battle Putt</b>,
              children: <BattlePutt/>,
            },
            {
              key: "Flip-Tac-Toe",
              label: <b>Flip-Tac-Toe</b>,
              children: <FlipTacToe/>,
            },
            {
              key: "Golf-Corn-Hole",
              label: <b>Golf Corn Hole</b>,
              children: <GolfCornHole/>,
            },
            {
              key: "SpikeBall",
              label: <b>Spike Ball</b>,
              children: <SpikeBall/>,
              extra: <Switch
                checkedChildren="Simple"
                unCheckedChildren="Default"
                defaultChecked
                onClick={(checked, event) => {
                  event.stopPropagation();
                  setSpikeBallRuleMode(checked ? "simple" : "default");
                }}/>
            },
          ]}
        />
      </BaseComponent>
    </GameRulesContext.Provider>
  );
};

export default GameRules;