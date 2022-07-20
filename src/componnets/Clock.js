import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import clockBack from "../images/clockBack.png";

const Clock = ({
  clockSize,
  clockBorderWidth,
  hourHandOffset,
  clockCentreSize,
  clockCentreColor,
  hourHandColor,
  hourHandWidth,
  hourHandLength,
  hourHandCurved,
  minuteHandColor,
  minuteHandWidth,
  minuteHandLength,
  minuteHandCurved,
  secondHandLength,
  secondHandWidth,
  secondHandCurved,
  minuteHandOffset,
  secondHandOffset,
}) => {
  let d = new Date();

  const [hour, setHour] = useState(
    ((d.getHours() % 12) / 12) * 360 +
      90 +
      (d.getMinutes() * 6 + (d.getSeconds() * 6) / 60) / 12
  );
  const [min, setMin] = useState(
    d.getMinutes() * 6 + (d.getSeconds() * 6) / 60
  );
  const [sec, setSec] = useState(d.getSeconds() * 6);

  const useStyle = createUseStyles({
    clockFrame: {
      width: clockSize,
      height: clockSize,
      position: "relative",
      borderColor: "black",

      borderWidth: clockBorderWidth,
      borderRadius: clockSize / 2,
    },

    clockHolder: {
      width: clockSize,
      height: clockSize,
      position: "absolute",
      right: -clockBorderWidth,
      bottom: -clockBorderWidth,
    },

    clockFace: {
      width: clockCentreSize,
      height: clockCentreSize,
      backgroundColor: clockCentreColor,
      borderRadius: clockCentreSize / 2,
      top: (clockSize - clockCentreSize) / 2,
      left: (clockSize - clockCentreSize) / 2,
    },

    hourHand: {
      width: 0,
      height: 0,
      position: "absolute",
      backgroundColor: hourHandColor,
      top: clockSize / 2,
      left: clockSize / 2,
      marginVertical: -hourHandWidth,
      marginLeft: -hourHandLength / 2,
      paddingVertical: hourHandWidth,
      paddingLeft: hourHandLength,
      borderTopLeftRadius: hourHandCurved ? hourHandWidth : 0,
      borderBottomLeftRadius: hourHandCurved ? hourHandWidth : 0,
    },
    minuteHand: {
      width: 0,
      height: 0,
      position: "absolute",
      backgroundColor: minuteHandColor,
      top: clockSize / 2,
      left: clockSize / 2,
      marginTop: -(minuteHandLength / 2),
      marginHorizontal: -minuteHandWidth,
      paddingTop: minuteHandLength,
      paddingHorizontal: minuteHandWidth,
      borderTopLeftRadius: minuteHandCurved ? minuteHandWidth : 0,
      borderTopRightRadius: minuteHandCurved ? minuteHandWidth : 0,
    },

    secondHand: {
      width: 0,
      height: 0,
      position: "absolute",
      backgroundColor: "#949699",
      top: clockSize / 2,
      left: clockSize / 2,
      marginTop: -(secondHandLength / 2),
      marginHorizontal: -secondHandWidth,
      paddingTop: secondHandLength,
      paddingHorizontal: secondHandWidth,
      borderTopLeftRadius: secondHandCurved ? secondHandWidth : 0,
      borderTopRightRadius: secondHandCurved ? secondHandWidth : 0,
    },
    clockBack: {
      width: clockSize - clockBorderWidth * 2,
      height: clockSize - clockBorderWidth * 2,
    },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      let d = new Date();
      setSec(d.getSeconds() * 6);
      setMin(d.getMinutes() * 6 + (d.getSeconds() * 6) / 60);
      setHour(
        ((d.getHours() % 12) / 12) * 360 +
          90 +
          (d.getMinutes() * 6 + (d.getSeconds() * 6) / 60) / 12
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [d]);

  const classes = useStyle();

  return (
    <div className={classes.clockFrame}>
      <img src={clockBack} className={classes.clockBack} alt="clock" />
      {/* <div className={classes.clockHolder}>
        <div
          style={[
            classes.hourHand,
            {
              transform: [
                { rotate: hour + "deg" },
                {
                  translateX: -(hourHandOffset + hourHandLength / 2),
                },
              ],
            },
          ]}
        />

        <div
          style={[
            classes.minuteHand,
            {
              transform: [
                { rotate: min + "deg" },
                {
                  translateY: -(minuteHandOffset + minuteHandLength / 2),
                },
              ],
            },
          ]}
        />

        <div
          style={[
            classes.secondHand,
            {
              transform: [
                { rotate: sec + "deg" },
                {
                  translateY: -(secondHandOffset + secondHandLength / 2),
                },
              ],
            },
          ]}
        />

        <div className={classes.clockFace} />
      </div> */}
    </div>
  );
};

Clock.defaultProps = {
  backgroundImage: `url(${clockBack})`,
  clockSize: 180,
  clockBorderWidth: 0,
  clockCentreSize: 15,
  clockCentreColor: "#419FEC",
  hourHandColor: "#949699",
  hourHandCurved: true,
  hourHandLength: 60,
  hourHandWidth: 3.5,
  hourHandOffset: 0,
  minuteHandColor: "#949699",
  minuteHandCurved: true,
  minuteHandLength: 80,
  minuteHandWidth: 3,
  minuteHandOffset: 0,
  secondHandColor: "#949699",
  secondHandCurved: false,
  secondHandLength: 80,
  secondHandWidth: 1.5,
  secondHandOffset: 0,
};

export default Clock;
