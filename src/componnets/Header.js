import React from "react";
import { createUseStyles } from "react-jss";
import BackButton from "./BackButton";
import HeaderButton from "./HeaderButton";

const useStyle = createUseStyles({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
    color: "#3F3D56",
  },
  header: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    border: "solid 1px #EEEEEE",
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: 10,
    paddingBottom: 3,
  },
  right: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

const Header = ({ onBackPress, title, showBack, showRight, onRightPress }) => {
  const classes = useStyle();
  return (
    <div className={classes.header}>
      <div className={classes.left}>
        {showBack ? <BackButton onBackPress={onBackPress} /> : null}
      </div>
      <div className={classes.center}>
        <span className={classes.title}>{title}</span>
      </div>
      <div className={classes.right}>
        {showRight ? (
          <HeaderButton
            icon="ellipsis-v"
            onPress={onRightPress}
            size={"large"}
          />
        ) : null}
      </div>
      <div className={classes.right} />
    </div>
  );
};

export default Header;
