import { log } from "../commons/Common";

export const saveString = (key, value, printLog = true) => {
  let isSaved = localStorage.setItem(key, value);
  if (isSaved) {
    log("AsyncStorage: Saved at key " + key + " successfully!");
  }
  return true;
};

export const saveObject = (key, value) => {
  log("AsyncStorage: Saved at key " + key + " successfully!", value);
  return saveString(key, JSON.stringify(value));
};

export const getString = (key, printLog = true) => {
  log("AsyncStorage: getString key: " + key);
  let value = localStorage.getItem(key);
  if (printLog) {
    log("AsyncStorage: Got value of key " + key + ": ", value);
  }
  return value;
};

export const getObject = (key) => {
  let objValue = getString(key);
  return JSON.parse(objValue);
};

export const clearAsyncStorage = () => {
  localStorage.clear();
};
