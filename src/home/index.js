import { useState } from "react";
import { MainHeader } from "../componnets/MainHeader";
import Screen from "../componnets/Screen";
import EmployeesList from "./EmployeeList";
import TimeClock from "./TimeClock";

const Home = () => {
  const [settings, setSettings] = useState(true);

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
