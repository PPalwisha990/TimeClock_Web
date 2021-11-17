import { useState } from "react";
import { createUseStyles } from "react-jss";

const SchedulerTab = ({ navigation, route }) => {
  //const [empty, setEmpty] = useState(true);
  const [message, setMessage] = useState("");
  const [responses, setResponses] = useState([]);
  //const styles = useStyle();

  let employee = [
    {
      employeeId: 36,
      employeeName: "palwisha",
      userName: "palwisha",
      mobile: "090078601",
      office: "778963",
      email: "palwish@webhr.co",
      sId: 2,
      cId: 4,
      dId: 33,
      ddId: 34,
      reportsTo: 7,
      accessCode: 5,
      ios: "121",
      status: 0,
      android: "3323",
      photo: "adeujkh",
      reportsToRole: "0",
      wId: 19,
    },
  ];

  const sendMsg = async (msg) => {
    let response = await window.api.refreshTables(employee);
    console.log("Response==", response);
  };

  const getEmployees = async () => {
    await window.api.getEmployeesFromDatabase((data) =>
      console.log("data==", data)
    );
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
        <button type="button" onClick={() => getEmployees()}>
          Get
        </button>
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
