import { Route, Switch } from "react-router-dom";
import Attendance from "../attendance/Attendance";
import ScheduleList from "../attendance/tabs/ScheduleList";
import Home from "../home";
import Login from "../login";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/home" component={Home} />
      <Route path="/attendance" component={Attendance} />
      <Route path="/scheduleList" component={ScheduleList} />
    </Switch>
  );
};

export default Routes;
