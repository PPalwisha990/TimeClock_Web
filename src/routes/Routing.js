import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "../context/AuthProvider";
import Routes from "./Routes";

const Routing = () => {
  const [user, setUserState] = useState(true);

  const initilize = () => {
    let user = true;
    const userObject = {
      username: "palwisha",
      email: "palwisha@webhr.co",
    };
    if (user) {
      setUserState(userObject);
    }
  };

  useEffect(() => {
    initilize();
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
