import { useHistory } from "react-router";
import useAuth from "../hooks/useAuth";

const Home = () => {
  let history = useHistory();
  const { user } = useAuth();

  const handleClick = () => {
    history.push("/login");
  };

  return (
    <form>
      <h1>Welcome, {user.name}</h1>
      <label>
        <p>Home</p>
        <input type="text" />
      </label>
      <label>
        <p>home</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </div>
    </form>
  );
};
export default Home;
