import { useHistory } from "react-router";
import "./Loginstyle.css";
const Login = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <div className="backgroundImage-container">
      <h1>Hello</h1>
    </div>
  );
};
export default Login;
