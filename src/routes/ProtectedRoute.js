import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthConsumer } from "../context/AuthConsumer";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ user }) => (
      <Route
        render={(props) =>
          user ? <Component {...props} /> : <Redirect to="/login" />
        }
        {...rest}
      />
    )}
  </AuthConsumer>
);

export default ProtectedRoute;
