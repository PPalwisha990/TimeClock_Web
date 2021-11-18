import { Empty } from "antd";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import Header from "../../componnets/Header";

const SchedulerTab = ({ navigation, route }) => {
  const [empty, setEmpty] = useState(true);

  const [responses, setResponses] = useState([]);
  const styles = useStyle();

  return (
    <div className={styles.container}>
      <Header title="Schedules" />
      {empty ? (
        <div className={styles.img}>
          <Empty description={"No Schedules"} imageStyle={{ height: 200 }} />
        </div>
      ) : null}
    </div>
  );
};

const useStyle = createUseStyles({
  img: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100,
  },
  container: {
    height: "100%",
  },
  message: {
    color: "#778392",
    fontSize: 18,
  },
});

export default SchedulerTab;
