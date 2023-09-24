import type { CollapseProps } from "antd";
import { Collapse, Timeline } from "antd";
import dayjs from "dayjs";
import Gradient from "javascript-color-gradient";
import React, { useEffect, useMemo, useState } from "react";
import BaseComponent from "../BaseComponent";
import styles from "../EventDetail/styles.module.css";
import EventDesc from "./EventDesc";
import Label from "./Label";

type Props = { id: string }

const OrderOfEvents: React.FC<Props> = ({id}) => {
  const eventDates: {
    [key: string]: {
      label: string
      title: string
      location: string
      dressCode?: string
      moreInfo?: React.ReactNode
    }[]
  } = useMemo(() => ({
    "29 Sep 2023": [
      {
        label: "03:00 PM",
        title: "Pre-wedding Beach Party",
        location: "White Rock Beach Club",
        dressCode: "Beach wear",
        moreInfo: (
          <div>
            <p>We will have shuttles departing White Rock Beach Club to the Welcome Dinner at Cuca</p>
            <iframe
              title="Cuca Restaurant"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.3383718226805!2d115.15452887621527!3d-8.848055090619841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd25b9674a61533%3A0x1a294fc8fe922212!2sWhite%20Rock%20Beach%20Club!5e0!3m2!1sen!2ssg!4v1695572020983!5m2!1sen!2ssg"
              className={styles.mapContainer}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )
      },
      {
        label: "06:30 PM",
        title: "Welcome Dinner",
        location: "Cuca",
        dressCode: "Smart Casual",
        moreInfo: (
          <div>
            <iframe
              title="Cuca Restaurant"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.1419372129462!2d115.16716807621421!3d-8.77271408961194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24461a37ab5a7%3A0x834b2373d1645ad1!2sCuca%20Restaurant!5e0!3m2!1sen!2ssg!4v1695571954314!5m2!1sen!2ssg"
              className={styles.mapContainer}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )
      }
    ],
    "30 Sep 2023": [
      {
        label: "03:00 PM",
        title: "Wedding Games",
        location: "Villa Latitude",
      },
      {
        label: "04:00 PM",
        title: "Wedding Ceremony",
        location: "Poolside at Villa Latitude",
      },
      {
        label: "05:00 PM",
        title: "Cocktails",
        location: "Poolside at Villa Latitude",
      },
      {
        label: "06:30 PM",
        title: "Dinner Reception",
        location: "Lawn at Villa Latitude",
      },
      {
        label: "09:00 PM",
        title: "Afterparty and Karaoke",
        location: "Villa Latitude",
      },
    ],
    // "01 Oct 2023": [
    //   {
    //     label: "11:00 AM",
    //     title: "Sunday Brunch",
    //     location: "Villa Latitude",
    //     moreInfo: "Come by for some babi guling (whenever you wake up) and for a swim at the pool"
    //   }
    // ],
  }), []);

  const [activeKey, setActiveKey] = useState(Object.keys(eventDates)[0]);
  useEffect(() => {
    const today = dayjs(dayjs().format("YYYY-MM-DD"));  // unix timestamp
    for (const eventDate in eventDates) {
      if (today <= dayjs(eventDate)) {
        setActiveKey(eventDate);
        break;
      }
    }
  }, [eventDates]);

  const items: CollapseProps["items"] = Object.entries(eventDates)
    .filter(([_, timelineItems]) => timelineItems.length > 0)
    .map(([key, timelineItems]) => {
      const gradientArray = timelineItems.length === 1 ? ["#87d068"] : (
        new Gradient().setColorGradient("#108ee9", "#87d068")
          .setMidpoint(timelineItems.length)
          .getColors()
      );

      return (
        {
          key,
          showArrow: false,
          label: <Label label={key} selected={key === activeKey}/>,
          children: <Timeline
            mode="left"
            items={timelineItems.map(({label, ...evt}, i) => ({
                label,
                color: gradientArray[i],
                children: (
                  <EventDesc
                    title={evt.title}
                    location={evt.location}
                    dressCode={evt?.dressCode}
                    moreInfo={evt?.moreInfo}
                  />
                )
              }
            ))}
          />
        });
    });

  return (
    <BaseComponent
      id={id}
      title="Order of Events"
    >
      <Collapse
        accordion
        ghost
        activeKey={activeKey}
        onChange={(keys) => setActiveKey(Array.isArray(keys) ? keys[0] : keys)}
        items={items}
      />
    </BaseComponent>
  );
};


export default OrderOfEvents;