import { useState } from "react";
import { createUseStyles } from "react-jss";

const SchedulerTab = ({ navigation, route }) => {
  //const [empty, setEmpty] = useState(true);
  const [message, setMessage] = useState("");
  const [responses, setResponses] = useState([]);
  //const styles = useStyle();

  let employee = [
    "36",
    "palwisha",
    "palwisha",
    "090078601",
    "778963",
    "palwish@webhr.co",
    "2",
    "4",
    "33",
    "34",
    "7",
    "female",
    "active",
    "22-08-02",
    "adeujkh",
    "44",
  ];

  const sendMsg = async (msg) => {
    let response = await window.api.refreshTables(employee);
    console.log("Response==", response);
  };

  return (
    <div>
      <header className="App-header">
        <h1>Standalone application with Electron, React, and SQLite stack.</h1>
      </header>
      <article>
        <p>
          Say <i>ping</i> to the main process.
        </p>
        <input
          type="text"
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
        />
        <button type="button" onClick={() => sendMsg(message)}>
          Send
        </button>
        <br />
        <p>Main process responses:</p>
        <br />
        <pre>
          {(responses && responses.join("\n")) ||
            "the main process seems quiet!"}
        </pre>
      </article>
    </div>
  );
  // return (
  //   <div className={styles.container}>
  //     <Header title="Schedules" />
  //     {empty ? (
  //       <div className={styles.img}>
  //         <Empty description={"No Schedules"} imageStyle={{ height: 200 }} />
  //       </div>
  //     ) : null}
  //   </div>
  // );
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
