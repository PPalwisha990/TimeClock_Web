import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fal } from "@fortawesome/pro-light-svg-icons";
import "./App.css";
import Routing from "./routes/Routing";

const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <Routing />
    </div>
  );
};

// const iconList = Object.keys(Icons)
//   .filter((key) => key !== "fal" && key !== "prefix")
//   .map((icon) => Icons[icon]);

library.add(fal);

export default App;
