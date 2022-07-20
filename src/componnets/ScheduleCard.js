import { createUseStyles } from "react-jss";
import { CardColors } from "./CardColors";

export const ScheduleCard = ({ data }) => {
  const styles = useStyle();
  return (
    <div
      className={styles.cardContainer}
      style={{
        backgroundColor: CardColors(data.color, "light"),
        border: "1px solid" + CardColors(data.color, "dark"),
      }}
    >
      <div
        className={styles.content}
        style={{ backgroundColor: CardColors(data.color, "dark") }}
      >
        <span className={styles.status}>{data.title}</span>
      </div>
      <div className={styles.detailContainer}>
        <span className={styles.time}>{data.time}</span>
        <span className={styles.projectText}>{"WebHR"}</span>
        <span className={styles.mealBreakText}>
          {"Lunch Break: " + data.break}
        </span>
      </div>
    </div>
  );
};

const useStyle = createUseStyles({
  cardContainer: {
    width: 250,
    borderRadius: 5,
    padding: 15,
  },
  content: {
    width: "100%",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 5,
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
    flexDirection: "column",
    paddingLeft: 10,
    paddingTop: 5,
  },
  time: {
    fontSize: 14,
    color: "#778392",
    fontWeight: "bold",
  },
  projectText: {
    fontSize: 14,
    color: "#778392",
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
