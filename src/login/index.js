import { useHistory } from "react-router";
import { Button } from "../componnets/Button";
import { TextInput } from "../componnets/TextInput";
import kiosklogo from "../images/kiosklogo.png";
import logo from "../images/logo.png";
import "./Loginstyle.css";

const Login = () => {
  let history = useHistory();

  const onPress = () => {
    console.log("button");
    history.push("/home");
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
        <div className="oraganization-form">
          <TextInput
            suffix=".co"
            prefix={"https://"}
            placeholder={"enter domain"}
            label={"Domain:"}
          />
          <div className="button">
            <Button title={"Enter"} onPressButton={onPress} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
