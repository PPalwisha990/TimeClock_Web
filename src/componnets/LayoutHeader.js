import { createUseStyles } from "react-jss";
import logo from "../images/kiosklogo.png";
import HeaderButton from "./HeaderButton";

const LayoutHeader = ({ onRefreshPress, onLogoutPress }) => {
  const classes = useStyle();
  return (
    <div className={classes.headerContainer}>
      <div className={classes.leftButton}>
        <img src={logo} className={classes.logoHeader} alt="logo" />
      </div>
      <div className={classes.rightButton}>
        <HeaderButton
          icon="redo"
          onPress={onRefreshPress}
          btnStyle={classes.btnStyle}
          size={"medium"}
          className={classes.btn}
        />
        <HeaderButton
          icon="sign-out"
          onPress={onLogoutPress}
          btnStyle={classes.btnStyle}
          size={"medium"}
        />
      </div>
    </div>
  );
};

const useStyle = createUseStyles({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  leftButton: {
    //right: 20,
  },
  logoHeader: {
    height: 42,
  },
  rightButton: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
  },
  btnStyle: {
    backgroundColor: "#4b94cf",
    borderColor: "#4b94cf",
  },
  btn: {
    marginRight: 5,
  },
});

export default LayoutHeader;
