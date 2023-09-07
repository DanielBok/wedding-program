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
      <TextHolder>
        <p>
          The dress code on the wedding day is {" "}
          <b style={{color: '#A7C7E7', backgroundColor: 'black'}}>Pastel Blue</b>
          {" or "}
          <b style={{color: 'white', backgroundColor: 'black'}}>White</b>.
          We've prepared some examples for you in the gallery below.
          Feel free to scroll through the images to get some inspiration.
        </p>
      </TextHolder>
      <ImageGallery/>
    </BaseComponent>
  );
};

export default DressCode;