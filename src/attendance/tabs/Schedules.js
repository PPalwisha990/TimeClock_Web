import moment from "moment";
import React from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router";
import { List } from "../../componnets/List";
import { ScheduleCard } from "../../componnets/ScheduleCard";
import NoSchedule from "../../images/NoSchedule.svg";

const data = [
  {
    title: "upcoming",
    time: "3:00 PM - 6:00 PM",
    break: "0 min",
    color: "fff0c5",
  },
  {
    title: "Title 2",
    time: "3:00 PM - 6:00 PM",
    break: "0 min",
    color: "d4ffd2",
  },
  {
    title: "Title 3",
    time: "3:00 PM - 6:00 PM",
    break: "0 min",
    color: "c9dcff",
  },
  {
    title: "upcoming",
    time: "3:00 PM - 6:00 PM",
    break: "0 min",
    color: "fff0c5",
  },
];

const Schedules = () => {
  const styles = useStyle();
  let history = useHistory();

  const onIconPress = () => {
    history.push({
      pathname: "/scheduleList",
      state: { data },
    });
  };

  let date = moment().format("dddd, MMM DD, YYYY");
  let workshifts = ["a"];
  if (workshifts && workshifts.length > 0) {
    return (
      <div className={styles.schedule}>
        <span className={styles.date}>{date}</span>
        <List
          dataArray={data}
          horizontal={true}
          renderItems={(item, index) => <ScheduleCard data={item} />}
          showIconMore={true}
          onIconPress={onIconPress}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.noSchedule}>
        <span className={styles.date}>{date}</span>
        <img
          src={NoSchedule}
          alt="schedule-img"
          style={{ width: 200, height: 150 }}
        />
        <span className={styles.noScheduleText}>No Schedules found</span>
      </div>
    );
  }
};

const useStyle = createUseStyles({
  noSchedule: {
    justifyContent: "center",
    alignItems: "center",
    border: "solid 1px #E3E3E3",
    borderRadius: 5,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 20,
  },
  schedule: {
    marginLeft: 20,
    marginRight: 20,
  },
  noScheduleText: {
    color: "#778392",
    fontSize: 18,
  },
  date: { color: "#A9A9A9", fontSize: 18 },
  image: {
    width: 250,
    height: 250,
  },
});

export default Schedules;
