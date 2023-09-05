import { Image, Tabs, Typography } from "antd";
import React from "react";
import BaseComponent from "../BaseComponent";
import PaynowQR from "./paynow-qr.gif";
import styles from "./styles.module.css";

const {Text} = Typography;

const Registry = () =>
  (
    <BaseComponent
      id="registry"
      title="Registry"
    >
      <Text>
        Thank you for joining us on this special day. Your presence is more than a present to us.
        However, if you'd like to contribute to our family (cat) building efforts,
        you may donate to our
        {" "}
        <Text strong style={{color: "#4c638f"}}>Château des Chats</Text>
        {" "} fund
        (<Text italic>french for Castle of Cats</Text>).
      </Text>
      <Tabs
        centered
        items={[
          {
            key: "singapore",
            label: "Singapore",
            children: <SingaporeQRCode/>
          }
        ]}
      />
    </BaseComponent>
  );

const SingaporeQRCode = () => (
  <div className={styles.paynowQRHolder}>
    <Image
      style={{maxWidth: 300}}
      src={PaynowQR}
      alt="QR Code"
      preview={false}
    />
  </div>
);

export default Registry;