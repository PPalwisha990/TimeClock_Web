import { createUseStyles } from "react-jss";
import logo from "../images/kiosklogo.png";
import BackButton from "./BackButton";
import HeaderButton from "./HeaderButton";

const useStyle = createUseStyles({
  headerContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    paddingLeft: "3%",
    paddingRight: "3%",
    height: 80,
    border: "solid 1px #EEEEEE",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  leftButton: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
  },
  logoHeader: {
    height: 55,
    marginTop: 10,
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
});

const LeftComponent = ({ showBack, onBackPress, onRefreshPress }) => {
  const classes = useStyle();
  return showBack ? (
    <BackButton onBackPress={onBackPress} />
  ) : (
    <HeaderButton
      icon="redo"
      onPress={onRefreshPress}
      btnStyle={classes.btnStyle}
      size={"large"}
    />
  );
};

export const MainHeader = ({
  showBack,
  onBackPress,
  onRefreshPress,
  onLogoutPress,
}) => {
  const classes = useStyle();
  return (
    <div className={classes.headerContainer}>
      <div className={classes.leftButton}>
        <LeftComponent
          showBack={showBack}
          onBackPress={onBackPress}
          onRefreshPress={onRefreshPress}
        />
      </div>
      <div>
        <img src={logo} className={classes.logoHeader} alt="logo" />
      </div>
      <div className={classes.rightButton}>
        <HeaderButton
          icon="sign-out"
          onPress={onLogoutPress}
          btnStyle={classes.btnStyle}
          size={"large"}
        />
      </div>
    </div>
  );
};
