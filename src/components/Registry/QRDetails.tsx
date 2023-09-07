import { Image } from "antd";
import React from "react";
import styles from "./styles.module.css";

type Props = {
  image: string
  children?: React.ReactNode
}


const QRDetails: React.FC<Props> = ({image, children}) => (
  <div className={styles.centerContent}>
    <Image
      className={styles.qrCode}
      src={image}
      alt="QR Code"
      preview={false}
    />
    {children}
  </div>
);

export default QRDetails;