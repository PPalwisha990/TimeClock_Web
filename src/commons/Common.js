import moment from "moment";
import Toast from "../componnets/Toast";
import { logout } from "../connectivity/Api";

export const log = (...args) => console.log(...args);

export const getDate = () => {
  return moment().format("YYYY-MM-DD");
};

export const getDateTime = () => {
  return moment().format("YYYY-MM-DD HH:mm");
};

export const getTime = () => {
  return moment().format("HH:mm:ss");
};

export const getDateYesterday = () => {
  return moment().subtract(1, "day").format("YYYY-MM-DD");
};
export const handleErrorResponse = (response, updateUser) => {
  if (response == "REAUTH") {
    logout(updateUser);
  } else {
    Toast.error("Something went wrong");
  }
};

export const tConvert = (time) => {
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    time = time.slice(1);
    time[5] = +time[0] < 12 ? " AM" : " PM";
    time[0] = +time[0] % 12 || 12;
    time[3] = "";
  }

  return time.join("");
};
