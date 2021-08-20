import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import {
  AdditionalInButton,
  AdditionalOutButton,
  ExtraInButton,
  ExtraOutButton,
  LunchInButton,
  LunchOutButton,
  SignInButton,
  SignOutButton,
} from "../../componnets/AttendanceButton";
import { Loader } from "../../componnets/Loader";
import AttendanceTypes from "../AttendanceTypes";

const useStyle = createUseStyles({
  row: {
    display: "flex",
    flexDirection: "row",
  },
  buttonContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});

const AttendanceButtonGenerator = ({
  lastAttendanceType,
  onButtonPress,
  loading,
  multipleAttendance,
  limitAttendanceToSignInSignOut,
  employeeId,
}) => {
  const [signInButton, setSignInButton] = useState(false);
  const [lunchInButton, setLunchInButton] = useState(false);
  const [lunchOutButton, setLunchOutButton] = useState(false);
  const [signOutButton, setSignOutButton] = useState(false);
  const [additioalOutButton, setAdditionalOutButton] = useState(false);
  const [additioalInButton, setAdditionalInButton] = useState(false);
  const [extraOutButton, setExtraOutButton] = useState(false);
  const [extraInButton, setExtraInButton] = useState(false);

  const styles = useStyle();

  const checkButtons = async () => {
    console.log("checkButtons lastAttendanceType: ", lastAttendanceType);

    //let breaks = await getBreaksTakenToday(employeeId);
    let breaks = [0, 1, 2, 3, 4, 5, 6, 7];
    console.log("Breaks taken: ", breaks);
    if (
      lastAttendanceType == null ||
      lastAttendanceType == AttendanceTypes.SIGN_OUT
    ) {
      setSignInButton(true);
    } else {
      //User previously signed In
      console.log("Last Sign In: ", lastAttendanceType);
      if (lastAttendanceType == AttendanceTypes.SIGN_IN) {
        if (!limitAttendanceToSignInSignOut) {
          if (!breaks.includes(AttendanceTypes.LUNCH_BREAK_OUT)) {
            setLunchOutButton(true);
          }

          if (!breaks.includes(AttendanceTypes.ADDITIONAL_BREAK_OUT)) {
            setAdditionalOutButton(true);
          }
        }
        setSignOutButton(true);
      } else if (lastAttendanceType == AttendanceTypes.LUNCH_BREAK_OUT) {
        setLunchInButton(true);
      } else if (lastAttendanceType == AttendanceTypes.LUNCH_BREAK_IN) {
        if (!limitAttendanceToSignInSignOut) {
          if (!breaks.includes(AttendanceTypes.ADDITIONAL_BREAK_OUT)) {
            setAdditionalOutButton(true);
          }
        }
        setSignOutButton(true);
      } else if (lastAttendanceType == AttendanceTypes.ADDITIONAL_BREAK_OUT) {
        setAdditionalInButton(true);
      } else if (lastAttendanceType == AttendanceTypes.ADDITIONAL_BREAK_IN) {
        if (!limitAttendanceToSignInSignOut) {
          if (!breaks.includes(AttendanceTypes.EXTRA_BREAK_OUT)) {
            setExtraOutButton(true);
          }
        }

        setSignOutButton(true);
      } else if (lastAttendanceType == AttendanceTypes.EXTRA_BREAK_OUT) {
        setExtraInButton(true);
      } else if (lastAttendanceType == AttendanceTypes.EXTRA_BREAK_IN) {
        setSignOutButton(true);
      }
    }
  };

  useEffect(() => {
    checkButtons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader size={10} color={"#0c64ae"} />;
  }

  return (
    <div className={styles.buttonContainer}>
      <SignInButton onPress={onButtonPress} visible={signInButton} />
      <div className={styles.row}>
        <LunchOutButton onPress={onButtonPress} visible={lunchOutButton} />
        <LunchInButton onPress={onButtonPress} visible={lunchInButton} />
        <AdditionalOutButton
          onPress={onButtonPress}
          visible={additioalOutButton}
        />
        <AdditionalInButton
          onPress={onButtonPress}
          visible={additioalInButton}
        />
        <ExtraOutButton onPress={onButtonPress} visible={extraOutButton} />
        <ExtraInButton onPress={onButtonPress} visible={extraInButton} />
      </div>
      <SignOutButton onPress={onButtonPress} visible={signOutButton} />
    </div>
  );
};

export default AttendanceButtonGenerator;
