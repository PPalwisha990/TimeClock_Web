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
  const [seconds, setSeconds] = useState(3);

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      onImageCaptured(imageSrc);
    } else {
      console.log("Error");
    }
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
      <div className={styles.cameraConatiner}>
        <Webcam
          audio={false}
          height={520}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1200}
          videoConstraints={videoConstraints}
        />
      </div>
      <div className={styles.layer}>
        <div className={styles.timerContainer}>
          <span className={styles.timerText}>{seconds}</span>
        </div>
      </div>
    </div>
  );
};
const useStyle = createUseStyles({
  container: {
    display: "flex",
    height: "100%",
  },

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
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default WebCam;
