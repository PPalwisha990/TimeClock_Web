import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router";
import NumPad from "../componnets/NumPad";
import AnalogClock from "./AnalogClock";
import { Row, Col } from "react-bootstrap";

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
      <Row>
        <Col className="d-flex justify-content-center" lg={6}>
          <NumPad
            onSubmit={onSubmit}
            accessCode={accessCode}
            onAccessCodeChange={onAccessCodeChange}
            onClear={clearAccessCode}
          />
        </Col>
        <Col className="d-flex justify-content-center" lg={6}>
          <AnalogClock />
        </Col>
      </Row>
    </div>
  );
};

const useStyle = createUseStyles({
  main: {
    height: "100%",
    marginTop: 150,
  },
});

export default TimeClock;
