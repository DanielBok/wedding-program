import { Tabs, Typography } from "antd";
import React from "react";
import BaseComponent, { TextHolder } from "../BaseComponent";
import QRHongKongPayMe from "./qr-hk-payme.gif";
import QRSingaporePayNow from "./qr-singapore-paynow.gif";
import QRDetails from "./QRDetails";

const {Text} = Typography;

type Props = { id: string }

const Registry: React.FC<Props> = ({id}) =>
  (
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
        defaultActiveKey="singapore"
        style={{maxWidth: "90vw"}}
        centered
        items={[
          {
            key: "singapore",
            label: "Singapore",
            children:
              <QRDetails image={QRSingaporePayNow}>
                <div><b>PayNow</b> for those from <b>Singapore</b></div>
              </QRDetails>
          },
          {
            key: "hongkong",
            label: "Hong Kong",
            children:
              <QRDetails image={QRHongKongPayMe}>
                <div><b>PayMe</b> for those from <b>Hong Kong</b></div>
              </QRDetails>
          },
        ]}
      />
    </BaseComponent>
  );


export default Registry;