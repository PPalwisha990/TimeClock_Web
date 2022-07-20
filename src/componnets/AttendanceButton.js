import React from "react";
import AttendanceTypes from "./../attendance/AttendanceTypes";
import { Button } from "./Button";

const AttendanceButton = ({ text, color, onPress, visible, margin }) => {
  if (visible) {
    return (
      <Button
        title={text}
        onPressButton={onPress}
        backgroundColor={color}
        margin={margin}
      />
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
      margin={5}
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
      margin={5}
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
      margin={3}
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
      margin={3}
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
      margin={3}
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
      margin={3}
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
      margin={5}
    />
  );
};
