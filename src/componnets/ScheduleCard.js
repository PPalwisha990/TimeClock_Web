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
        {/* <span className={styles.time}>{data.StartTime + " - "}</span> */}
        <span className={styles.time}>{data.time}</span>
      </div>
      <div className={styles.project}>
        <span className={styles.projectText}>{"WebHR"}</span>
      </div>
      <div className={styles.mealBreak}>
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
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 20,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
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
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 4,
    paddingBottom: 4,
  },
  time: {
    fontSize: 14,
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
