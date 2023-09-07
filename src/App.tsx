import {
  CalendarTwoTone,
  GiftTwoTone,
  InfoCircleTwoTone,
  MenuOutlined,
  SkinTwoTone,
  SoundTwoTone,
  TrophyTwoTone
} from "@ant-design/icons";
import { FloatButton, Layout } from "antd";
import React from "react";
import styles from "./app.module.css";
import CenterDivider from "./components/CenterDivider";
import Countdown from "./components/Countdown";
import DressCode from "./components/DressCode";
import EventDetail from "./components/EventDetail";
import GameRules from "./components/GameRules";
import OrderOfEvents from "./components/OrderOfEvents";
import Registry from "./components/Registry";
import SongLyrics from "./components/SongLyrics";


const {Header, Footer, Content} = Layout;


function App() {
  const contents = [
    {
      id: "event-details",
      desc: "Event Details",
      Component: EventDetail,
      icon: <InfoCircleTwoTone/>
    },
    {
      id: "oof",
      desc: "Order of Events",
      Component: OrderOfEvents,
      icon: <CalendarTwoTone/>
    },
    {
      id: "dress-code",
      desc: "Dress Code",
      Component: DressCode,
      icon: <SkinTwoTone/>
    },
    {
      id: "song-lyrics",
      desc: "Song Lyrics",
      Component: SongLyrics,
      icon: <SoundTwoTone/>
    },
    {
      id: "game-rules",
      desc: "Game Rules",
      Component: GameRules,
      icon: <TrophyTwoTone/>
    },
    {
      id: "registry",
      desc: "Registry",
      Component: Registry,
      icon: <GiftTwoTone/>
    },
  ];

  return (
    <Layout className={styles.outerLayout}>
      <Layout className={styles.innerLayout}>
        <Header className={styles.header}>
          The Wedding of Daniel and Priscilla
        </Header>
        <CenterDivider/>
        <Content className={styles.content}>
          <Countdown
            targetTime={"2023-09-30 15:00:00+0800"}
            addDivider
          />
          {contents
            .map(({id, Component}) => (
              <div key={id}>
                {<Component id={id}/>}
                <CenterDivider/>
              </div>
            ))}
        </Content>
        <Footer className={styles.footer}>
          <div className={styles.thankYou}>Thank you</div>
          <div>We would like to thank all our friends and families who have travelled
            great
            distances to celebrate our wedding with us!
          </div>
        </Footer>
      </Layout>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{right: 24}}
        icon={<MenuOutlined/>}
      >
        {contents.map(({id, icon, desc}) => (
          <FloatButton
            tooltip={desc}
            key={id}
            icon={icon}
            onClick={() => {
              (document.getElementById(id) as HTMLDivElement).scrollIntoView();
            }}
          />
        ))}
      </FloatButton.Group>
    </Layout>
  );
}

export default App;
