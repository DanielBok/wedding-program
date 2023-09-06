import React from "react";
import BaseComponent, { TextHolder } from "../BaseComponent";
import ImageGallery from "./ImageGallery";


type Props = {
  id: string
};

const DressCode: React.FC<Props> = ({id}) => {
  return (
    <BaseComponent
      id={id}
      title="Dress Code"
    >
      <ImageGallery/>
      <TextHolder>

      </TextHolder>
    </BaseComponent>
  );
};

export default DressCode;