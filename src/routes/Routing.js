import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "../context/AuthProvider";
import { getUser } from "../helpers/LocalStorageHelper";
import Routes from "./Routes";

const Routing = () => {
  const [user, setUserState] = useState(true);

  const initialize = async () => {
    let user = await getUser();
    setUserState(user);
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <Router>
      <AuthProvider value={user}>
        <Routes />
      </AuthProvider>
    </Router>
  );
};

export default Routing;
