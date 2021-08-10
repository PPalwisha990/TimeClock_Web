import { Route, Switch } from "react-router-dom";
import Home from "../home";
import Login from "../login";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/" component={Home} />
      <Route path="/home" component={Home} />
    </Switch>
  );
};

export default Routes;
