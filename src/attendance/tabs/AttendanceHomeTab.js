import React from "react";
import { createUseStyles } from "react-jss";
import Avatar from "../../componnets/Avatar";

const AttendanceHomeTab = ({ employee }) => {
  const styles = useStyle();
  return (
    <div className={styles.row}>
      <div>
        <Avatar
          size="large"
          name={employee.employeeName}
          photo={employee.photo}
        />
      </div>
      <div className={styles.userInfo}>
        <span className={styles.employeeName}>{employee.employeeName}</span>
        <span className={styles.designation}>
          {employee.emailAddress != ""
            ? employee.emailAddress
            : employee.employeeName}
        </span>
      </div>
    </div>
  );
};

const useStyle = createUseStyles({
  row: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 10,
    alignItems: "center",
    paddingTop: 10,
  },
  userInfo: {
    paddingLeft: 10,
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  employeeName: {
    fontSize: 25,
    color: "#697378",
    fontWeight: "bold",
  },
  designation: {
    fontSize: 16,
    color: "#697378",
  },
});

export default AttendanceHomeTab;
