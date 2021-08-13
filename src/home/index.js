import { useHistory } from "react-router";
import { Header } from "../componnets/Header";

const Home = () => {
  let history = useHistory();

  return (
    <div>
      <Header />
    </div>
  );
};
export default Home;
