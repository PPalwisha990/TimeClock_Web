import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router";
import NumPad from "../componnets/NumPad";
import AnalogClock from "./AnalogClock";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const TimeClock = ({ onAccessCodeChange, clearAccessCode }) => {
  const classes = useStyle();
  const [accessCode, setAccessCode] = useState("");

  const history = useHistory();

  const onSubmit = () => {
    console.log("attendance");
    history.push("/attendance");
  };

  return (
    <div className={classes.main}>
      <div
        style={{
          width: "50%",
          height: "100%",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <NumPad
          onSubmit={onSubmit}
          accessCode={accessCode}
          onAccessCodeChange={onAccessCodeChange}
          onClear={clearAccessCode}
        />
      </div>
      <div
        style={{
          width: "50%",
          height: "100%",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          marginTop: 60,
        }}
      >
        <AnalogClock />
      </div>
    </div>
  );
};

const useStyle = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    // alignItems: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TimeClock;
