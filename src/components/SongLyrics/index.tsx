import React from "react";
import BaseComponent, { TextHolder } from "../BaseComponent";
import Lyrics from "./Lyrics";


type Props = { id: string }


const SongLyrics: React.FC<Props> = ({id}) => (
  <BaseComponent
    id={id}
    title="Song Lyrics"
  >
    <TextHolder>
      <Lyrics/>
    </TextHolder>
  </BaseComponent>
);

export default SongLyrics;