import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";
import Header from "../componnets/Header";
import AttendanceHomeTab from "./tabs/AttendanceHomeTab";
const employee = {
  employeeName: "Palwisha Baloch",
  designation: "Mobile Developer",
  emailAddress: "palwisha@webhr.co",
  photo: "",
};

const Attendance = () => {
  const styles = useStyle();
  const history = useHistory();
  const onBackPress = () => {
    history.goBack();
  };

  return (
    <div className={styles.container}>
      <Header title="Attendance" onBackPress={onBackPress} showBack={true} />
      <AttendanceHomeTab
        employee={employee}
        accessCode={"123"}
        // location={location}
        // onSuccess={onSuccessCallback}
      />
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    height: "100%",
  },
});
export default Attendance;
