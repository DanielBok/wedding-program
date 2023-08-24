import { Layout } from "antd";
import React from "react";
import styles from "./app.module.css";
import CenterDivider from "./components/CenterDivider";
import SequenceOfEvents from "./components/SequenceOfEvents";
import SongLyrics from "./components/SongLyrics";


const {Header, Footer, Content} = Layout;

function App() {
  return (
    <Layout className={styles.outerLayout}>
      <Layout className={styles.innerLayout}>
        <Header className={styles.header}>
          The Wedding of Daniel and Priscilla
        </Header>
        <CenterDivider/>
        <Content className={styles.content}>
          {[<SequenceOfEvents/>, <SongLyrics/>].map((Component, i) => (
            <div key={i}>
              {Component}
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
    </Layout>
  );
}

export default App;
