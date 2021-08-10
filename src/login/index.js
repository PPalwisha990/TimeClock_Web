import { useHistory } from "react-router";
import { TextInput } from "../componnets/TextInput";
import "./Loginstyle.css";
const Login = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <div className="flexbox-container">
      <div className="column-container">
        <h2>Column 1</h2>
        <div className="form-container">
          <TextInput
            placeholder={"Enter domain"}
            suffix={".co"}
            prefix={"http:"}
          />
        </div>
      </div>
      <div className="column2-container">
        <h2>Column 2</h2>
      </div>
    </div>
  );
};
export default Login;
