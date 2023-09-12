import type { CollapseProps } from "antd";
import { Collapse, Timeline } from "antd";
import dayjs from "dayjs";
import Gradient from "javascript-color-gradient";
import React, { useEffect, useMemo, useState } from "react";
import BaseComponent from "../BaseComponent";
import EventDesc from "./EventDesc";
import Label from "./Label";

type Props = { id: string }

const OrderOfEvents: React.FC<Props> = ({id}) => {
  const eventDates: {
    [key: string]: {
      label: string
      title: string
      location: string
      moreInfo?: string
    }[]
  } = useMemo(() => ({
    "29 Sep 2023": [
      {
        label: "03:00 PM",
        title: "Pre-wedding Beach Party",
        location: "White Rock Beach Club",
        moreInfo: "We will have shuttles departing White Rock Beach Club to the Welcome Dinner at Cuca",
      },
      {
        label: "06:30 PM",
        title: "Welcome Dinner",
        location: "Cuca",
        moreInfo: "The dress code is smart casual"
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
                children: <EventDesc title={evt.title} location={evt.location} moreInfo={evt?.moreInfo}/>
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