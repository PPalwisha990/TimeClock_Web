import { useState } from "react";
import { createUseStyles } from "react-jss";
import { Button } from "../componnets/Button";
import { PasswordInput, TextInput } from "../componnets/TextInput";
import { onLoginPressed } from "../controllers/LoginController";
import useAuth from "../hooks/useAuth";
import backgroundImage from "../images/background.jpg";
import kiosklogo from "../images/kiosklogo.png";
import logo from "../images/logo.png";

const Login = () => {
  const { setUser } = useAuth();

  const classes = useStyles();
  const [organizationCode, setOrganizationCode] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeText = (e) => {
    setOrganizationCode(e.target.value);
  };
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSetLoading = (value) => {
    setLoading(value);
  };

  const onSetUser = (user) => {
    setUser(user);
  };

  const onLogin = () => {
    setLoading(true);
    onLoginPressed(
      organizationCode,
      username,
      password,
      onSetLoading,
      onSetUser
    );
  };

  return (
    <div className={classes.mainContainer}>
      <div>
        <img src={logo} className={classes.logoImage} alt="logo" />
      </div>
      <div className={classes.conatiner}>
        <div className={classes.logoImageContainer}>
          <img src={kiosklogo} className={classes.logo} alt="logo" />
        </div>
        <div className={classes.oraganizationForm}>
          <TextInput
            label={"Username:"}
            value={username}
            onChange={onChangeUsername}
          />
          <PasswordInput
            label={"Pasword:"}
            value={password}
            onChange={onChangePassword}
          />
          <TextInput
            suffix=".co"
            prefix={"https://"}
            placeholder={"domain"}
            value={organizationCode}
            onChange={onChangeText}
          />
          <div className={classes.btncontainer}>
            <Button
              title={loading ? "Logging In..." : "Login"}
              onPressButton={onLogin}
              loading={loading}
              backgroundColor={"#0c64ae"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const useStyles = createUseStyles({
  mainContainer: {
    backgroundImage: `url(${backgroundImage})`,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: 5,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  conatiner: {
    backgroundColor: "white",
    opacity: 0.9,
    width: 400,
    display: "flex",
    height: 400,
    padding: 10,
    borderRadius: 2,
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "5%",
  },
  logoImageContainer: {
    alignSelf: "center",
    justifyContent: "center",
  },
  logo: {
    height: 55,
    marginTop: 5,
  },
  logoImage: {
    height: 60,
  },
  oraganizationForm: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 20,
  },
  heading: {
    padding: 5,
    color: "#3F3D56",
    fontWeight: "300",
    fontSize: 24,
    paddingTop: 10,
  },

  btncontainer: {
    paddingTop: 10,
    marginLeft: 14,
  },
});
export default Login;
