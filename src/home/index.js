import { useEffect, useState } from "react";
import { MainHeader } from "../componnets/MainHeader";
import Screen from "../componnets/Screen";
import EmployeesList from "./EmployeeList";
import TimeClock from "./TimeClock";

const Home = () => {
  const [settings, setSettings] = useState(false);

  useEffect(() => {
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
      alert("Sorry Not available!");
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
