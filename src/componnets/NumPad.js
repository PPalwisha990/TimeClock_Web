import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createUseStyles } from "react-jss";
import { colors } from "../theme/Theme";
import "./ComponentStyles.css";

const useStyle = createUseStyles({
  row: {
    display: "flex",
    flexDirection: "row",
  },
  buttonContainer: {
    margiLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#3E3E3E",
    fontSize: 22,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "#F7F7FA",
    borderColor: "#EEEEEE",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  inputText: {
    color: "#A9A9A9",
    fontSize: 20,
  },
  timeclockMain: {
    display: "flex",
    flex: 1,
  },
  numpaidContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const NumPadInput = ({ text }) => {
  const classes = useStyle();
  return (
    <div className={classes.inputContainer}>
      <text className={classes.inputText}>{text}</text>
    </div>
  );
};

const NumberButton = ({ number, onPress }) => {
  const classes = useStyle();
  return (
    <div className={classes.buttonContainer} onClick={() => onPress}>
      <div className={classes.button}>
        <text className={classes.buttonText}>{number}</text>
      </div>
    </div>
  );
};

const IconButton = ({
  icon,
  backgroundColor,
  iconColor,
  onPress,
  disabled,
}) => {
  const classes = useStyle();
  return (
    <div
      className={classes.buttonContainer}
      onPress={onPress}
      disabled={disabled}
    >
      <div
        className={classes.button}
        style={{
          opacity: disabled ? 0.5 : 1,
          backgroundColor,
        }}
      >
        <FontAwesomeIcon icon={["fal", icon]} size={24} color={iconColor} />
      </div>
    </div>
  );
};

const NumPad = ({ onSubmit, accessCode, onAccessCodeChange, onClear }) => {
  const onNumberPress = (text) => {
    let codeNow = accessCode + text;
    console.log("Access code is: ", codeNow);
    onAccessCodeChange(codeNow);
  };

  const onNext = () => {
    onSubmit(accessCode);
  };
  const classes = useStyle();

  return (
    <div>
      <div className={classes.row}>
        <NumberButton number="1" onPress={onNumberPress} />
        <NumberButton number="2" onPress={onNumberPress} />
        <NumberButton number="3" onPress={onNumberPress} />
      </div>
      <div className={classes.row}>
        <NumberButton number="4" onPress={onNumberPress} />
        <NumberButton number="5" onPress={onNumberPress} />
        <NumberButton number="6" onPress={onNumberPress} />
      </div>
      <div className={classes.row}>
        <NumberButton number="7" onPress={onNumberPress} />
        <NumberButton number="8" onPress={onNumberPress} />
        <NumberButton number="9" onPress={onNumberPress} />
      </div>
      <div className={classes.row}>
        <IconButton
          icon="times"
          backgroundColor="#E7E7E7"
          iconColor="#3E3E3E"
          onPress={onClear}
        />
        <NumberButton number="0" onPress={onNumberPress} />
        <IconButton
          disabled={accessCode === ""}
          icon="check"
          backgroundColor={colors.primary}
          iconColor="#FFFFFF"
          onPress={onNext}
        />
      </div>

      <div className={classes.row}>
        <NumPadInput
          text={
            accessCode != ""
              ? accessCode.replace(/./g, "*")
              : "Enter Access Code"
          }
        />
      </div>
    </div>
  );
};

export default NumPad;
