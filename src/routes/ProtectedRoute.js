import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      exact
      path="/"
      render={(props) => {
        return user ? <Redirect to="/home" /> : <Redirect to="/login" />;
      }}
      {...rest}
    />
  );
};

export default ProtectedRoute;
