import { useState } from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router";
import { Button } from "../componnets/Button";
import { PasswordInput, TextInput } from "../componnets/TextInput";
import backgroundImage from "../images/background.jpg";
import kiosklogo from "../images/kiosklogo.png";
import logo from "../images/logo.png";

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
    height: 350,
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
    marginLeft: 20,
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
  },
});

const Login = () => {
  let history = useHistory();
  const classes = useStyles();
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
    <div className={classes.mainContainer}>
      <div>
        <img src={logo} className={classes.logoImage} alt="logo" />
      </div>
      <div className={classes.conatiner}>
        <div className={classes.logoImageContainer}>
          <img src={kiosklogo} className={classes.logo} alt="logo" />
          <h1 className={classes.heading}>Employee Login</h1>
        </div>
        {showLogin ? (
          <div className={classes.oraganizationForm}>
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
            <div className={classes.btncontainer}>
              <Button
                title={loading ? "Logging In..." : "Login"}
                onPressButton={onPress}
                loading={loading}
                backgroundColor={"#0c64ae"}
              />
            </div>
          </div>
        ) : (
          <div className={classes.oraganizationForm}>
            <TextInput
              suffix=".co"
              prefix={"https://"}
              placeholder={"enter domain"}
              value={organizationCode}
              label={"Domain:"}
              onChange={onChangeText}
            />
            <div className={classes.btncontainer}>
              <Button
                title={loading ? "Verifying..." : "Verify"}
                onPressButton={onPress}
                loading={loading}
                backgroundColor={"#0c64ae"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Login;
