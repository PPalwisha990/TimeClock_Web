import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { SidebarData } from "../componnets/SideMenu";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const styles = useStyle();

  return (
    <>
      <div className={styles.navbar}>
        <Link to="#" className={styles.menu_bars}>
          <FontAwesomeIcon
            icon={["fal", "menu"]}
            size={"1x"}
            color="#3F3D56"
            onClick={showSidebar}
          />
        </Link>
      </div>
      <nav className={styles.nav_menu}>
        <ul className={styles.nav_menu_items} onClick={showSidebar}>
          <li className={styles.navbar_toggle}>
            <Link
              to="#"
              className={styles.menu_bars}
              style={{ textDecoration: "none" }}
            >
              <FontAwesomeIcon
                icon={["fal", "bars"]}
                size={"1x"}
                color="#3F3D56"
              />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <FontAwesomeIcon
                    icon={["fal", item.icon]}
                    size={"1x"}
                    color="#3F3D56"
                  />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

const useStyle = createUseStyles({
  navbar: {
    backgroundColor: "rgb(183, 247, 181)",
    height: 80,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  //   menu_bars: {
  //     marginLeft: 2,
  //     fontSize: 2,
  //     background: "none",
  //   },

  //   nav_menu: {
  //     backgroundColor: " rgb(183, 247, 181)",
  //     width: 250,
  //     height: 100,
  //     display: "flex",
  //     justifyContent: "center",
  //     position: "fixed",
  //     top: 0,
  //     left: "-100%",
  //     transition: 850,
  //     "&:active": {
  //       left: 0,
  //       transition: 350,
  //     },
  //   },

  //   nav_text: {
  //     display: "flex",
  //     justifyContent: "flex-start",
  //     alignItems: "center",
  //     padding: "8px 0px 8px 16px",
  //     listStyle: "none",
  //     height: 60,
  //     "& a": {
  //       textDecoration: "none",
  //       color: "black",
  //       fontSize: 18,
  //       width: "95%",
  //       height: "100%",
  //       display: "flex",
  //       alignItems: "center",
  //       padding: "0 16px",
  //       borderRadius: 4,
  //     },
  //     "&:hover": {
  //       backgroundColor: "#ffffff",
  //     },
  //   },

  //   nav_menu_items: {
  //     width: "100%",
  //   },

  //   navbar_toggle: {
  //     backgroundColor: "rgb(183, 247, 181)",
  //     width: "100%",
  //     height: 80,
  //     display: "flex",
  //     justifyContent: "flex-start",
  //     alignItems: "center",
  //     "& span": {
  //       marginLeft: 16,
  //     },
  //   },
});

export default Navbar;
