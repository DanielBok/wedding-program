import React from "react";


type Props = {
  className?: string
  children?: React.ReactNode
}

const CenterContent: React.FC<Props> = ({className, children}) => (
  <div style={{display: "flex", justifyContent: "center"}} className={className}>
    {children}
  </div>
);


export default CenterContent;