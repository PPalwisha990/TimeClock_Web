import { useEffect, useState } from "react";
import { MainHeader } from "../componnets/MainHeader";
import Screen from "../componnets/Screen";
import Toast from "../componnets/Toast";
import { getData, refreshTables, test } from "../db/DatabaseApi";
import EmployeesList from "./EmployeeList";
import TimeClock from "./TimeClock";

let employee = [
  {
    employeeId: 36,
    employeeName: "palwisha",
    userName: "palwisha",
    mobile: "090078601",
    office: "778963",
    email: "palwish@webhr.co",
    sId: 2,
    cId: 4,
    dId: 33,
    ddId: 34,
    reportsTo: 7,
    accessCode: 5,
    ios: "121",
    status: 0,
    android: "3323",
    photo: "adeujkh",
    reportsToRole: "0",
    wId: 19,
  },
];

const Home = () => {
  const [settings, setSettings] = useState(false);

  const createTable = async () => {
    let res = await test();
    let resp = await refreshTables(employee);
    console.log("res===", res);
    console.log("resp===", resp);
  };

  useEffect(() => {
    createTable();
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            //If granted then you can directly call your function here
          } else if (result.state === "prompt") {
            console.log(result.state);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      Toast.warning("Sorry Not available!");
    }
  }, []);

  return (
    <Screen
      content={
        <div>
          <MainHeader />
          {settings ? <EmployeesList /> : <TimeClock />}
        </div>
      }
    />
  );
};
export default Home;
