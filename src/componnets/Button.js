import { LoadingOutlined } from "@ant-design/icons";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  container: {
    width: "100%",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#0c64ae",
    justifyContent: "center",
    padding: 5,
  },
  icon: {
    fontSize: 18,
    color: "#fff",
  },
  button: {
    backgroundColor: "#0c64ae",
    borderWidth: 0,
    borderRadius: 3,
    color: "#fff",
    fontWeight: "300",
    fontSize: 18,
    paddingLeft: 10,
    width: "100%",
  },
});

export const Button = ({ title, onPressButton, loading }) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      {loading ? (
        <div>
          <LoadingOutlined className={classes.icon} />
        </div>
      ) : (
        <div />
      )}
      <div>
        <button onClick={onPressButton} className={classes.button}>
          {title}
        </button>
      </div>
    </div>
  );
};
