import React from "react";


const CenterContent: React.FC<{ children?: React.ReactNode }> = ({children}) => (
  <div style={{display: "flex", justifyContent: "center"}}>
    {children}
  </div>
);


export default CenterContent;