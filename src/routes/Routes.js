import Home from "../home";
import Login from "../login";
import useAuth from "../hooks/useAuth";
import Attendance from "../attendance/Attendance";
import ScheduleList from "../attendance/tabs/ScheduleList";
import { Redirect, Route, Switch } from "react-router-dom";

const Routes = () => {
  const { user } = useAuth();
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => {
          return user ? <Redirect to="/home" /> : <Redirect to="/login" />;
        }}
      />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/attendance" component={Attendance} />
      <Route path="/scheduleList" component={ScheduleList} />
    </Switch>
  );
};

export default Routes;
