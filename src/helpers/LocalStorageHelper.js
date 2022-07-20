import { getDateTime } from "../commons/Common";
import {
  clearAsyncStorage as clear,
  getObject as getAsObject,
  getString as get,
  saveObject as setAsObject,
  saveString as set,
} from "./StorageHelper";

const KEYS = {
  USER: "user",
  CREDENTIALS: "credentials",
  LAST_REFRESH_DATE: "last_refresh_date",
  SETTINGS: "settings",
  LAST_ATTENDANCE_ACTION: "last_attendance_action",
  LAST_SYNC_DATE: "last_sync_date",
  LOGIN_TIME: "LOGIN_TIME",
  WORKSHIFTS: "WORKSHIFTS",
};

export const saveUser = (objUser) => {
  return setAsObject(KEYS.USER, objUser);
};

export const getUser = () => {
  return getAsObject(KEYS.USER);
};

export const saveCredetntials = (objCredentials) => {
  return setAsObject(KEYS.CREDENTIALS, objCredentials);
};

export const getCredentials = () => {
  return getAsObject(KEYS.CREDENTIALS);
};

export const saveLastRefreshDate = (date) => {
  return set(KEYS.LAST_REFRESH_DATE, date);
};

export const getLastRefreshDate = () => {
  return get(KEYS.LAST_REFRESH_DATE);
};

export const saveSettings = (objSettings) => {
  return setAsObject(KEYS.SETTINGS, objSettings);
};

export const getSettings = () => {
  return getAsObject(KEYS.SETTINGS);
};

export const saveLastAttendanceAction = (value) => {
  return setAsObject(KEYS.LAST_ATTENDANCE_ACTION, value);
};

export const getLastAttendanceAction = () => {
  return getAsObject(KEYS.LAST_ATTENDANCE_ACTION);
};

export const saveLastSyncDate = (value) => {
  return setAsObject(KEYS.LAST_SYNC_DATE, value);
};

export const getLastSyncDate = () => {
  return getAsObject(KEYS.LAST_SYNC_DATE);
};

export const saveLoginTime = () => {
  const time = getDateTime();
  return setAsObject(KEYS.LOGIN_TIME, time);
};

export const getLoginTime = () => {
  return getAsObject(KEYS.LOGIN_TIME);
};

export const saveWorkShifts = (workShifts) => {
  return setAsObject(KEYS.WORKSHIFTS, workShifts);
};

export const getWorkShifts = () => {
  return getAsObject(KEYS.WORKSHIFTS);
};
export const clearStorage = () => {
  clear();
};
