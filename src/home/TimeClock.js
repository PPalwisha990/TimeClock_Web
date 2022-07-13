import React, { useState } from "react";
import AnalogClock from "./AnalogClock";
import NumPad from "../componnets/NumPad";
import { useHistory } from "react-router";
import { Row, Col } from "react-bootstrap";
import { createUseStyles } from "react-jss";

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
        <Col
          className="d-flex justify-content-center align-items-center
          "
          lg={6}
        >
          <NumPad
            onSubmit={onSubmit}
            accessCode={accessCode}
            onAccessCodeChange={onAccessCodeChange}
            onClear={clearAccessCode}
          />
        </Col>
        <Col
          className="d-flex justify-content-center align-items-center"
          lg={6}
        >
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
  "@media screen and (max-width: 992px)": {
    main: {
      marginTop: 25,
    },
  },
});

export default TimeClock;
