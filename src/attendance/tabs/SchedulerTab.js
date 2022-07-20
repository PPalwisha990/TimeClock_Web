import { Empty } from "antd";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import Header from "../../componnets/Header";

const SchedulerTab = ({ navigation, route }) => {
  const [empty, setEmpty] = useState(true);
  const styles = useStyle();
  return (
    <div className={styles.container}>
      <Header title="Schedules" />
      <div className={styles.img}>
        {empty ? (
          <div>
            <Empty description={"No Schedules"} imageStyle={{ height: 200 }} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    height: "100%",
  },
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingBottom: 100,
  },
  message: {
    color: "#778392",
    fontSize: 18,
  },
});

export default SchedulerTab;
