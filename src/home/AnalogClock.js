import moment from "moment";
import React from "react";
import { createUseStyles } from "react-jss";
import ClockNew from "../componnets/ClockNew";

const useStyle = createUseStyles({
  dateTime: {
    color: "#A9A9A9",
    fontSize: 25,
    padding: 20,
  },
  clock: {
    marginBottom: 25,
  },
});

// const InvalidAccessCode = () => {
//     return (
//       <div style={styles.warningContainer}>
//         <Icon name="times" type="light" color={'#eb4d4b'} size={200} />
//         <Text style={styles.warningText}>
//           {kioskType == 'Biometric'
//             ? 'No record matched!'
//             : 'Invalid Access Code!'}
//         </Text>
//       </div>
//     );
//   };

const AnalogClock = ({
  showSuccessMessage,
  sucessMessageParams,
  showWarning,
}) => {
  const classes = useStyle();
  const now = moment().format("dddd, MMMM D, YYYY ");
  // if (showSuccessMessage) {
  //     return (
  //       <View style={styles.successContainer}>
  //         <SuccessMessage
  //           name={sucessMessageParams?.name}
  //           photo={sucessMessageParams?.photo}
  //           message={sucessMessageParams?.message}
  //         />
  //       </View>
  //     );
  //   }

  //   if (showWarning) {
  //     return <InvalidAccessCode />;
  //   }

  return (
    <div>
      {/* <Clock /> */}
      <div className={classes.clock}>
        <ClockNew />
      </div>
      <div>
        <span className={classes.dateTime}>{now}</span>
      </div>
    </div>
  );
};
export default AnalogClock;
