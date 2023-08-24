import React from "react";
import {Divider} from "antd";

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