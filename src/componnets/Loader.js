import { Bounce, Dots, Spinner, Squares, Windmill } from "react-activity";
import "react-activity/dist/Dots.css";

export const Loader = ({ type, size, color }) => {
  switch (type) {
    case "Dots":
      return <Dots size={size} color={color} />;
    case "Bounce":
      return <Bounce size={size} color={color} />;
    case "Windmill":
      return <Windmill size={size} color={color} />;
    case "Squares":
      return <Squares size={size} color={color} />;

    default:
      return <Spinner size={size} color={color} />;
  }
};
