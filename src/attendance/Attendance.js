import Header from "../componnets/Header";
import AttendanceHomeTab from "./tabs/AttendanceHomeTab";

const employee = {
  employeeName: "Palwisha Baloch",
  designation: "Mobile Developer",
  emailAddress: "palwisha@webhr.co",
  photo: "",
};

const Attendance = () => {
  const onBackPress = () => {
    //
  };

  return (
    <div>
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
export default Attendance;
