import React from "react";


type Props = {
  selected: boolean
  children?: React.ReactNode
}

const Label: React.FC<Props> = ({selected, children}) => {
  return (
    <span style={{color: selected ? "inherit" : "#94b0e7", fontWeight: 500}}>
      {children}
    </span>
  );
};

export default Label;