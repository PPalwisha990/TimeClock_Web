import { Route, Switch } from "react-router-dom";
import Attendance from "../attendance/Attendance";
import Home from "../home";
import Login from "../login";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/home" component={Home} />
      <Route path="/attendance" component={Attendance} />
    </Switch>
  );
};

export default Routes;
