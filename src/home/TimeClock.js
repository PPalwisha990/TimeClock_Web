import { useState } from "react";
import "../componnets/ComponentStyles.css";
import NumPad from "../componnets/NumPad";
const TimeClock = ({ onSubmit, onAccessCodeChange, clearAccessCode }) => {
  const [accessCode, setAccessCode] = useState("");
  return (
    <div className="timeclock-main">
      <div className="numpaid-container">
        <NumPad
          onSubmit={onSubmit}
          accessCode={accessCode}
          onAccessCodeChange={onAccessCodeChange}
          onClear={clearAccessCode}
        />
      </div>
    </div>
  );
};

export default TimeClock;
