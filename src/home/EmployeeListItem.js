import { createUseStyles } from "react-jss";
import Avatar from "../componnets/Avatar";

export const EmployeesListItem = ({ employee }) => {
  const styles = useStyle();

  return (
    <div className={styles.row}>
      <Avatar
        size="small"
        name={employee.EmployeeName}
        photo={employee.Photo}
      />
      <div className={styles.infoContainer}>
        <span className={styles.name}>{employee.EmployeeName}</span>
        <span className={styles.designation}>{employee.Designation}</span>
      </div>
    </div>
  );
};
const useStyle = createUseStyles({
  row: {
    display: "flex",
    flexDirection: "row",
    margin: "0px 20px",
    padding: "5px 0px",
    border: "1px solid #ECECEC",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    alignItems: "center",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 10px",
  },
  name: {
    color: "#697378",
    fontSize: 20,
    fontWeight: "bold",
  },
  designation: {
    color: "#8E9DA5",
    fontSize: 16,
  },
});
