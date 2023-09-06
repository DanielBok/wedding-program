import { CaretDownOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Alert, Collapse } from "antd";
import React, { useState } from "react";
import styles from "./styles.module.css";


const EventDetail = () => (
  <div className={styles.eventDetailLayout}>
    <div style={{marginTop: 8, marginBottom: 14}} className={styles.eventDetailLayout}>
      <p className={styles.eventDetail}>Saturday</p>
      <p className={styles.eventDetail}>30 September 2023</p>
      <p className={styles.eventDetail}>3pm till late</p>
      <p style={{marginTop: 12}}/>
      <p className={styles.eventDetail}>Villa Latitude</p>
      <p className={styles.eventDetail}>Uluwatu, Bali</p>
    </div>
    <LocationMap/>
    <Alert
      className={styles.alert}
      showIcon
      description={(
        <div className={styles.alertMessage}>
          We start our ceremony around 4pm. However, please come in
          between <b>3pm to 4pm</b> so you can enjoy the games
          we've prepared for you before the ceremony!
        </div>
      )}
    />
  </div>
);

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.384730429034!2d115.18186437618937!3d-8.843725890561638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd25b6343123d25%3A0xbcc777a8bded2e6e!2sVilla%20Latitude%20Bali!5e0!3m2!1sen!2ssg!4v1693996162237!5m2!1sen!2ssg"
              className={styles.mapContainer}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"/>
          )
        }
      ]}
    />
  );

  function onCollapseChange(keys: string | string[]) {
    const key = Array.isArray(keys) ? keys[0] : keys;
    setVisible(key === "map");
  }
};


export default EventDetail;