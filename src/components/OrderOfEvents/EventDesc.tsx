import { CloseOutlined } from "@ant-design/icons";
import { Typography, Modal } from "antd";
import React from "react";
import styles from "./styles.module.css";


type Props = {
  title: string
  location: string,
  moreInfo?: React.ReactNode
}

const EventDesc: React.FC<Props> = ({title, location, moreInfo}) => {
  const [modal, contextHolder] = Modal.useModal();

  const hasMoreInfo = !!moreInfo;

  return (
    <>
      <div className={styles.eventDesc}>
        <div className={styles.title}>{title}</div>
        <div className={styles.location}>{location}</div>
        {hasMoreInfo &&
          <div>
            <Typography.Link onClick={showMoreInfo}>
              More
            </Typography.Link>
          </div>
        }
      </div>
      {hasMoreInfo && contextHolder}
    </>
  );

  function showMoreInfo() {
    modal.info({
      title: "For your info",
      footer: null,
      content: moreInfo,
      maskClosable: true,
      centered: true,
      closeIcon: <CloseOutlined/>
    });
  }
};

export default EventDesc;