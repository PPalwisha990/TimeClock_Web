import { useState } from "react";
import { useHistory } from "react-router";
import { Button } from "../componnets/Button";
import { PasswordInput, TextInput } from "../componnets/TextInput";
import kiosklogo from "../images/kiosklogo.png";
import logo from "../images/logo.png";
import "./Loginstyle.css";

const Login = () => {
  let history = useHistory();
  const [organizationCode, setOrganizationCode] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onPress = () => {
    setLoading(true);
    if (showLogin) {
      setTimeout(() => {
        setLoading(false);
        history.push("/home");
      }, 2000);
    }

    if (organizationCode == "dev") {
      setTimeout(() => {
        setShowLogin(true);
        setLoading(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const onChangeText = (e) => {
    setOrganizationCode(e.target.value);
  };
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="backgroundImage-container">
      <div>
        <img src={logo} className="logo-imgTop" alt="logo" />
      </div>
      <div className="column-container">
        <div className="logo-img-container">
          <img src={kiosklogo} className="logo-img" alt="logo" />
          <h1 className="heading">Employee Login</h1>
        </div>
        {showLogin ? (
          <div className="oraganization-form">
            <TextInput
              placeholder={"username"}
              label={"Username:"}
              value={username}
              onChange={onChangeUsername}
            />
            <PasswordInput
              placeholder={"password"}
              label={"Pasword:"}
              value={password}
              onChange={onChangePassword}
            />
            <div className="button">
              <Button
                title={loading ? "Logging In..." : "Login"}
                onPressButton={onPress}
                loading={loading}
              />
            </div>
          </div>
        ) : (
          <div className="oraganization-form">
            <TextInput
              suffix=".co"
              prefix={"https://"}
              placeholder={"enter domain"}
              value={organizationCode}
              label={"Domain:"}
              onChange={onChangeText}
            />
            <div className="button">
              <Button
                title={loading ? "Verifying..." : "Verify"}
                onPressButton={onPress}
                loading={loading}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Login;
