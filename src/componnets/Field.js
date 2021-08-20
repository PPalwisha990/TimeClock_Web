import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  name: {
    color: "#778392",
    fontSize: 14,
    paddingBottom: 10,
  },
  wrapper: {
    paddingBottom: 10,
    paddingTop: 10,
    width: "100%",
  },
  details: {
    display: "flex",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    border: "solid 1px #E3E3E3",
    marginLeft: 20,
    marginRight: 20,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  iconContainer: {
    padding: 10,
  },
});

const Field = ({ children, name, icon, iconColor }) => {
  const styles = useStyle();
  return (
    <div className={styles.row}>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={["fal", icon]} size={"1x"} color={iconColor} />
      </div>
      <div className={styles.details}>
        <div className={styles.container}>
          <span className={styles.name}>{name}</span>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Field;
