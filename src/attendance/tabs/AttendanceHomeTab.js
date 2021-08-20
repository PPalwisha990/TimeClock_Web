import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Avatar from "../../componnets/Avatar";
import Field from "../../componnets/Field";
import InfoBanner from "../../componnets/InfoBanner";
import AttendanceButtonGenerator from "./AttendanceButtonGenerator";
import Map from "./Map";
import Schedules from "./Schedules";

const AttendanceHomeTab = ({ employee }) => {
  const [buttonsLoading, setButtonsLoading] = useState(false);
  const [lastAttendanceType, setLastAttendanceType] = useState();
  const [multipleAttendance, setMultipleAttendance] = useState(false);
  const [settings, setSettings] = useState();
  const [includeFields, setIncludeFields] = useState(true);

  let signInTime = "9:00 AM";
  let signInDay = "today";
  let canMarkAttendance = true;
  // if (attendanceDate != getDate()) {
  //   signInDay = 'yesterday';
  // }
  let signInTimeMessage = "You signed in " + signInDay + " at " + signInTime;
  const styles = useStyle();

  const onButtonPress = (type) => {
    setButtonsLoading(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.coulumn}>
        <div className={styles.row}>
          <div>
            <Avatar
              size="large"
              name={employee.employeeName}
              photo={employee.photo}
            />
          </div>
          <div className={styles.userInfo}>
            <span className={styles.employeeName}>{employee.employeeName}</span>
            <span className={styles.designation}>
              {employee.emailAddress != ""
                ? employee.emailAddress
                : employee.employeeName}
            </span>
          </div>
        </div>
        {signInTime != "" ? (
          <div className={styles.signInTimeContainer}>
            <span className={styles.signInTime}>{signInTimeMessage}</span>
          </div>
        ) : null}
        {canMarkAttendance ? (
          <AttendanceButtonGenerator
            employeeId={employee?.employeeId}
            loading={buttonsLoading}
            lastAttendanceType={lastAttendanceType}
            onButtonPress={onButtonPress}
            multipleAttendance={multipleAttendance}
            limitAttendanceToSignInSignOut={false}
          />
        ) : (
          <InfoBanner
            text={"No Schedule added! Cannot mark Attendance without Schedule"}
          />
        )}
        <div style={styles.fields}>
          {includeFields ? (
            <Field icon="building" iconColor="#EB5757" name="Station"></Field>
          ) : null}

          {includeFields ? (
            <Field icon="tasks" iconColor="#27AE60" name="Project">
              {/* <Picker
                    single={true}
                    defaultValue={selectedProjectId}
                    key="Project"
                    fieldName={'Project'}
                    values={projects}
                    onValueSelect={(id) => {
                      setSelectedProjectId(id);
                    }}
                  /> */}
            </Field>
          ) : null}
          <Field icon="sticky-note" iconColor="#6254DB" name="Notes">
            {/* <TextArea
                  onChangeText={onNotesChange}
                  placeholder={'Add notes here'}
                /> */}
          </Field>
        </div>
      </div>
      <div className={styles.coulumn2}>
        <div className={styles.scheduleContainer}>
          <Schedules />
        </div>
        <div className={styles.mapContainer}>
          <Map />
        </div>
      </div>
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 10,
    alignItems: "center",
    paddingTop: 10,
  },
  userInfo: {
    paddingLeft: 10,
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  employeeName: {
    fontSize: 25,
    color: "#697378",
    fontWeight: "bold",
  },
  designation: {
    fontSize: 16,
    color: "#697378",
  },
  signInTime: {
    color: "#1A1A1A",
    fontSize: 16,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  coulumn: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
  },
  coulumn2: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
  },
  signInTimeContainer: {
    alignSelf: "center",
  },
  scheduleContainer: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  mapContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 20,
  },
});

export default AttendanceHomeTab;
