import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1200,
  height: 520,
  facingMode: "user",
};

const WebCam = ({ onImageCaptured }) => {
  const webcamRef = React.useRef(null);
  const [seconds, setSeconds] = useState(5);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onImageCaptured(imageSrc);
  };

  const styles = useStyle();

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else {
        clearInterval(timer);
        capture();
      }
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  return (
    <div className={styles.container}>
      <div className={styles.layer}>
        <div className={styles.timerContainer}>
          <span className={styles.timerText}>{seconds}</span>
        </div>
      </div>

      <Webcam
        audio={false}
        height={"100%"}
        ref={webcamRef}
        screenshotFormat="image/png"
        width={"100%"}
        videoConstraints={videoConstraints}
      />
    </div>
  );
};
const useStyle = createUseStyles({
  timerContainer: {
    backgroundColor: "#2B81C7",
    padding: "10px 35px",
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
  timerText: {
    fontSize: 50,
    color: "#FFFFFF",
  },
  layer: {
    position: "absolute",
    left: 960,
    top: 730,
  },
});

export default WebCam;
