import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

const ClockNew = () => {
  const [time, setTime] = useState(new Date());
  const styles = useStyle();

  useEffect(() => {
    let timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={styles.clock}>
      <div
        className={styles.hourHand}
        style={{
          transform: `rotateZ(${time.getHours() * 30}deg)`,
        }}
      />
      <div
        className={styles.min_hand}
        style={{
          transform: `rotateZ(${time.getMinutes() * 6}deg)`,
        }}
      />
      <div
        className={styles.sec_hand}
        style={{
          transform: `rotateZ(${time.getSeconds() * 6}deg)`,
        }}
      />
      <span className={styles.twelve}>12</span>
      <span className={styles.one}>1</span>
      <span className={styles.two}>2</span>
      <span className={styles.three}>3</span>
      <span className={styles.four}>4</span>
      <span className={styles.five}>5</span>
      <span className={styles.six}>6</span>
      <span className={styles.seven}>7</span>
      <span className={styles.eight}>8</span>
      <span className={styles.nine}>9</span>
      <span className={styles.ten}>10</span>
      <span className={styles.eleven}>11</span>
    </div>
  );
};

const useStyle = createUseStyles({
  clock: {
    width: 250,
    height: 250,
    borderRadius: "50%",
    position: "relative",
    top: "50%",
    left: "10%",
    boxShadow: [[0, 2, 7, "rgba(0,0,0, 0.2)"]],
    fontSize: 20,
    color: "#444",
    textAlign: "center",

    "& span": {
      position: "absolute",
      fontWeight: "500",
    },

    "&:after": {
      background: "#aaa",
      content: '""',
      width: 12,
      height: 12,
      borderRadius: "50%",
      position: "absolute",
      zIndex: 2,
      top: "51%",
      left: "48%",
      //transform: "translate(-50%, -50%)",
      border: "2px solid #fff",
    },
  },

  hourHand: {
    position: "absolute",
    width: 6,
    height: 60,
    background: "#444",
    top: "30%",
    left: "49%",
    transformOrigin: "bottom",
  },

  min_hand: {
    position: "absolute",
    width: 4,
    height: 80,
    background: "#444",
    top: "22.5%",
    left: "49%",
    transformOrigin: "bottom",
  },

  sec_hand: {
    position: "absolute",
    width: 2,
    height: 100,
    background: "red",
    top: "13%",
    left: "50%",
    transformOrigin: "bottom",
  },

  twelve: {
    top: 10,
    left: "46%",
  },

  one: {
    top: "10%",
    right: "26%",
  },

  eleven: {
    top: "10%",
    left: "26%",
  },

  two: {
    top: "25%",
    right: "10%",
  },

  three: {
    right: 10,
    top: "46%",
  },

  four: {
    right: 30,
    top: "67%",
  },

  five: {
    right: 65,
    top: "80%",
  },

  six: {
    bottom: 10,
    left: "50%",
  },

  seven: {
    left: 70,
    top: "82%",
  },

  eight: {
    left: 30,
    top: "67%",
  },

  nine: {
    left: 10,
    top: "46%",
  },

  ten: {
    top: "25%",
    left: "10%",
  },
});

export default ClockNew;
