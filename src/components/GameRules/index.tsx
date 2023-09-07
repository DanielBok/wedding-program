import { Collapse, Switch } from "antd";
import React, { useState } from "react";
import BaseComponent from "../BaseComponent";
import FlipTacToe from "./games/FlipTacToe";
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
              key: "Flip-Tac-Toe",
              label: <b>Flip-Tac-Toe</b>,
              children: <FlipTacToe/>,
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