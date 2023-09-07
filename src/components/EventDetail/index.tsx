import { Alert } from "antd";
import React from "react";
import { isBeforeWedding } from "../../utils";
import BaseComponent, { TextHolder } from "../BaseComponent";
import LocationMap from "./LocationMap";
import styles from "./styles.module.css";

type Props = {
  id: string
}

const EventDetail: React.FC<Props> = ({id}) => {
  const isWeddingDay = !isBeforeWedding();

  return (
    <BaseComponent
      id={id}
      title="Event Details"
    >
      <TextHolder>
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
          {isWeddingDay &&
            <Alert
              className={styles.alert}
              showIcon
              description={(
                <div className={styles.alertMessage}>
                  We start our ceremony around 4pm. However, please come in
                  between <b>3pm to 4pm</b> so you can enjoy the games and cocktails
                  we've prepared for you before the ceremony!
                </div>
              )}
            />
          }
        </div>
      </TextHolder>
    </BaseComponent>
  );
};

export default EventDetail;