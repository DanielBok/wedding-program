import { Divider } from "antd";
import React from "react";

const CenterDivider = () =>
  (
    <div style={{display: "flex", justifyContent: "center"}}>
      <Divider style={{
        width: "90%",
        minWidth: "90%",
        margin: 12,
      }}/>
    </div>
  );

export default CenterDivider;