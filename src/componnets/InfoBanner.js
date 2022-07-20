import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { createUseStyles } from "react-jss";

const InfoBanner = ({ text }) => {
  const styles = useStyle();
  return (
    <div className={styles.infoContainer}>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon
          icon={["fal", "info-circle"]}
          size={"1x"}
          color="#ff9e38"
        />
      </div>
      <span className={styles.infoText}>{text}</span>
    </div>
  );
};

const useStyle = createUseStyles({
  infoContainer: {
    border: "solid 1px #FFEBA3",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#FFFBED",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  infoText: {
    fontSize: 18,
    color: "#ff9e38",
  },
  iconContainer: {
    paddingRight: 20,
  },
});

export default InfoBanner;
