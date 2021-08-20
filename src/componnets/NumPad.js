import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createUseStyles } from "react-jss";
import { colors } from "../theme/Theme";
import { TextInput } from "./TextInput";

const useStyle = createUseStyles({
  inputRow: {
    display: "flex",
    flexDirection: "row",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
  },
  buttonContainer: {
    margiLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    border: "solid 1px #D3D3D3",
    display: "flex",
    "&:hover": {
      backgroundColor: "rgba(238, 238, 238, 0.8)",
      opacity: 0.2,
      cursor: "pointer",
    },
  },
  buttonText: {
    color: "#3E3E3E",
    fontSize: 22,
  },
  inputContainer: {
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
    marginBottom: 20,
    width: 310,
  },
  inputText: {
    color: "#A9A9A9",
    fontSize: 20,
  },
  timeclockMain: {
    display: "flex",
    flex: 1,
  },
  inputStyle: {
    color: "#3f3d56",
    backgroundColor: "#F7F7FA",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderColor: "#EEEEEE",
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      outline: "none",
    },
  },
});

const NumPadInput = ({ text }) => {
  const classes = useStyle();
  return (
    <div className={classes.inputContainer}>
      <TextInput
        placeholder={"Enter Access Code"}
        style={classes.inputStyle}
        autoFocus={true}
        //onChange={}
      />
    </div>
  );
};

const NumberButton = ({ number, onPress }) => {
  const classes = useStyle();
  return (
    <div className={classes.buttonContainer} onClick={() => onPress}>
      <div className={classes.button}>
        <span className={classes.buttonText}>{number}</span>
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
      onClick={onPress}
      disabled={disabled}
    >
      <div
        className={classes.button}
        style={{
          backgroundColor,
          "&:hover": {
            opacity: 0.2,
          },
        }}
      >
        <FontAwesomeIcon icon={["fal", icon]} color={iconColor} size="lg" />
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

      <div className={classes.inputRow}>
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
