import React from "react";
import BaseComponent from "../BaseComponent";


type Props = { id: string }

const SequenceOfEvents: React.FC<Props> = ({id}) => {
  return (
    <BaseComponent
      id={id}
      title="Sequence of Events"
    >

    </BaseComponent>
  );
};

export default SequenceOfEvents;