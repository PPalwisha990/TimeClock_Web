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
    borderBottomColor: "#EEEEEE",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
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
        <text className={classes.title}>{title}</text>
      </div>
      <di className={classes.right}>
        {showRight ? (
          <HeaderButton icon="ellipsis-v" onPress={onRightPress} />
        ) : null}
      </di>
      <div className={classes.right} />
    </div>
  );
};

export default Header;
