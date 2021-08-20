import React from "react";
import { createUseStyles } from "react-jss";
import AttendanceTypes from "./../attendance/AttendanceTypes";
import { Button } from "./Button";

const styles = createUseStyles({
  touchable: {
    flex: 1,
    margin: 5,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});

const AttendanceButton = ({ text, color, onPress, visible }) => {
  if (visible) {
    return (
      <div className={styles.touchable}>
        {/* <div className={styles.container} style={{backgroundColor: color}}>
          <span className={styles.buttonText}>
            {text}
          </span>
        </div> */}
        <Button title={text} onPressButton={onPress} backgroundColor={color} />
      </div>
    );
  }

  return null;
};

export const SignInButton = ({ onPress, visible }) => {
  const buttonPressed = () => {
    onPress(AttendanceTypes.SIGN_IN);
  };
  return (
    <AttendanceButton
      text="Sign in"
      color="#2B81C7"
      onPress={buttonPressed}
      visible={visible}
    />
  );
};

export const LunchOutButton = ({ onPress, visible }) => {
  const buttonPressed = () => {
    onPress(AttendanceTypes.LUNCH_BREAK_OUT);
  };
  return (
    <AttendanceButton
      text="Out For Lunch"
      color="#0BD07C"
      onPress={buttonPressed}
      visible={visible}
    />
  );
};

export const LunchInButton = ({ onPress, visible }) => {
  const buttonPressed = () => {
    onPress(AttendanceTypes.LUNCH_BREAK_IN);
  };
  return (
    <AttendanceButton
      text="Back from Lunch"
      color="#56CCF2"
      onPress={buttonPressed}
      visible={visible}
    />
  );
};

export const SignOutButton = ({ onPress, visible }) => {
  const buttonPressed = () => {
    onPress(AttendanceTypes.SIGN_OUT);
  };
  return (
    <AttendanceButton
      text="Sign Out"
      color="#EB5757"
      onPress={buttonPressed}
      visible={visible}
    />
  );
};

export const AdditionalOutButton = ({ onPress, visible }) => {
  const buttonPressed = () => {
    onPress(AttendanceTypes.ADDITIONAL_BREAK_OUT);
  };
  return (
    <AttendanceButton
      text="Out for Break"
      color="#56CCF2"
      onPress={buttonPressed}
      visible={visible}
    />
  );
};

export const AdditionalInButton = ({ onPress, visible }) => {
  const buttonPressed = () => {
    onPress(AttendanceTypes.ADDITIONAL_BREAK_IN);
  };
  return (
    <AttendanceButton
      text="Back from Break"
      color="#56CCF2"
      onPress={buttonPressed}
      visible={visible}
    />
  );
};

export const ExtraInButton = ({ onPress, visible }) => {
  const buttonPressed = () => {
    onPress(AttendanceTypes.EXTRA_BREAK_IN);
  };
  return (
    <AttendanceButton
      text="Back from Extra Break"
      color="#56CCF2"
      onPress={buttonPressed}
      visible={visible}
    />
  );
};

export const ExtraOutButton = ({ onPress, visible }) => {
  const buttonPressed = () => {
    onPress(AttendanceTypes.EXTRA_BREAK_OUT);
  };
  return (
    <AttendanceButton
      text="Out for Extra Break"
      color="#56CCF2"
      onPress={buttonPressed}
      visible={visible}
    />
  );
};
