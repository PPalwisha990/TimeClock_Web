import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    color: "#778392",
    fontSize: 14,
    paddingBottom: 10,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: 5,
  },
  row: {
    display: "flex",
    flexDirection: "column",
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
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={["fal", icon]} size={"1x"} color={iconColor} />
        </div>
        <div>
          <span className={styles.name}>{name}</span>
        </div>
      </div>

      <div className={styles.details}>{children}</div>
    </div>
  );
};

export default Field;
