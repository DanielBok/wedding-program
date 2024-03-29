import { CaretDownOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import React, { useState } from "react";
import styles from "./styles.module.css";

const LocationMap = () => {
  // Villa Latitude Location
  const [visible, setVisible] = useState(false);

  return (
    <Collapse
      accordion
      size="small"
      className={styles.mapCollapse}
      onChange={onCollapseChange}
      items={[
        {
          key: "map",
          forceRender: true,
          showArrow: false,
          label: (
            <div className={styles.mapCollapseLabel}>
              {visible ? <CaretDownOutlined/> : <CaretRightOutlined/>}
              <span style={{marginLeft: 4}}>
                Show Map
              </span>
            </div>
          ),
          children: (
            <iframe
              title="Villa Latitude Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63085.95186774473!2d115.1404939849599!3d-8.798095139648765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd25b6343123d25%3A0xbcc777a8bded2e6e!2sVilla%20Latitude%20Bali!5e0!3m2!1sen!2ssg!4v1693997197332!5m2!1sen!2ssg"
              className={styles.mapContainer}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"/>
          ),
          className: styles.tabPanel,
        }
      ]}
    />
  );

  function onCollapseChange(keys: string | string[]) {
    const key = Array.isArray(keys) ? keys[0] : keys;
    setVisible(key === "map");
  }
};


export default LocationMap;