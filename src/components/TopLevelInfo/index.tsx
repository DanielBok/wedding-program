import React from "react";
import BaseComponent, { TextHolder } from "../BaseComponent";
import EventDetail from "./EventDetail";

type Props = {
  id: string
}

const TopLevelInfo: React.FC<Props> = ({id}) => (
  <BaseComponent
    id={id}
    title="Event Details"
  >
    <TextHolder>
      <EventDetail/>
    </TextHolder>
  </BaseComponent>
);

export default TopLevelInfo;