import { CalendarTwoTone, GiftTwoTone, InfoCircleTwoTone, MenuOutlined, SoundTwoTone } from "@ant-design/icons";
import { FloatButton, Layout } from "antd";
import React from "react";
import styles from "./app.module.css";
import CenterDivider from "./components/CenterDivider";
import Countdown from "./components/Countdown";
import Registry from "./components/Registry";
import SequenceOfEvents from "./components/SequenceOfEvents";
import SongLyrics from "./components/SongLyrics";
import TopLevelInfo from "./components/TopLevelInfo";


const {Header, Footer, Content} = Layout;


function App() {
  const contents = [
    {
      id: "event-details",
      desc: "Event Details",
      Component: TopLevelInfo,
      icon: <InfoCircleTwoTone/>
    },
    {
      id: "soe",
      desc: "Sequence of Events",
      Component: SequenceOfEvents,
      icon: <CalendarTwoTone/>
    },
    {
      id: "song-lyrics",
      desc: "Song Lyrics",
      Component: SongLyrics,
      icon: <SoundTwoTone/>
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
          <Countdown targetTime={"2023-09-30 15:00:00+0800"}/>
          <CenterDivider/>
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
