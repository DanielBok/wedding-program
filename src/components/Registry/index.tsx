import { Tabs, Typography } from "antd";
import React, { useEffect, useState } from "react";
import BaseComponent, { TextHolder } from "../BaseComponent";
import Label from "./Label";
import QRHongKongPayMe from "./qr-hk-payme.gif";
import QRSingaporePayNow from "./qr-singapore-paynow.gif";
import QRDetails from "./QRDetails";

const {Text} = Typography;

type Props = { id: string }

const Registry: React.FC<Props> = ({id}) => {
  const [activeKey, setActiveKey] = useState("singapore");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      //  lat long bound
      const bounds = {
        hongkong: {
          latMin: 22,
          latMax: 22.7,
          lonMin: 113,
          lonMax: 115,
        }
      };

      const {latitude, longitude} = coords;
      for (const [key, {latMin, latMax, lonMin, lonMax}] of Object.entries(bounds)) {
        if (latMin <= latitude && latitude <= latMax && lonMin <= longitude && longitude <= lonMax) {
          setActiveKey(key);
          return;
        }
      }
    });
  }, []);

  return (
    <BaseComponent
      id={id}
      title="Registry"
    >
      <TextHolder>
        <p>
          Thank you for joining us on this special day. Your presence is more than a present to us.
        </p>
        <p>
          Since we have limited luggage space and because we're waiting to move into our new apartment
          next year, it would be difficult for us to receive physical gifts. However, if you'd like to
          contribute to our family (cat) building efforts, you may donate to our
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
              </QRDetails>,
            forceRender: true,
          },
          {
            key: "hongkong",
            label: <Label selected={activeKey === "hongkong"}>Hong Kong</Label>,
            children:
              <QRDetails image={QRHongKongPayMe}>
                <div><b>PayMe</b> for those from <b>Hong Kong</b></div>
              </QRDetails>,
            forceRender: true,
          },
        ]}
      />
    </BaseComponent>
  );
};


export default Registry;