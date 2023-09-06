import { Tabs, Typography } from "antd";
import React, { useState } from "react";
import BaseComponent, { TextHolder } from "../BaseComponent";
import Label from "./Label";
import QRHongKongPayMe from "./qr-hk-payme.gif";
import QRSingaporePayNow from "./qr-singapore-paynow.gif";
import QRDetails from "./QRDetails";

const {Text} = Typography;

type Props = { id: string }

const Registry: React.FC<Props> = ({id}) => {
  const [activeKey, setActiveKey] = useState("singapore");

  return (
    <BaseComponent
      id={id}
      title="Registry"
    >
      <TextHolder>
        <p>
          Thank you for joining us on this special day. Your presence is more than a present to us.
          However, if you'd like to contribute to our family (cat) building efforts,
          you may donate to our
          {" "}
          <Text strong style={{color: "#4c638f"}}>Château des Chats</Text>
          {" "} fund
          (<Text italic>french for Castle of Cats</Text>).
        </p>
      </TextHolder>
      <Tabs
        activeKey={activeKey}
        onTabClick={key => setActiveKey(key)}
        style={{maxWidth: "90vw"}}
        centered
        items={[
          {
            key: "singapore",
            label: <Label selected={activeKey === "singapore"}>Singapore</Label>,
            children:
              <QRDetails image={QRSingaporePayNow}>
                <div><b>PayNow</b> for those from <b>Singapore</b></div>
              </QRDetails>
          },
          {
            key: "hongkong",
            label: <Label selected={activeKey === "hongkong"}>Hong Kong</Label>,
            children:
              <QRDetails image={QRHongKongPayMe}>
                <div><b>PayMe</b> for those from <b>Hong Kong</b></div>
              </QRDetails>
          },
        ]}
      />
    </BaseComponent>
  );
};


export default Registry;