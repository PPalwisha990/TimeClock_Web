import { Empty, List } from "antd";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import { SearchInput } from "../componnets/TextInput";
import { EmployeesListItem } from "./EmployeeListItem";

const EmployeesList = ({ onEmployeeSelect }) => {
  const [employees, setEmployees] = useState([
    {
      EmployeeName: "Palwisha Baloch",
      Designation: "Mobile Developer",
      EmailAddress: "palwisha@webhr.co",
      Photo: "",
    },
    {
      EmployeeName: "Palwisha Baloch",
      Designation: "Mobile Developer",
      EmailAddress: "palwisha@webhr.co",
      Photo: "",
    },
    {
      EmployeeName: "Palwisha Baloch",
      Designation: "Mobile Developer",
      EmailAddress: "palwisha@webhr.co",
      Photo: "",
    },
    {
      EmployeeName: "Palwisha Baloch",
      Designation: "Mobile Developer",
      EmailAddress: "palwisha@webhr.co",
      Photo: "",
    },
    {
      EmployeeName: "Palwisha Baloch",
      Designation: "Mobile Developer",
      EmailAddress: "palwisha@webhr.co",
      Photo: "",
    },
    {
      EmployeeName: "Palwisha Baloch",
      Designation: "Mobile Developer",
      EmailAddress: "palwisha@webhr.co",
      Photo: "",
    },
  ]);
  const [allEmployees, setAllEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(false);

  const styles = useStyle();

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <SearchInput placeholder="Search Employee" />
      </div>

      {empty ? (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={"No Employee! Could not find any employees"}
          imageStyle={{ height: 200 }}
        />
      ) : (
        <List
          dataSource={employees}
          style={{ overflowY: "scroll", overflow: "auto", height: 450 }}
          renderItem={(item) => <EmployeesListItem employee={item} />}
        />
      )}
    </div>
  );
};
const useStyle = createUseStyles({
  searchContainer: {
    padding: 20,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
});

export default EmployeesList;
