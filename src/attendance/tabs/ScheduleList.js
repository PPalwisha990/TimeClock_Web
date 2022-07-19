import { List } from "antd";
import { createUseStyles } from "react-jss";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../../componnets/Header";
import { ScheduleCard } from "../../componnets/ScheduleCard";
import Screen from "../../componnets/Screen";
import { Row, Col } from "react-bootstrap";

const ScheduleList = () => {
  const styles = useStyle();
  const history = useHistory();
  const location = useLocation();

  const onBackPress = () => {
    history.goBack();
  };

  console.log("location.state.data", location?.state?.data);
  return (
    <Screen
      content={
        <div className={styles.container}>
          <Header
            title="My Schedules"
            onBackPress={onBackPress}
            showBack={true}
          />
          {/* <List
            className={styles.content}
            grid={{ gutter: 10, column: 4 }}
            dataSource={location.state.data}
            renderItem={(item) =>}
          /> */}

          <Row style={{ padding: 20 }}>
            {location?.state?.data?.map((item, index) => {
              return (
                <Col key={index} className="p-2" sm={6} md={4} xl={2}>
                  <ScheduleCard data={item} />
                </Col>
              );
            })}
          </Row>
        </div>
      }
    />
  );
};
const useStyle = createUseStyles({
  container: {
    height: "100%",
  },
  content: {
    margin: "20px 20px",
    paddingLeft: 30,
  },
});
export default ScheduleList;
