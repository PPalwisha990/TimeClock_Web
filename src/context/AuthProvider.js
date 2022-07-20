import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children, value }) => {
  const [user, updateUser] = useState(value);

  const setUser = (obj) => {
    updateUser(obj);
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
