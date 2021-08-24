import moment from "moment";
import React from "react";
import { createUseStyles } from "react-jss";
import { List } from "../../componnets/List";
import NoSchedule from "../../images/NoSchedule.svg";

const data = [
  {
    title: "upcoming",
    time: "3:00 PM - 6:00 PM",
    break: "0 min",
  },
  {
    title: "Title 2",
    time: "3:00 PM - 6:00 PM",
    break: "0 min",
  },
  {
    title: "Title 3",
    time: "3:00 PM - 6:00 PM",
    break: "0 min",
  },
  {
    title: "Title 4",
    time: "3:00 PM - 6:00 PM",
    break: "0 min",
  },
];

const Schedules = () => {
  const styles = useStyle();

  const onItemPress = (item) => {
    console.log("item ", item);
  };

  let date = moment().format("dddd, MMM DD, YYYY");
  let workshifts = ["a"];
  if (workshifts && workshifts.length > 0) {
    return (
      <div>
        <span className={styles.date}>{date}</span>
        <List dataArray={data} horizontal={true} onItemPress={onItemPress} />
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
  cardContainer: {
    width: 300,
    borderRadius: 5,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 20,
    marginRight: 10,
    borderWidth: 1,
  },
  content: {
    width: "50%",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 2,
    paddingRight: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  status: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  detailContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 4,
    paddingBottom: 4,
  },
  time: {
    fontSize: 20,
    color: "#778392",
    fontWeight: "bold",
  },
  project: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
  },
  projectText: {
    fontSize: 14,
    color: "#778392",
  },
  mealBreak: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    marginVertical: 8,
  },
  mealBreakText: {
    fontSize: 14,
    color: "#778392",
  },
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
