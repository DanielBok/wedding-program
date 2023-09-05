import React from "react";
import BaseComponent from "../BaseComponent";


type Props = { id: string }


const SongLyrics: React.FC<Props> = ({id}) => {
  return (
    <BaseComponent
      id={id}
      title="Song Lyrics"
    >

    </BaseComponent>
  );
};

export default SongLyrics;