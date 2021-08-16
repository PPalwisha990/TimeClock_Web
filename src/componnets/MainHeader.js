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
    paddingLeft: "1%",
    paddingRight: "1%",
    height: 80,
  },
  leftButton: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
  },
  logoHeader: {
    height: 60,
    paddingTop: "5%",
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
        />
      </div>
    </div>
  );
};
