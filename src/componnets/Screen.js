import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import SchedulerTab from "../attendance/tabs/SchedulerTab";
import "./Screen.js";
const { Sider, Content } = Layout;

const Screen = ({ content }) => {
  const [collapsed] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");
  const styles = useStyle();

  const componentsSwtich = (key) => {
    switch (key) {
      case "1":
        return content;
      case "2":
        return <SchedulerTab />;

      default:
        break;
    }
  };

  return (
    <Layout className={styles.layout}>
      <Sider
        trigger={null}
        //collapsible
        collapsed={collapsed}
        className={styles.slider}
      >
        <div className={styles.logo}>
          <FontAwesomeIcon icon={["fal", "bars"]} size={"2x"} color="#778392" />
        </div>
        <Menu
          theme="light"
          mode="inline"
          className={styles.menu}
          selectedKeys={selectedMenuItem}
          onClick={(e) => setSelectedMenuItem(e.key)}
        >
          <Menu.Item
            key="1"
            icon={
              <FontAwesomeIcon
                icon={["fal", "home"]}
                size={"2x"}
                color="#778392"
              />
            }
          >
            <Link to={"/home"}>Home</Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={
              <FontAwesomeIcon
                icon={["fal", "calendar-alt"]}
                size={"2x"}
                color="#778392"
              />
            }
          >
            Schedules
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content className={styles.container}>
          {componentsSwtich(selectedMenuItem)}
        </Content>
      </Layout>
    </Layout>
  );
};
const useStyle = createUseStyles({
  logo: {
    margin: 20,
    paddingLeft: 10,
  },
  layout: { height: "100%" },
  slider: {
    backgroundColor: "#fff",
    border: "1px solid #EEEEEE",
  },
  menu: {
    marginTop: 30,
  },
  container: {
    backgroundColor: "#fff",
  },
});

export default Screen;
